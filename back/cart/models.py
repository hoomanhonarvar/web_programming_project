from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from user.models import User
from restaurant.models import restaurant
from address.models import user_add
from dish.models import dish
# Create your models here.
OPTION=(
    ('F','finish'),
    ('C','cancel'),
    ('N','Not_started'),
    ('D','doing')
)
class cart (models.Model):
    owner=models.ForeignKey(to=User,null=False,on_delete=models.CASCADE,default="")
    rest_id=models.ForeignKey(to=restaurant,null=False,on_delete=models.CASCADE)
    rest_name=models.CharField(max_length=68,default="")
    add_id=models.ForeignKey(to=user_add,null=False,on_delete=models.CASCADE)
    total=models.FloatField()
    finish_cancel=models.CharField(choices=OPTION,max_length=1,default='N')
    time=models.DateTimeField(auto_now_add=True)
    date=models.DateField(auto_now_add=True)
    distance=models.FloatField()
    Estimated_arrival=models.IntegerField(validators=[MinValueValidator(0),MaxValueValidator(60)])
    promo_code=models.CharField(max_length=30)
    dishes=models.ManyToManyField(dish,related_name="list_of_cart_dish",blank=False)
    On_the_way=models.BooleanField(default=False)
    Food_is_ready=models.BooleanField(default=False)


