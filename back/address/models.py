from django.db import models
from user.models import user_custom
from restaurant.models import restaurant
# Create your models here.
class address(models.Model):
    street_name=models.CharField(max_length=20)
    city=models.CharField(max_length=20)
    zipcode=models.CharField(max_length=12)
    state=models.CharField(max_length=20)
    def __str__(self):
        return self.city+self.state+self.street_name


class Home_user_add(models.Model):
    user_id=models.ForeignKey(user_custom,null=True,on_delete=models.CASCADE)
    add_id=models.ForeignKey(address,null=True,on_delete=models.CASCADE)

class Work_user_add(models.Model):
    user_id=models.ForeignKey(user_custom,null=True,on_delete=models.CASCADE)
    add_id=models.ForeignKey(address,null=True,on_delete=models.CASCADE)

class Rest_user_add(models.Model):
    rest_id=models.ForeignKey(restaurant,null=True,on_delete=models.CASCADE)
    add_id=models.ForeignKey(address,null=True,on_delete=models.CASCADE)
