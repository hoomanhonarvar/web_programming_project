from django.contrib import admin
from django.urls import path,include
from .views import DishDetail,dishCreateAPIView,dishlistAPIView,like_dishAPIView,favourite_dishAPIView,add_dish_to_cart_APIView,del_dish_from_cart_APIView
urlpatterns = [

    path('all/', dishlistAPIView.as_view(), name='List_Of_Dishes'),
    path('<int:pk>',DishDetail.as_view(),name='Dish_Detail'),
    path('',dishCreateAPIView.as_view(),name='dish_create'),
    path('like/<int:pk>',like_dishAPIView.as_view(),name='like_dish'),
    path('fav_list/',favourite_dishAPIView.as_view(),name="list_of_favourite_dish_of_user"),
    path('add-to-cart/<int:pk>',add_dish_to_cart_APIView.as_view(),name="add_dish_to_cart_of_user"),
    path('del-from-cart/<int:pk>',del_dish_from_cart_APIView.as_view(),name="del_dish_from_cart")


]
