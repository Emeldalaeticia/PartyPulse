from django.contrib import admin
from .models import Event
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser
# Register your models here.

admin.site.register(Event)

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['username', 'email', 'is_staff', 'is_organizer', 'is_customer']

admin.site.register(CustomUser, CustomUserAdmin)