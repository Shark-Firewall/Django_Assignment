# Generated by Django 4.1 on 2022-09-01 09:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_user_delete_notes'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='images',
        ),
    ]
