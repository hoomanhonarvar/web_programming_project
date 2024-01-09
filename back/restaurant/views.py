from rest_framework.generics import CreateAPIView,ListAPIView,RetrieveUpdateDestroyAPIView
from .serializers import restauranListSerializer
from .models import restaurant
from rest_framework.permissions import IsAdminUser,IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework import status,views
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

