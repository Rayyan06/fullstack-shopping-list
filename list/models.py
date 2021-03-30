from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class ShoppingList(models.Model):
    name = models.CharField(max_length=300)
    #user = models.ForeignKey(User, related_name="shoppinglists", on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    


    
class Item(models.Model):
    # shoppinglist = models.ForeignKey(ShoppingList, related_name="items", on_delete=models.CASCADE)

    name = models.CharField(max_length=200)
    is_checked = models.BooleanField(default=False)

    price = models.IntegerField(default=0)
    
    def __str__(self):
        return self.name
    
