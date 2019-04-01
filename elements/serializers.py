from rest_framework import serializers
from elements.models import Element

class ElementSerializer(serializers.ModelSerializer):
	class Meta:
		model = Element
		fields = '__all__'


