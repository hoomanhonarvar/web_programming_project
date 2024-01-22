from rest_framework import serializers
from .models import user_add
class addressListSerializer(serializers.ModelSerializer):
    class Meta:
        model=user_add
        fields=['street_name','city','zipcode','state','is_work']
