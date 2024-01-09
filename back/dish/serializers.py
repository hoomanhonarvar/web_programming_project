from  rest_framework import serializers
from .models import dish

class list_of_dishes_Serializer(serializers.ModelSerializer):
    class Meta:
        model=dish
        exclude=('fav',)