from django.conf.urls import url
from .views import general_view


urlpatterns = [
    url(r'^$', general_view, name='general_view')
]
