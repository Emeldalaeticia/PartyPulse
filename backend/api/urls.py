from django.urls import path
from .views import (EventList, EventCreate, EventUpdate,EventDelete, EventDetail, )

urlpatterns = [
    path('events/', EventList.as_view(), name='event-list'),
    path('events/create/', EventCreate.as_view(), name='event-create'),
    path('events/<int:pk>/update/', EventUpdate.as_view(), name='event-update'),
    path('events/<int:pk>/delete/', EventDelete.as_view(), name='event-delete'),
    path('events/<int:pk>/', EventDetail.as_view(), name='event-detail'),
    
]