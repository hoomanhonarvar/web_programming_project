from rest_framework import serializers
from .models import cart
from address.serializers import addressListSerializer
from django.db import models
from address.models import user_add

from dish.serializers import list_of_dishes_Serializer
class createNewCartSerializer(serializers.ModelSerializer):
    dish_cart= serializers.StringRelatedField(many=True)
    class Meta:
        model=cart
        fields=['dish_cart','owner','rest_id','rest_name','add_id','total','finish_cancel','time','date','distance','Estimated_arrival','promo_code','On_the_way','Food_is_ready']

class Upcoming_orders_list_Serializer(serializers.ModelSerializer):

    class Meta:
        model=cart
        fields=('Estimated_arrival','rest_name')

class Previous_orders_list_Serializer(serializers.ModelSerializer):

    class Meta:
        model=cart
        fields=('id','time','date','finish_cancel','rest_name')