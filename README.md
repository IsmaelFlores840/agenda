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

2 Crear y activar un entorno virtual:
python -m venv venv
venv\Scripts\activate

3 Instalar las dependencias:
pip install -r requirements.txt

4 Crear un superusuario (opcional, para poder entrar al admin de Django)
python manage.py createsuperuser

5 (opcional)
ingresar a http://127.0.0.1:8000/admin/ para ingresar al admin debe ulilizar las credenciales del paso 4

7 Ejecutar el servidor de desarrollo: python manage.py runserver

8 Acceder a la aplicación:

9 Abrir el navegador y entrar a: http://127.0.0.1:8000

### Decisiones Técnicas

comparto la base de datos para facidad del usuario (con los datos iniciales de las provincias)

Separación de Archivos Estáticos: Los archivos CSS y JavaScript se colocaron en la carpeta static/ para mantener una estructura organizada y facilitar su gestión.

Uso de {% load static %}: Se utilizó esta etiqueta de Django en las plantillas HTML para referenciar correctamente los archivos estáticos.
