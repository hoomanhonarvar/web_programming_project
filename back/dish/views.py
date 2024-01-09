from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import RetrieveUpdateDestroyAPIView,CreateAPIView,ListAPIView,GenericAPIView
from .models import dish
from .serializers import list_of_dishes_Serializer
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
# Create your views here.
class dishCreateAPIView(CreateAPIView):
    serializer_class = list_of_dishes_Serializer
    queryset = dish.objects.all()
    permission_classes = (IsAdminUser)
    def perform_create(self, serializer):
        return serializer.save()

class dishlistAPIView(ListAPIView):
    serializer_class = list_of_dishes_Serializer
    queryset = dish.objects.all()
class DishDetail(RetrieveUpdateDestroyAPIView):
    queryset = dish.objects.all()
    serializer_class = list_of_dishes_Serializer
    permission_classes = (IsAdminUser,)

class like_dishAPIView(GenericAPIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request, pk):
        dish_id = pk
        if not dish.objects.filter(id=dish).exists():
            return Response({'error': 'this id is not exists'}, status=status.HTTP_404_NOT_FOUND)
        else:
            dish_item = dish.objects.get(id=dish_id)
            if dish_item.fav.filter(id=request.user.id).exists():
                dish_item.fav.remove(request.user)
            else:
                dish_item.fav.add(request.user)
            return Response(status=status.HTTP_204_NO_CONTENT)

class favourite_dishAPIView(ListAPIView):
    serializer_class = list_of_dishes_Serializer
    def get_queryset(self):
        user = self.request.user
        return dish.objects.filter(fav__username__in=[user.username])
