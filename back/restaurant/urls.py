from django.urls import path,include
from .views import restaurantListAPIView,restaurantDetailAPIView
urlpatterns= [
    path('all/',restaurantListAPIView.as_view(),name="List_of_restaurant"),
    path("<int:pk>",restaurantDetailAPIView.as_view(),name="get_restaurant")

]