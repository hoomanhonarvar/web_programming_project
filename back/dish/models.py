from django.db import models
from django.core.validators import MinValueValidator,MaxValueValidator
from restaurant.models import restaurant
# Create your models here.
class dish(models.Model):
    image=models.ImageField(upload_to='images/dish/')
    title=models.CharField(max_length=20)
    description=models.CharField(max_length=300,null=True)
    fee=models.CharField(default='free',max_length=20)
    rate=models.IntegerField(default=5,validators=[MinValueValidator(0),
    MaxValueValidator(5)])
    rest_id=models.ForeignKey(restaurant,null=True,on_delete=models.CASCADE)
    def __str__(self):
        return self.title