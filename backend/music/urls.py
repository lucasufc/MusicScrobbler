from django.urls import path
from .views import (
    add_scrobble,
    most_played_songs,
    user_scrobbles,
)

urlpatterns = [
    path("scrobbles", add_scrobble, name="scrobble-create"),
    path("scrobbles/user", user_scrobbles, name="user-scrobbles"),
    path("songs", most_played_songs, name="popular-songs"),
]
