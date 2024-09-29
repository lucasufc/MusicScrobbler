from django.db import models
from django.conf import settings
from django.utils import timezone

from accounts.models import User


class Artist(models.Model):
    name = models.CharField(max_length=255)
    genre = models.CharField(max_length=100, blank=True, null=True)
    image_url = models.URLField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.name


class Song(models.Model):
    title = models.CharField(max_length=255)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name="songs")
    album = models.CharField(max_length=255, blank=True, null=True)
    cover = models.URLField(max_length=255, blank=True, null=True)
    duration = models.IntegerField()
    release_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return f"{self.artist.name} - {self.title}"


class Scrobble(models.Model):
    user: User = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    song: Song = models.ForeignKey(Song, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name} listened to {self.song.title} at {self.timestamp}"
