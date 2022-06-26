from django.views.generic.base import TemplateView
from django.core.serializers import serialize
from django.http import JsonResponse
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from django.contrib.sites.shortcuts import get_current_site
from django.template import loader
from django.utils.translation import gettext_lazy as _
from django.template.loader import render_to_string

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
    
    def post(self, request):
        data = request.POST
        name = data['name']
        contact_email = data['email']
        message = data['message']
        
        from_email = settings.EMAIL_HOST_USER
        to = settings.EMAIL_HOST_USER

        current_site = get_current_site(request)
        mail_subject = _('Contact (yvsonmoura.com)')
        context = {
            'name': name,
            'contact': contact_email,
            'message': message,
            'domain': current_site.domain,
            'site_name': current_site.name,
            'protocol': 'https' if request.is_secure() else 'http'
        }
        html_email_template_name = 'contact_email_html.html'
        plain_email = render_to_string(html_email_template_name, context)
        html_email = loader.render_to_string(html_email_template_name, context)
        email = EmailMultiAlternatives(mail_subject, plain_email, from_email=from_email, to=[to])
        email.attach_alternative(html_email, 'text/html')

        if name and contact_email and message:
            try:
                email.send(fail_silently=False)
                return JsonResponse({'status': 'Message Sent!'})
            except:
                return JsonResponse({'status': 'Error!'})
        else:
            return JsonResponse({'status': 'Error!'})
        
