from django.contrib import admin
from agenda.models.contacto import Contacto

@admin.register(Contacto)
class ContactoAdmin(admin.ModelAdmin):
    list_display = ['id','nombre','apellido','telefono','provincia']
    search_fields = ['apellido']
    list_filter = ['apellido']
    list_per_page = 10