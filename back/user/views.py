from rest_framework.generics import ListAPIView , RetrieveUpdateDestroyAPIView
from django.shortcuts import get_object_or_404
from .serializers import List_UserSerializer,RegisterSerializer
from .models import user_custom,User
from rest_framework.permissions import IsAdminUser
from rest_framework import status
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
class ListOfUsers(ListAPIView):
    queryset = user_custom.objects.all()
    serializer_class = List_UserSerializer
    permission_classes = (IsAdminUser,)
class userDetail(RetrieveUpdateDestroyAPIView):
    queryset = user_custom.objects.all()
    serializer_class = List_UserSerializer

class RegisterView(GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self,request):
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
        email_body='Hi' +user.username+'Use link below to verify your email \n'+absurl
        data={'email_body':email_body,'email_subject':'Verify your email','to_email':user.email}
        Util.send_email(data)


        return Response(user_data,status=status.HTTP_201_CREATED)


class VerifyEmail(GenericAPIView):
    def get(self):
        pass