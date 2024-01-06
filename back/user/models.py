from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from restaurant.models import restaurant
from dish.models import dish
from django.contrib.auth.models import (
AbstractBaseUser,BaseUserManager,PermissionsMixin
)
from rest_framework_simplejwt.tokens import RefreshToken

# Create your models here.
class user_custom(models.Model):
    full_name=models.CharField(max_length=40)
    email=models.EmailField()
    password=models.CharField(max_length=25)
    phone_number=PhoneNumberField(null=False,blank=False,unique=True)
    image=models.ImageField(upload_to='images/users/')


    def __str__(self):
        return self.full_name

class like_rest(models.Model):
    rest_id=models.ForeignKey(restaurant,null=False,on_delete=models.CASCADE)
    user_id=models.ForeignKey(user_custom,null=False,on_delete=models.CASCADE)

class like_dish(models.Model):
    rest_id=models.ForeignKey(dish,null=False,on_delete=models.CASCADE)
    user_id=models.ForeignKey(user_custom,null=False,on_delete=models.CASCADE)


class UserManager(BaseUserManager):
    def create_user(self,username,email,password=None):
        if username is None:
            raise TypeError('users should have a username')
        if email is None:
            raise TypeError('users should have a email')
        user=self.model(username=username,email=self.normalize_email(email),)
        user.set_password(password)
        user.save()
        return user
    def create_superuser(self,username,email,password=None):
        if password is None:
            raise TypeError('users should have a password')
        user= self.create_user(username,email,password)
        user.is_superuser=True
        user.is_staff=True
        user.save()
        return user

class User(AbstractBaseUser,PermissionsMixin):
    username = models.CharField(max_length=255,unique=True,db_index=True)
    email=models.EmailField(max_length=255,unique=True,db_index=True)
    is_varified=models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    update_at=models.DateTimeField(auto_now=True)
    phone_number = PhoneNumberField(max_length=12)
    image = models.ImageField(upload_to='images/users/')

    USERNAME_FIELD='email'
    REQUIRED_FIELDS = ['username']
    object = UserManager()
    def __str__(self):
        return self.email

    def tokens(self):
        refresh=RefreshToken.for_user(self)
        return {
            'refresh':str(refresh),
            'access': str(refresh.access_token)
        }