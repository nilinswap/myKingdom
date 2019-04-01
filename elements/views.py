from elements.models import Element
from elements.serializers import ElementSerializer
from rest_framework import generics

class ElementListCreate(generics.ListCreateAPIView):
	queryset = Element.objects.all()
	serializer_class = ElementSerializer
