from rest_framework import serializers
from .models import restaurant
class restauranListSerializer(serializers.ModelSerializer):
    class Meta:
        model=restaurant
        fields='__all__'