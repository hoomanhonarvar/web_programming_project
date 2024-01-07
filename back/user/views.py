import jwt
from rest_framework.generics import ListAPIView , RetrieveUpdateDestroyAPIView
from django.shortcuts import get_object_or_404
from .serializers import List_UserSerializer,RegisterSerializer,EmailVerificationSerializer,LoginSerializer,ResendEmailSerializer
from .models import User
from rest_framework.permissions import IsAdminUser
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
class ListOfUsersView(ListAPIView):
    queryset = User.object.all()
    serializer_class = List_UserSerializer
    permission_classes = (IsAdminUser,)
class userDetail(RetrieveUpdateDestroyAPIView):
    queryset = User.object.all()
    serializer_class = List_UserSerializer

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
    def post(self,request):
        pass