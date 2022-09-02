from django.db import models

# Create your models here.

class User(models.Model):
    userName = models.CharField(max_length=60)
    password = models.CharField(max_length=120)
    email = models.CharField(max_length=60)
    firstName = models.CharField(max_length=60)
    lastName = models.CharField(max_length=60)
    phoneNumber= models.CharField(max_length=12)
    
    def __str__(self):
        return self.userName


