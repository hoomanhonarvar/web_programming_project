from django.contrib import admin
from django.urls import path,include
from .views import ListOfUsersView,userDetail,RegisterView,VerifyEmail,LoginAPIView,ResendEmailVarification
urlpatterns = [
    path('all/',ListOfUsersView.as_view(),name="list_of_users"),
    path("<int:pk>/",userDetail.as_view(),name="get_user"),
    path('register/',RegisterView.as_view(),name="register"),
    path('email-verify/', VerifyEmail.as_view(), name="email-verify"),
    path('Login/', LoginAPIView.as_view(), name="Login"),
    path('ResendEmail/', ResendEmailVarification.as_view(), name="ResendEmail")

]
