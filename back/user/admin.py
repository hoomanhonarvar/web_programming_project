from django.contrib import admin
from .models import user,like_dish,like_rest
# Register your models here.
admin.site.register(user)
admin.site.register(like_rest)
admin.site.register(like_dish)