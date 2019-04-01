from django.db import models

class Element(models.Model):
	name = models.CharField(max_length=100)
	email = models.EmailField()
	message = models.CharField(max_length=100)
	created_at = models.DateTimeField(auto_now_add=True)

