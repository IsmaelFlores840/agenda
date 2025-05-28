from rest_framework import serializers
from agenda.models.provincia import Provincia

class ProvinciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provincia
        fields = '__all__'