from elements.models import Element
from rest_framework import viewsets, permissions
from .serializers import ElementSerializer


# Lead Viewset
class ElementViewSet( viewsets.ModelViewSet ):
	queryset = Element.objects.all()
	permission_classes = [
				permissions.AllowAny
			]
	serializer_class = ElementSerializer
