from rest_framework import serializers
# from agenda.models.provincia import Provincia
from agenda.models.contacto import Contacto
from .provincia import ProvinciaSerializer


class ContactoSerializer(serializers.ModelSerializer):
    provincia_detalle = ProvinciaSerializer(read_only=True, source="provincia")
   
    class Meta:
        model = Contacto
        fields = ['id', 'nombre', 'apellido', 'telefono', 'provincia','provincia_detalle']

