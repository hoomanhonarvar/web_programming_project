# Generated by Django 5.0 on 2024-01-09 12:16

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0004_restaurant_fav'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='fav',
            field=models.ManyToManyField(blank=True, related_name='favourite_restaurant', to=settings.AUTH_USER_MODEL),
        ),
    ]
