# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.core.serializers import serialize
from .models import Post

class GeneralView(TemplateView):
    template_name = 'base.html'

    def dispatch(self, request, *args, **kwargs):
        return super(GeneralView, self).dispatch(request, *args, **kwargs)

    def get(self, request, *args, **kwargs):
        return super(GeneralView, self).get(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super(GeneralView, self).get_context_data(**kwargs)

        context["posts"] = serialize('json', Post.objects.filter(status='published'),
                indent=2,
                use_natural_foreign_keys=True,
                use_natural_primary_keys=True
            
        )
        return context
    
