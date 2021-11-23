from django.conf.urls import url
from .views import general_view


urlpatterns = [
    url(r"^$|portfolio|blog|contato", general_view, name='general_view')
]
