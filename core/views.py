from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import NoteSerializer
from .models import User
# Create your views here.

def front(request):
    context = { }
    return render(request, "index.html", context)

@api_view(['POST'])
def signup(request):
    if request.method == 'POST':
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST','GET'])
def login(request):
    if request.method == 'POST':
        username=request.data['userName']
        password=request.data['password']
        user=User.objects.get(userName=username,password=password)
        if user:
            print("Login successful!")
            return Response(status=status.HTTP_201_CREATED)
    return Response(status=status.HTTP_201_CREATED)