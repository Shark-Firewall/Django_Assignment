from django.contrib import admin
from .models import User
# Register your models here.

class UserAdmin(admin.AdminSite):
    site_header="Admin Panel"

admin_site=UserAdmin(name="Admin Panel")
admin_site.register(User)
admin.site.register(User)


