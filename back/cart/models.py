from django.db import models
from user.models import user
from restaurant.models import restaurant
from address.models import address
from dish.models import dish
# Create your models here.
OPTION=(
    ('F','finish'),
    ('C','cancel'),
)
class cart (models.Model):
    user_id=models.ForeignKey(user,null=False,on_delete=models.CASCADE)
    rest_id=models.ForeignKey(restaurant,null=False,on_delete=models.CASCADE)
    add_id=models.ForeignKey(address,null=False,on_delete=models.CASCADE)
    total=models.FloatField()
    finish_cancel=models.CharField(choices=OPTION,max_length=1)
    time=models.DateTimeField(auto_now_add=True)
    date=models.DateField(auto_now_add=True)
    distance=models.FloatField()
    Estimated_arrival=models.FloatField()
    promo_code=models.CharField(max_length=30)

class dish_cart(models.Model):
    dish_id=models.ForeignKey(dish,null=False,on_delete=models.CASCADE)
    cart_id=models.ForeignKey(cart,null=False,on_delete=models.CASCADE)
    number=models.IntegerField()
