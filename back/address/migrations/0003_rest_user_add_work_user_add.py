# Generated by Django 5.0 on 2023-12-30 11:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('address', '0002_home_user_add'),
        ('restaurant', '0002_alter_restaurant_delivery'),
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Rest_user_add',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('add_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='address.address')),
                ('rest_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='restaurant.restaurant')),
            ],
        ),
        migrations.CreateModel(
            name='Work_user_add',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('add_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='address.address')),
                ('user_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='user.user')),
            ],
        ),
    ]
