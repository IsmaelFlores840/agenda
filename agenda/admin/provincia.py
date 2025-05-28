from django.contrib import admin
from agenda.models.provincia import Provincia

@admin.register(Provincia)
class ProvinciaAdmin(admin.ModelAdmin):
    list_display = ['id','nombre']
    search_fields = ['nombre']
    list_filter = ['nombre']
    list_per_page = 10