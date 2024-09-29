from django.shortcuts import render

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from music.utils import get_start_time
from .models import Scrobble, Song
from .serializers import SongSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from django.db.models import Count


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def user_scrobbles(request):
    user = request.user
    interval = request.query_params.get("interval", "all")

    start_time = get_start_time(interval)

    if start_time:
        scrobbles = Scrobble.objects.filter(user=user, timestamp__gte=start_time)
    else:
        scrobbles = Scrobble.objects.filter(user=user)

    song_count = scrobbles.values("song").annotate(play_count=Count("song")).order_by("-play_count")

    most_played_song_ids = [entry["song"] for entry in song_count]

    most_played_songs = Song.objects.filter(id__in=most_played_song_ids)
    song_play_count_map = {entry["song"]: entry["play_count"] for entry in song_count}

    for song in most_played_songs:
        song.play_count = song_play_count_map.get(song.id, 0)

    serializer = SongSerializer(most_played_songs, many=True)

    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def add_scrobble(request):
    song_title = request.data.get("song")

    if not song_title:
        return Response({"error": "Song title is required."}, status=status.HTTP_400_BAD_REQUEST)
    try:
        song = Song.objects.get(title=song_title)
    except Song.DoesNotExist:
        return Response({"error": "Song not found."}, status=status.HTTP_404_NOT_FOUND)

    Scrobble.objects.create(user=request.user, song=song)

    return Response({"message": "Scrobble added successfully."}, status=status.HTTP_201_CREATED)


@api_view(["GET"])
def most_played_songs(request):
    interval = request.query_params.get("interval", "all")
    artist_id = request.query_params.get("artist", None)
    start_time = get_start_time(interval)

    if start_time:
        scrobbles = Scrobble.objects.filter(timestamp__gte=start_time)
    else:
        scrobbles = Scrobble.objects.all()

    if artist_id:
        scrobbles = scrobbles.filter(song__artist__id=artist_id)

    song_count = scrobbles.values("song").annotate(play_count=Count("song")).order_by("-play_count")

    most_played_song_ids = [entry["song"] for entry in song_count]

    most_played_songs = Song.objects.filter(id__in=most_played_song_ids)
    song_play_count_map = {entry["song"]: entry["play_count"] for entry in song_count}

    for song in most_played_songs:
        song.play_count = song_play_count_map.get(song.id, 0)

    serializer = SongSerializer(most_played_songs, many=True)

    return Response(serializer.data)
