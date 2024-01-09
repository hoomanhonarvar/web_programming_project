from django.urls import path,include
from .views import restaurantListAPIView,restaurantDetailAPIView,like_restAPIView,favourite_restAPIView
urlpatterns= [
    path('all/',restaurantListAPIView.as_view(),name="List_of_restaurant"),
    path("<int:pk>",restaurantDetailAPIView.as_view(),name="get_restaurant"),
    path('like/<int:pk>/',like_restAPIView.as_view(),name="like_restaurant"),
    path('fav_list/',favourite_restAPIView.as_view(),name="list_of_favourite")

]