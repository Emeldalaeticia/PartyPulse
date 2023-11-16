from django.urls import path
from .views import EventList, EventCreate

urlpatterns = [
    path('', EventList.as_view(), name='event-list'),
    path('create/', EventCreate.as_view(), name='create'),
]