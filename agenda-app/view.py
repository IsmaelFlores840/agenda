from django.shortcuts import render

def crear_contacto(request):
    return render(request, 'agenda.html')