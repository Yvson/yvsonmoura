from django.urls import path, re_path
from .views import GeneralView


urlpatterns = [
    re_path('', GeneralView.as_view(), name='general_view'),

]


