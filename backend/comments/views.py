from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comments
from serializers import CommentsSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments (request):
    comments = Comments.objects.all()
    serializer = CommentsSerializer(comments, many=True)
    return Response(serializer.data)



