from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,ListAPIView,RetrieveUpdateDestroyAPIView
from .serializers import createNewCartSerializer,Upcoming_orders_list_Serializer,Previous_orders_list_Serializer
from .models import cart
from rest_framework import permissions
from django.db.models import Q
# Create your views here.


class createNewCartAPIView(ListCreateAPIView):
    serializer_class = createNewCartSerializer
    queryset = cart.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
    def perform_create(self, serializer):

        return serializer.save(owner=self.request.user)
    def get_queryset(self):
        return self.queryset.filter(Q(owner=self.request.user) and Q(finish_cancel='N'))

class Upcoming_orders_list_APIView(ListAPIView):
    serializer_class = Upcoming_orders_list_Serializer
    queryset = cart.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
    def get_queryset(self):
        return self.queryset.filter(Q(owner=self.request.user) and Q(finish_cancel='D'))

class Previous_orders_list_APIView(ListAPIView):
    serializer_class = Previous_orders_list_Serializer
    queryset = cart.objects.all()
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return self.queryset.filter(owner=self.request.user).filter(Q(finish_cancel='F') or Q(finish_cancel='C'))

class CartDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = createNewCartSerializer
    queryset = cart.objects.all()
    permission_classes = (permissions.IsAdminUser)
    lookup_field = "id"


    #
    # def get_queryset(self):
    #     return self.queryset.filter(owner=self.request.user)

