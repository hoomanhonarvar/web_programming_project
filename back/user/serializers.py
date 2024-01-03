from rest_framework import serializers
from .models import user_custom
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