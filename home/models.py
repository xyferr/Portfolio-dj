from django.db import models

# Create your models here.
class Contact(models.Model):
    name=models.CharField( max_length=50)
    email=models.EmailField( max_length=254)
    desc=models.TextField(max_length=500)
    date=models.DateField()
    
    def __str__(self):
        return self.name
    