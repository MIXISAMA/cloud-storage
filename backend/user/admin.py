from django.contrib import admin
from .models import User

# Register your models here.

@admin.register(User)
class User(admin.ModelAdmin):
    list_display = (
        'username',
        'nickname',
        'used_size',
        'max_size',
        'date_last_opt'
    )
