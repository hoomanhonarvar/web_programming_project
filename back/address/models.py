from django.db import models
from user.models import User
# Create your models here.





class user_add(models.Model):
    owner=models.ForeignKey(to=User,null=True,on_delete=models.CASCADE)
    street_name = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    zipcode = models.CharField(max_length=12)
    state = models.CharField(max_length=20)
    is_work=models.BooleanField()


    def __str__(self):
        if self.is_work:
            return "home :"+self.city+self.state+self.street_name
        else:
            return "work : "+self.city+self.state+self.street_name

