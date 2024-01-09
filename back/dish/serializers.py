from django.core.validators import MinValueValidator, MaxValueValidator
from  rest_framework import serializers

from restaurant.models import restaurant
from .models import dish

class list_of_dishes_Serializer(serializers.ModelSerializer):

    class Meta:
        model=dish
        exclude=('fav',)


class list_of_dishes_tmp_Serializer(serializers.ModelSerializer):
    tmp=serializers.CharField(max_length=39)
    class Meta:
        model = dish
        exclude = ('fav',)


