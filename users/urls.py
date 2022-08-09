from django.urls import path, include
from .views import UserListCreate
from rest_framework import routers


router = routers.SimpleRouter()
router.register(r'user', UserListCreate)

urlpatterns = [
    path('api/', include(router.urls)),
]