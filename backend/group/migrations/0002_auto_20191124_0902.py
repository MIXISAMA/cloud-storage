# Generated by Django 2.2.2 on 2019-11-24 09:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0001_initial'),
        ('group', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='membership',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.User'),
        ),
        migrations.AddField(
            model_name='group',
            name='members',
            field=models.ManyToManyField(through='group.Membership', to='user.User'),
        ),
    ]
