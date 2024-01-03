from django.contrib import admin
from .models import user_custom,like_dish,like_rest
# Register your models here.
admin.site.register(user_custom)
admin.site.register(like_rest)
admin.site.register(like_dish)