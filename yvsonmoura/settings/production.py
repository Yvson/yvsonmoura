from base import *
import environ
import os



BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
env = environ.Env()
environ.Env.read_env(os.path.join(BASE_DIR, 'settings/.env.production'))

SECRET_KEY = env("SECRET_KEY")
DEBUG = env.bool("DEBUG", False)

DATABASES = {
    "default": env.db()
}

STATIC_URL = env("STATIC_URL")
STATIC_ROOT = env("STATIC_ROOT")

#Caching
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
    }
}

CACHE_MIDDLEWARE_SECONDS = 60*60

DEFAULT_FROM_EMAIL = env("DEFAULT_FROM_EMAIL")
EMAIL_BACKEND = env("EMAIL_BACKEND")
EMAIL_HOST = env("EMAIL_HOST")
EMAIL_HOST_USER = env("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD")
EMAIL_PORT = env("EMAIL_PORT")
EMAIL_USE_SSL = env("EMAIL_USE_SSL")
EMAIL_TIMEOUT = env("EMAIL_TIMEOUT")


