from django.contrib import admin
from .models import address,Home_user_add,Work_user_add,Rest_user_add
# Register your models here.


admin.site.register(address)
admin.site.register(Home_user_add)
admin.site.register(Work_user_add)
admin.site.register(Rest_user_add)
