from rest_framework import serializers
from .models import User
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str,smart_bytes,force_str,DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_encode,urlsafe_base64_decode
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
    tokens=serializers.SerializerMethodField()


    def get_tokens(self,obj):
        user=User.object.get(email=obj['email'])
        return {
            'access':user.tokens()['access'],
            'refresh':user.tokens()['refresh']
        }
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



class RequestPasswordResetEmailSerializer(serializers.Serializer):
    email=serializers.EmailField(min_length=2)
    class Meta:

        fields=['email']


    def validate(self, attrs):

        email=attrs['data'].get('email','')

        return super().validate(attrs)



class SetNewPasswordSerializer(serializers.Serializer):
    password=serializers.CharField(min_length=6,max_length=68,write_only=True)
    token=serializers.CharField(min_length=1,write_only=True)
    uidb64=serializers.CharField(min_length=1,write_only=True)

    class Meta:
        fields=['password','token','uidb64']

    def validate(self, attrs):
        try:
            password=attrs.get('password')
            token=attrs.get('token')
            uidb64 = attrs.get('uidb64')
            id=force_str(urlsafe_base64_decode(uidb64))
            user=User.object.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user,token):
                raise  AuthenticationFailed('The reset link is invalid',401)

            user.set_password(password)
            user.save()
        except Exception as e:
            raise AuthenticationFailed('The reset link is invalid', 401)
        return super().validate(attrs)




