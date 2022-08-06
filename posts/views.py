from .models import Post
from .serializers import PostSerializer
from rest_framework import viewsets

# class PostListCreate(generics.ListCreateAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

class PostListCreate(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer