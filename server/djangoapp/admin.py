# Register your models here.

# CarModelInline class
from django.contrib import admin

from .models import CarMake, CarModel

# Registering models with their respective admins
# CarModelAdmin class
admin.site.register(CarModel)

# CarMakeAdmin class with CarModelInline
admin.site.register(CarMake)

# Register models here
