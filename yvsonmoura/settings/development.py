from base import *
import os
import environ



BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
env = environ.Env()
environ.Env.read_env(os.path.join(os.path.dirname(os.path.dirname(BASE_DIR)), '.env/.env.development'))

SECRET_KEY = env("SECRET_KEY")
DEBUG = env.bool("DEBUG", False)

ALLOWED_HOSTS = ['localhost','127.0.0.1','0.0.0.0', 'yvsonmoura.com', 'www.yvsonmoura.com']

DATABASES = {
    "default": env.db()
}

STATIC_ROOT = os.path.join(os.path.dirname(BASE_DIR), 'static/')
MEDIA_ROOT=os.path.join(os.path.dirname(BASE_DIR), 'media/')

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.dummy.DummyCache',
    }
}

DEFAULT_FROM_EMAIL = env("DEFAULT_FROM_EMAIL")
EMAIL_BACKEND = env("EMAIL_BACKEND")
EMAIL_HOST = env("EMAIL_HOST")
EMAIL_HOST_USER = env("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD")
EMAIL_PORT = env.int("EMAIL_PORT")
EMAIL_USE_SSL = env.bool("EMAIL_USE_SSL", True)
EMAIL_TIMEOUT = env.int("EMAIL_TIMEOUT")


