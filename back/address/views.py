from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView
from .serializers import addressListSerializer
from .models import user_add
from rest_framework import permissions
from .permissions import IsOwner
# Create your views here.


class addressListAPIView(ListCreateAPIView):
    serializer_class = addressListSerializer
    queryset = user_add.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)

    def get_queryset(self):
        return self.queryset.filter(owner=self.request.user)




class addressDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = addressListSerializer
    queryset = user_add.objects.all()
    permission_classes = (permissions.IsAuthenticated,IsOwner,)
    lookup_field = "id"
    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)

    def get_queryset(self):
        return self.queryset.filter(owner=self.request.user)