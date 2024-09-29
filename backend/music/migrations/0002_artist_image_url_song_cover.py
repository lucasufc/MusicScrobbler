# Generated by Django 5.1.1 on 2024-09-25 14:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='artist',
            name='image_url',
            field=models.URLField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='song',
            name='cover',
            field=models.URLField(blank=True, max_length=255, null=True),
        ),
    ]
