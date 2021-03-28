from .models import Item, ShoppingList
from rest_framework import  serializers
from django.contrib.auth.models import User

class ShoppingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingList
        fields = ['id', 'name', 'items']
class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = [
            'id', 'name', 'shoppinglist', 'is_checked']
        
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['shoppinglists', 'username']
