from  rest_framework import serializers
from .models import dish

class list_of_dishes_Serializer(serializers.Serializer):
    class Meta:
        model=dish
        fields='__all__'