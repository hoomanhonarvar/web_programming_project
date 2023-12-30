from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from restaurant.models import restaurant
from dish.models import dish

# Create your models here.
class user(models.Model):
    full_name=models.CharField(max_length=40)
    email=models.EmailField()
    password=models.CharField(max_length=25)
    phone_number=PhoneNumberField(null=False,blank=False,unique=True)
    image=models.ImageField(upload_to='images/users/')


    def __str__(self):
        return self.full_name

class like_rest(models.Model):
    rest_id=models.ForeignKey(restaurant,null=False,on_delete=models.CASCADE)
    user_id=models.ForeignKey(user,null=False,on_delete=models.CASCADE)

class like_dish(models.Model):
    rest_id=models.ForeignKey(dish,null=False,on_delete=models.CASCADE)
    user_id=models.ForeignKey(user,null=False,on_delete=models.CASCADE)