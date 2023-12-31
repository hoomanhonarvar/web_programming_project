from rest_framework import serializers
from .models import user
class List_UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=user
        fields="__all__"
        #     (
        #     'full_name','id'
        # )
        # exclude=('full_name','id')