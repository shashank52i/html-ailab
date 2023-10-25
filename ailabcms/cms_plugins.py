from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.models.pluginmodel import CMSPlugin
from django.utils.translation import gettext_lazy as _
from .models import ailab

@plugin_pool.register_plugin
class ailabPlugin(CMSPluginBase):
    model = CMSPlugin
    render_template = "index.html"
    cache = False