# Generated by Django 4.2.2 on 2023-11-15 23:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pulse', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='date',
        ),
        migrations.RemoveField(
            model_name='event',
            name='description',
        ),
        migrations.RemoveField(
            model_name='event',
            name='price',
        ),
        migrations.RemoveField(
            model_name='event',
            name='time',
        ),
    ]
