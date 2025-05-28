from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from agenda.apis import ContactoViewSet, ProvinciaViewSet
from agenda.view import crear_contacto

router = DefaultRouter()
router.register(r'contactos', ContactoViewSet, basename='contactos')
router.register(r'provincias', ProvinciaViewSet, basename='provincias')

urlpatterns = [
    path('', crear_contacto, name='crear_contacto'),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
