from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2, default=0.0)
    date = models.DateField()
    time = models.TimeField()
    location = models.CharField(max_length=100, blank=True, null=True)
   
    
    def __str__(self):
        return self.title


class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    is_organizer = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=False)
    full_name = models.CharField(max_length=255, blank=True)

    groups = models.ManyToManyField('auth.Group', related_name='custom_user_groups')
    user_permissions = models.ManyToManyField('auth.Permission', related_name='custom_user_permissions')

    def __str__(self):
        return self.username
   
