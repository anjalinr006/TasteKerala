from django.contrib import admin
from api.models import *

# Register your models here.


class FoodAdmin(admin.ModelAdmin):
    list_display = ['tittle', 'image', 'published_date', 'category', 'tag']
    list_per_page = 50
    search_fields = ['tittle', 'description']
    list_filter = ["category", "tag"]
    readonly_fields = ['published_date']


admin.site.register(FoodItem, FoodAdmin)