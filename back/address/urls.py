from django.contrib import admin
from django.urls import path,include
from .views import addressListAPIView,addressDetailAPIView
urlpatterns = [
    path('',addressListAPIView.as_view(),name="list_of_address"),
    path('<int:id>', addressDetailAPIView.as_view(), name="list_of_address")
]
