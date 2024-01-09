from rest_framework import serializers
from .models import cart
class createNewCartSerializer(serializers.ModelSerializer):


    class Meta:
        model=cart
        fields='__all__'

class Upcoming_orders_list_Serializer(serializers.ModelSerializer):

    class Meta:
        model=cart
        fields=('Estimated_arrival','rest_name')

class Previous_orders_list_Serializer(serializers.ModelSerializer):

    class Meta:
        model=cart
        fields=('id','dishes','time','date','finish_cancel','rest_name')