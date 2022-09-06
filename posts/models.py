from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=150, db_index=True)
    body = models.TextField(blank=True, db_index=True)
    date_pub = models.DateField(auto_now_add=True)
    # image = models.ImageField()

    class Meta:
        ordering = ['-pk', ]


    def __str__(self):
        return self.title
