from rest_framework import serializers
from .models import user_custom,User
class List_UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=user_custom
        fields="__all__"
        #     (
        #     'full_name','id'
        # )
        # exclude=('full_name','id')

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