from rest_framework.generics import ListAPIView , RetrieveUpdateDestroyAPIView
from django.shortcuts import get_object_or_404
from .serializers import List_UserSerializer
from .models import user_custom
from rest_framework.permissions import IsAdminUser
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
# Create your views here.
from rest_framework.generics import GenericAPIView

class ListOfUsers(ListAPIView):
    queryset = user_custom.objects.all()
    serializer_class = List_UserSerializer
    permission_classes = (IsAdminUser,)
class userDetail(RetrieveUpdateDestroyAPIView):
    queryset = user_custom.objects.all()
    serializer_class = List_UserSerializer
#
# class RegisterView(GenericAPIView):
#     serializer_class =  RegisterSerializer
# @api_view(['POST'])
# @permission_classes([AllowAny])
# def verify_email(request):
#     token = request.data.get('token')
#
#     if token == stored_token:
#         user.email_verified = True
#         user.save()
#         return Response({'message' : 'Email verified successfully.'}
#                         , status=status.HTTP_200_OK)
#     else:
#         return Response({'message' : 'Invalid token.'},
#                         status=status.HTTP_400_BAD_REQUEST)
