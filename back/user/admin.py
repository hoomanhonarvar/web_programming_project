from django.contrib import admin
from .models import user_custom,User,UserManager
# Register your models here.
admin.site.register(user_custom)


admin.site.register(User)
