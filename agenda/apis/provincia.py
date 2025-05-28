from rest_framework import viewsets
from agenda.models.provincia import Provincia
from agenda.serializers.provincia import ProvinciaSerializer

class ProvinciaViewSet(viewsets.ModelViewSet):
    queryset = Provincia.objects.all()
    serializer_class = ProvinciaSerializer