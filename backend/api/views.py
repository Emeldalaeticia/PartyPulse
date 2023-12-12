from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from pulse.models import Event, CustomUser
from .serializers import EventSerializer, UserCreationSerializer, UserLoginSerializer
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login, logout

# create views for handling event creation, updating, deletion, and management functionalities using Django REST Framework's generic views or custom views.
class EventList(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [AllowAny]
    
class EventCreate(generics.CreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventUpdate(generics.UpdateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]

class EventDelete(generics.DestroyAPIView):
    queryset = Event.objects.all()
    permission_classes = [IsAuthenticated]

class EventDetail(generics.RetrieveAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class UserCreateView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserCreationSerializer
    permission_classes = [AllowAny]


class UserLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data['email']
        password = serializer.validated_data['password']

        try:
            user = CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            user = None

        print("User:", user)  # Debugging line

        if user and user.check_password(password):
            login(request, user)
            return Response({'detail': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
class UserLogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        logout(request)
        return Response({'detail': 'Logout successful'}, status=status.HTTP_200_OK)