# Generated by Django 4.2.2 on 2023-11-16 02:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pulse', '0002_remove_event_date_remove_event_description_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Event',
        ),
    ]
