from rest_framework.generics import CreateAPIView,ListAPIView,RetrieveUpdateDestroyAPIView,GenericAPIView

from dish.models import dish
from .serializers import restauranListSerializer
from .models import restaurant
from rest_framework.permissions import IsAdminUser,IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework import status,views
from dish.serializers import list_of_dishes_Serializer
class restaurantCreateAPIView(CreateAPIView):
    serializer_class = restauranListSerializer
    queryset = restaurant.objects.all()
    permission_classes = (IsAdminUser)
    def perform_create(self, serializer):
        return serializer.save()

class restaurantListAPIView(ListAPIView):
    serializer_class = restauranListSerializer
    queryset = restaurant.objects.all()

class restaurantDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = restauranListSerializer
    queryset = restaurant.objects.all()
    permission_classes = (IsAdminUser,)


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


class list_of_dishes(GenericAPIView):
    serializer_class = list_of_dishes_Serializer
    def get(self,request,pk):
        res_id = pk
        if not restaurant.objects.filter(id=res_id).exists():
            return Response({'error': 'this id is not exists'}, status=status.HTTP_404_NOT_FOUND)
        else:
            data=dish.objects.filter(rest_id=res_id)
            serializer = self.serializer_class(data=data)
            serializer.is_valid()
            user_data = serializer.data
            return Response(user_data,status=status.HTTP_200_OK)


