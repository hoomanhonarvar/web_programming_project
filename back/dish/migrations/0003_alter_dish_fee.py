# Generated by Django 5.0 on 2024-01-23 00:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dish', '0002_dish_fav'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dish',
            name='fee',
            field=models.FloatField(default='free', max_length=20),
        ),
    ]