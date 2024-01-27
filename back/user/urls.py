from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import ListOfUsersView,userDetail,RegisterView,VerifyEmail,LoginAPIView,ResendEmailVarification,PasswordTokenCheckAPI,RequestPasswordResetEmail,SetNewPasswordAPIView,LogoutAPIView,userUpdate,UserDetailAPIView
urlpatterns = [
    path('all/',ListOfUsersView.as_view(),name="list_of_users"),
    path("",userUpdate.as_view(),name="get_user"),
    path('register/',RegisterView.as_view(),name="register"),
    path('email-verify/', VerifyEmail.as_view(), name="email-verify"),
    path('Login/', LoginAPIView.as_view(), name="Login"),
    path('Logout/', LogoutAPIView.as_view(), name="Logout"),
    path("<int:pk>", UserDetailAPIView.as_view(), name="update_user"),

    path('ResendEmail/', ResendEmailVarification.as_view(), name="ResendEmail"),
    path('password-reset/<uidb64>/<token>',PasswordTokenCheckAPI.as_view(),name="password-reset-confirm"),
    path('request-reset-email/',RequestPasswordResetEmail.as_view(),name="request-reset-email"),
    path('password-reset-complete/',SetNewPasswordAPIView.as_view(),name="password-reset-complete"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


]
