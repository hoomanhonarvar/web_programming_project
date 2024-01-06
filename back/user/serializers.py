from rest_framework import serializers
from .models import User
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed
class List_UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields="__all__"
        #     (
        #     'full_name','id'
        # )
        # exclude=('full_name','id')
class ResendEmailSerializer(serializers.ModelSerializer):
    email=serializers.EmailField()

    class Meta:
        model=User
        fields=['email']
class UserRegistrationsSerializer(serializers.Serializer):
    email = serializers.EmailField()
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)


class RegisterSerializer(serializers.ModelSerializer):
    password=serializers.CharField(max_length=68,min_length=6,write_only=True)
    class Meta:
        model=User
        fields=['email','username','password']

    def validate(self, attrs):
        email=attrs.get('email','')
        username=attrs.get('username','')
        if not username.isalnum():
            raise  serializers.ValidationError('the username should only contain alphanumeric charecter')

        return attrs
    def create (self, validated_data):
        return User.object.create_user(**validated_data)

class EmailVerificationSerializer(serializers.ModelSerializer):
    token=serializers.CharField(max_length=555)
    class Meta:
        model=User
        fields=['token']


class LoginSerializer(serializers.ModelSerializer):
    email=serializers.EmailField(max_length=255,min_length=3)
    password=serializers.CharField(min_length=6,max_length=68 ,write_only=True)
    username=serializers.CharField(min_length=6,max_length=255,read_only=True)
    tokens=serializers.CharField(min_length=6,max_length=68,read_only=True)

    class Meta:
        model=User
        fields=['email','password','username','tokens']
    def validate(self, attrs):
        email=attrs.get('email','')
        password=attrs.get('password','')

        user=auth.authenticate(email=email,password=password)

        if not user:
            raise AuthenticationFailed('Invalid credentials , try again')

        if not user.is_active:
            raise AuthenticationFailed('Account disabled, contact admin')
        if not user.is_varified:
            raise AuthenticationFailed('Email is not verified')

        return {
            'email':user.email,
            'username':user.username,
            'tokens':user.tokens

        }
        return super().validate(attrs)



