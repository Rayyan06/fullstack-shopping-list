from .serializers import ShoppingListSerializer, ItemSerializer
from rest_framework.views import APIView
from .models import ShoppingList, Item
from rest_framework.response import Response
from rest_framework import generics


# Create your views here.


class ShoppingListView(generics.ListCreateAPIView):
    """
    Show the shopping lists the user has in a list format
    """ 
    queryset = ShoppingList.objects.all()
    serializer_class = ShoppingListSerializer




class ItemListView(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ItemDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
