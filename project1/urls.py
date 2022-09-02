from django.contrib import admin
from django.urls import path
from core.views import front,signup,login
from core.admin import admin_site

admin.site.site_header = "Admin Panel"
admin.site.site_title = "Admin Panel"
admin.site.index_title = "Welcome to Admin Panel"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('admin_Panel/', admin_site.urls),
    path("", front, name="front"),
    path("signup/",signup,name="signup"),
    path('login/',login,name="login"),
]




