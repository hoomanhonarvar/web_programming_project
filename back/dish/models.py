from django.db import models
from django.core.validators import MinValueValidator,MaxValueValidator
from restaurant.models import restaurant
from user.models import User
# Create your models here.
class dish(models.Model):
    image=models.ImageField(upload_to='images/dish/')
    title=models.CharField(max_length=20)
    description=models.CharField(max_length=300,null=True)
    fee=models.FloatField(default='free',max_length=20)
    rate=models.IntegerField(default=5,validators=[MinValueValidator(0),
    MaxValueValidator(5)])
    rest_id=models.ForeignKey(to=restaurant,null=True,on_delete=models.CASCADE)
    fav=models.ManyToManyField(User,related_name='favourite_dish',blank=True)
    def __str__(self):
        return self.title