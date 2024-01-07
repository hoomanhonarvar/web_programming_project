# Generated by Django 5.0 on 2024-01-06 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0002_alter_restaurant_delivery'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='city',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='restaurant',
            name='state',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='restaurant',
            name='street_name',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='restaurant',
            name='zipcode',
            field=models.CharField(default='', max_length=12),
        ),
    ]