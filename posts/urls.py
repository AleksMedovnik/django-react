from django.urls import path
from . import views

urlpatterns = [
    path('api/post/', views.PostListCreate.as_view({'get': 'list', 'post': 'create'})),
    path('api/post/<int:pk>/', views.PostListCreate.as_view({'delete': 'destroy'})),
]