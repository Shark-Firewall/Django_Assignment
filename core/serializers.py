from rest_framework import serializers
from .models import User

#Pseudo_admin Pseudo@123
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'