from rest_framework.generics import ListAPIView , RetrieveUpdateDestroyAPIView
from django.shortcuts import get_object_or_404
from .serializers import List_UserSerializer
from .models import user
from rest_framework.permissions import IsAdminUser
# Create your views here.

class ListOfUsers(ListAPIView):
    queryset = user.objects.all()
    serializer_class = List_UserSerializer
    permission_classes = (IsAdminUser,)
class userDetail(RetrieveUpdateDestroyAPIView):
    queryset = user.objects.all()
    serializer_class = List_UserSerializer