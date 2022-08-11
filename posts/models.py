from django.db import models
from users.models import User

class Post(models.Model):
    user_id = models.ForeignKey(User, related_name='posts', on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=150, db_index=True)
    body = models.TextField(blank=True, db_index=True)
    date_pub = models.DateField(auto_now_add=True)
    # image = models.ImageField()

    class Meta:
        ordering = ['-date_pub', ]
