from django.db import models
from django.core.validators import MinValueValidator,MaxValueValidator
from user.models import User
# Create your models here.
ITEM_TYPE=(
    ('B','Burger'),
    ('F','Fish'),
    ('C','Chicken'),
    ('A','Asian'),
    ('P','Pizza'),
)

class restaurant (models.Model):
    type=models.CharField(choices=ITEM_TYPE,max_length=25)
    rate=models.IntegerField(default=5,validators=[MinValueValidator(0),MaxValueValidator(5)])
    range_dist=models.IntegerField()
    offer=models.CharField(max_length=25)
    opening_time=models.IntegerField()
    delivery=models.CharField(default='free',max_length=25)
    name=models.CharField(max_length=20)
    image=models.ImageField(upload_to='images/restaurant/')
    fav=models.ManyToManyField(User,related_name='favourite',blank=True)
    street_name = models.CharField(max_length=20,default="")
    city = models.CharField(max_length=20,default="")
    zipcode = models.CharField(max_length=12,default="")
    state = models.CharField(max_length=20,default="")
    def __str__(self):
        return self.name

