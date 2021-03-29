from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('shoppinglists/', views.ShoppingListView.as_view()),
    path('items/', views.ItemListView.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)
