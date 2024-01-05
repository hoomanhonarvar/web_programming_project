from django.contrib import admin
from django.urls import path,include
from .views import ListOfUsers,userDetail,RegisterView,VerifyEmail
urlpatterns = [
    path('all/',ListOfUsers.as_view(),name="list_of_users"),
    path("<int:pk>/",userDetail.as_view(),name="get_user"),
    path('register/',RegisterView.as_view(),name="register"),
    path('email-verfiy/', VerifyEmail.as_view(), name="email-verify")

]
