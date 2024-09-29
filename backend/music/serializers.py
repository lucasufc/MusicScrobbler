from rest_framework import serializers
from .models import Scrobble, Song


class ScrobbleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scrobble
        fields = ["id", "user", "song", "timestamp"]
        read_only_fields = ["id", "timestamp"]


class SongSerializer(serializers.ModelSerializer):
    play_count = serializers.IntegerField(read_only=True)

    class Meta:
        model = Song
        fields = ["id", "title", "artist", "album", "cover", "duration", "release_date", "play_count"]
        read_only_fields = ["id"]
