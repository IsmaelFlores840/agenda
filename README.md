### Agenda de Contactos

Aplicación web desarrollada con Django y Django REST Framework que permite gestionar una agenda de contactos, incluyendo nombre, apellido, teléfono y provincia.

Tecnologías Utilizadas:

Python 3.10+
Django 5.2
Django REST Framework
HTML5, CSS3, JavaScript

### Configuración Inicial

1 Clonar el repositorio:
git clone https://github.com/ismael840/agenda.git
cd agenda

2 Crear y activar un entorno virtual:
python -m venv venv
venv\Scripts\activate

3 Instalar las dependencias:
pip install -r requirements.txt

4 Aplicar migraciones:
python manage.py migrate

5 Crear un superusuario
python manage.py createsuperuser

6 Ejecutar el servidor de desarrollo: python manage.py runserver

7 Acceder a la aplicación:

Abrir el navegador y entrar a: http://127.0.0.1:8000/crear-contacto/

### Decisiones Técnicas

Separación de Archivos Estáticos: Los archivos CSS y JavaScript se colocaron en la carpeta static/ para mantener una estructura organizada y facilitar su gestión.

Uso de {% load static %}: Se utilizó esta etiqueta de Django en las plantillas HTML para referenciar correctamente los archivos estáticos.
