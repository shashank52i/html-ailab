from cms.models.pluginmodel import CMSPlugin
from tinymce.models import HTMLField
from django.db import models

class ailab(CMSPlugin):
    title = models.CharField(max_length=50, default='Title')
    # body = models.CharField(max_length=5000,default='Content')
    body = HTMLField()
