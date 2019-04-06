from django.db import models

class Element(models.Model):
	name = models.CharField(max_length=100)
	message = models.CharField(max_length=100)
	created_on = models.DateTimeField(auto_now_add=True)
	category = models.CharField(max_length=100, null = True)
	
	
class NewThing(models.Model):
	name = models.CharField(max_length=100)
	message = models.CharField(max_length=100)
	executed_on = models.DateTimeField()
	created_on = models.DateTimeField(auto_now_add=True)
	reward_st = models.TextField()

class Record(models.Model):
	name = models.CharField(max_length=100)
	message = models.CharField(max_length=100)
	created_on = models.DateTimeField(auto_now_add=True)
	link = models.TextField()
	reward_st = models.TextField()

class Book(models.Model):
	name = models.CharField(max_length=100)
	created_on = models.DateTimeField(auto_now_add=True)
	status = models.CharField(max_length=100)
	started_on = models.DateTimeField()
	deadline = models.DateTimeField()
	reward_st = models.TextField()
	
class InterestingThought(models.Model):
	name = models.CharField(max_length=100)
	message = models.CharField(max_length=100)
	created_on = models.DateTimeField(auto_now_add=True)
	link = models.TextField()
	reward_st = models.TextField()
	
	

