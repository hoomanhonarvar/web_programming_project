from rest_framework import serializers
from .models import cart
from address.serializers import addressListSerializer
from django.db import models
from address.models import user_add

from dish.serializers import list_of_dishes_Serializer
class CartListSerializer(serializers.ModelSerializer):
    dish_cart= serializers.StringRelatedField(many=True,read_only=True)
    class Meta:
        model=cart
        fields=['id','rest_id','rest_name','add_id','total','finish_cancel','time','date','distance','Estimated_arrival','promo_code','On_the_way','Food_is_ready','dish_cart']
class createNewCartSerializer(serializers.ModelSerializer):
    class Meta:
        model=cart
        exclude=['id','finish_cancel','Food_is_ready','On_the_way','total','owner','Estimated_arrival','distance']

class createNewCartInputSerializer(serializers.ModelSerializer):
    class Meta:
        model=cart
        fields=['owner','rest_id','rest_name','add_id',]
class Upcoming_orders_list_Serializer(serializers.ModelSerializer):

    class Meta:
        model=cart
        fields=('Estimated_arrival','rest_name')

class Previous_orders_list_Serializer(serializers.ModelSerializer):

    class Meta:
        model=cart
        fields=('id','time','date','finish_cancel','rest_name')