import os

import jwt
from django.views.decorators.csrf import csrf_exempt
from rest_framework.generics import ListAPIView , RetrieveUpdateDestroyAPIView,UpdateAPIView
from django.shortcuts import get_object_or_404
from .serializers import List_UserSerializer,RegisterSerializer,EmailVerificationSerializer,LoginSerializer,ResendEmailSerializer,RequestPasswordResetEmailSerializer,SetNewPasswordSerializer,LogoutSerializer,userUpdateSerializer
from .models import User
from rest_framework.permissions import IsAdminUser,IsAuthenticated
from rest_framework import status,views
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
# Create your views here.
from rest_framework.generics import GenericAPIView
from rest_framework.response import responses
from rest_framework_simplejwt.tokens import RefreshToken
from .utils import Util
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
import jwt
from django.conf import  settings
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .renderers import UserRenderer

from django.shortcuts import redirect
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_str, DjangoUnicodeDecodeError, smart_bytes
from django.utils.http import urlsafe_base64_encode,urlsafe_base64_decode
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from .utils import Util
from django.http import HttpResponsePermanentRedirect
import os
class CustomRedirect(HttpResponsePermanentRedirect):
    allowed_schemes = [os.environ.get('APP_SCHEMA'),'http','https']


class ListOfUsersView(ListAPIView):
    queryset = User.object.all()
    serializer_class = List_UserSerializer
    permission_classes = (IsAdminUser,)
class userDetail(RetrieveUpdateDestroyAPIView):
    queryset = User.object.all()
    serializer_class = List_UserSerializer
    permission_classes=(IsAuthenticated,IsAdminUser)
    lookup_field=['email']
    def get_queryset(self):
        user = self.request.user

        return User.object.filter(username=user.username)
class userUpdate(UpdateAPIView):
    queryset = User.object.all()
    serializer_class = List_UserSerializer
    lookup_field=['email']



    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance

class UpdateName(UpdateAPIView):
    queryset = User.object.all()
    serializer_class = userUpdateSerializer
    permission_classes = (IsAuthenticated,)
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.email = request.data.get("email")
        instance.username=request.data.get("username")
        instance.phone_number=request.data.get("phone_number")
        print(request.data.get("phone_number"))
        instance.save()
        serializer = self.get_serializer(instance)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)


class RegisterView(GenericAPIView):
    serializer_class = RegisterSerializer
    renderer_classes = (UserRenderer,)
    def post(self,request):
        # User.object.filter(is_varified=False).exclude(is_superuser=True).delete()
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data= serializer.data
        user = User.object.get(email=user_data['email'])
        token=RefreshToken.for_user(user).access_token

        current_site=get_current_site(request).domain
        relativeLink=reverse('email-verify')
        absurl='http://'+current_site+relativeLink+"?token="+str(token)
        email_body='Hi\t' +user.username+'\tUse link below to verify your email \n'+absurl
        data={'email_body':email_body,'email_subject':'Verify your email','to_email':user.email}
        Util.send_email(data)


        return Response(user_data,status=status.HTTP_201_CREATED)

class ResendEmailVarification(GenericAPIView):
    serializer_class=ResendEmailSerializer

    def post(self,request):
        user_data=request.data
        try:
            if User.object.filter(email=user_data['email']).exists() :
                user = User.object.get(email=user_data['email'])
                #send email again

                token = RefreshToken.for_user(user).access_token
                current_site = get_current_site(request).domain
                relativeLink = reverse('email-verify')
                absurl = 'http://' + current_site + relativeLink + "?token=" + str(token)
                email_body = 'Hi \t' + user.username + '\tUse link below to verify your email \n' + absurl
                data = {'email_body': email_body, 'email_subject': 'Verify your email', 'to_email': user.email}
                Util.send_email(data)
                return Response(status=status.HTTP_200_OK)
            else:
                return Response({'error': 'email does not exist'}, status=status.HTTP_400_BAD_REQUEST)
        except:

            return Response({'error': 'some error had occurred'}, status=status.HTTP_400_BAD_REQUEST)



class VerifyEmail(views.APIView):
    serializer_class = EmailVerificationSerializer
    token_param_config=openapi.Parameter('token',in_=openapi.IN_QUERY,description='Description',type=openapi.TYPE_STRING)
    @swagger_auto_schema(manual_parameters=[token_param_config])
    def get(self,request):
        token=request.GET.get('token')
        try:
            payload= jwt.decode(token,settings.SECRET_KEY,algorithms=['HS256'])
            user=User.object.get(id=payload['user_id'])
            if not user.is_varified:
                user.is_varified = True
                user.save()
            return Response( {'email':'Successfully activated'},status=status.HTTP_201_CREATED)

        except jwt.ExpiredSignatureError as identrifier:
            return Response({'error': 'activation expired'}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.exceptions.DecodeError as identrifier:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView(GenericAPIView):
    serializer_class = LoginSerializer
    def post(self,request):
        serializer= self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)


        return Response(serializer.data,status=status.HTTP_200_OK)


class RequestPasswordResetEmail(GenericAPIView):
    serializer_class = RequestPasswordResetEmailSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        email = request.data.get('email', '')

        if User.object.filter(email=email).exists():
            user = User.object.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            current_site = get_current_site(
                request=request).domain
            relativeLink = reverse(
                'password-reset-confirm', kwargs={'uidb64': uidb64, 'token': token})

            redirect_url = request.data.get('redirect_url', '')
            absurl = 'http://'+current_site + relativeLink
            email_body = 'Hello, \n Use link below to reset your password  \n' + \
                absurl+"?redirect_url="+redirect_url
            data = {'email_body': email_body, 'to_email': user.email,
                    'email_subject': 'Reset your passsword'}
            Util.send_email(data)
        return Response({'success': 'We have sent you a link to reset your password'}, status=status.HTTP_200_OK)


class PasswordTokenCheckAPI(GenericAPIView):
    serializer_class = SetNewPasswordSerializer

    def get(self, request, uidb64, token):

        redirect_url = request.GET.get('redirect_url')

        try:
            id = smart_str(urlsafe_base64_decode(uidb64))
            user = User.object.get(id=id)

            if not PasswordResetTokenGenerator().check_token(user, token):
                if len(redirect_url) > 3:
                    return CustomRedirect(redirect_url + '?token_valid=False')
                else:
                    return CustomRedirect(os.environ.get('FRONTEND_URL', '') + '?token_valid=False')

            if redirect_url and len(redirect_url) > 3:
                return CustomRedirect(
                    redirect_url + '?token_valid=True&message=Credentials Valid&uidb64=' + uidb64 + '&token=' + token)
            else:
                return CustomRedirect(os.environ.get('FRONTEND_URL', '') + '?token_valid=False')

        except DjangoUnicodeDecodeError as identifier:
            try:
                if not PasswordResetTokenGenerator().check_token(user):
                    return CustomRedirect(redirect_url + '?token_valid=False')

            except UnboundLocalError as e:
                return Response({'error': 'Token is not valid, please request a new one'},
                                status=status.HTTP_400_BAD_REQUEST)

class SetNewPasswordAPIView(GenericAPIView):
    serializer_class = SetNewPasswordSerializer

    def patch(self,request):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'success':True,'message':'Password reset successfully'},status= status.HTTP_200_OK)

class LogoutAPIView(GenericAPIView):

    serializer_class = LogoutSerializer

    permission_classes(IsAuthenticated)
    def post(self,request):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(status=status.HTTP_204_NO_CONTENT)
