from rest_framework import viewsets
from agenda.models.contacto import Contacto
from agenda.serializers.contacto import ContactoSerializer

class ContactoViewSet(viewsets.ModelViewSet):
    queryset = Contacto.objects.all()
    serializer_class = ContactoSerializer
    
