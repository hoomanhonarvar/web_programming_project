from rest_framework.generics import CreateAPIView,ListAPIView,RetrieveUpdateDestroyAPIView,GenericAPIView

from dish.models import dish
from .serializers import restauranListSerializer
from .models import restaurant
from rest_framework.permissions import IsAdminUser,IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework import status,views
from dish.serializers import list_of_dishes_tmp_Serializer
from django.core import serializers
from dish.serializers import list_of_dishes_Serializer
class restaurantCreateAPIView(CreateAPIView):
    serializer_class = restauranListSerializer
    queryset = restaurant.objects.all()
    permission_classes = (IsAdminUser, )
    def perform_create(self, serializer):
        return serializer.save()

class restaurantListAPIView(ListAPIView):
    serializer_class = restauranListSerializer
    queryset = restaurant.objects.all()

class restaurantDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = restauranListSerializer
    queryset = restaurant.objects.all()
    permission_classes = (IsAuthenticatedOrReadOnly,)


class like_restAPIView(GenericAPIView):
    def get(self,request,pk):
        res_id=pk
        if not restaurant.objects.filter(id=res_id).exists():
            return Response({'error':'this id is not exists'},status=status.HTTP_404_NOT_FOUND)
        else:
            rest=restaurant.objects.get(id=res_id)
            if rest.fav.filter(id=request.user.id).exists():
                rest.fav.remove(request.user)
            else:
                rest.fav.add(request.user)
            return Response(status=status.HTTP_204_NO_CONTENT)

class favourite_restAPIView(ListAPIView):
    serializer_class = restauranListSerializer

    def get_queryset(self):
        user=self.request.user
        return restaurant.objects.filter(fav__username__in=[user.username])


class list_of_dishes(ListAPIView):
    serializer_class = restauranListSerializer


    def get(self,request,pk):
        res_id = pk
        if not restaurant.objects.filter(id=res_id).exists():
            return Response({'error': 'this restaurant is not exists'}, status=status.HTTP_404_NOT_FOUND)
        else:
            # dish.objects.filter(rest_id=res_id)
            # serializer=list_of_dishes_Serializer

            data = list_of_dishes_Serializer(data=dish.objects.filter(rest_id=res_id),many=True)
            data.is_valid()


            return Response(data.data, content_type="application/json",status=status.HTTP_200_OK)



