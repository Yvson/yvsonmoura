from django.core.serializers.json import DjangoJSONEncoder
from .models import User

class LazyEncoder(DjangoJSONEncoder):
    def default(self, obj):
        if isinstance(obj, User):
            return str(obj.first_name + obj.last_name)
        return super(LazyEncoder, self).default(obj)