from django.conf.urls import url
from django.conf.urls.static import static
from django.conf import settings
from django.views.static import serve
from .views import GeneralView


urlpatterns = [
    url(r"", GeneralView.as_view(), name='general_view'),

]


