# Generated by Django 5.0 on 2024-01-22 23:44

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0010_alter_cart_dish_table_cart_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cart',
            name='Estimated_arrival',
            field=models.IntegerField(default=60, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(60)]),
        ),
        migrations.AlterField(
            model_name='cart',
            name='distance',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='cart',
            name='promo_code',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='cart',
            name='total',
            field=models.FloatField(default=0.0),
        ),
    ]