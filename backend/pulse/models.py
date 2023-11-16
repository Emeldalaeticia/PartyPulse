from django.db import models

# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2, default=0.0)
    date = models.DateField()
    time = models.TimeField()