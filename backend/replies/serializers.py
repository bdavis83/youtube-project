from rest_framework import serializers
from .models import Reply

class ReplySerializer (serializers.Serializer):
    class Meta:
        model = Reply
        fields = ['user', 'comment', 'text', 'user_id']
        depth = 1