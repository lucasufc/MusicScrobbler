# Generated by Django 5.1.1 on 2024-09-25 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0002_artist_image_url_song_cover'),
    ]

    operations = [
        migrations.AddField(
            model_name='song',
            name='duration',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]