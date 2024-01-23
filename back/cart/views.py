from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated

from .serializers import createNewCartSerializer,Upcoming_orders_list_Serializer,Previous_orders_list_Serializer,CartListSerializer
from .models import cart
from rest_framework import permissions
from django.db.models import Q
from rest_framework.response import Response
from rest_framework import status
from restaurant.models import restaurant
from address.models import user_add
from .serializers  import createNewCartInputSerializer
# Create your views here.

class createNewCartAPIView(GenericAPIView):
    serializer_class = createNewCartInputSerializer
    permission_classes = (IsAuthenticated,)

    def post(self,request):
        user_carts = cart.objects.filter(owner=request.user)
        if user_carts.filter(finish_cancel='N').exists():
            return Response({'error': 'you have not started cart please wait until your cart be started '}, status=status.HTTP_403_FORBIDDEN)
        else:


            data=request.data
            data['owner']=request.user.id
            data['rest_name']=restaurant.objects.get(id=data['rest_id']).name
            serializer=self.serializer_class(data=data)
            serializer.is_valid(raise_exception=True)
            serializer.save()

            return Response(data,status=status.HTTP_201_CREATED)
class CartListAPIView(ListAPIView):
    serializer_class = CartListSerializer
    queryset = cart.objects.all()
    permission_classes = (permissions.IsAuthenticated,)

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

