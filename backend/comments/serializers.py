from rest_framework import serializers
from .models import Comments

class CommentsSerializer (serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['user', 'video_id', 'text', 'likes', 'dislikes', 'user_id']
        depth = 1