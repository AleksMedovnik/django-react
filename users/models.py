from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class User(models.Model):
    name = models.CharField(max_length=50)
    age = models.PositiveIntegerField(default=18, validators=[MinValueValidator(5), MaxValueValidator(110)])
    country = models.CharField(max_length=50)
    company = models.CharField(max_length=100)