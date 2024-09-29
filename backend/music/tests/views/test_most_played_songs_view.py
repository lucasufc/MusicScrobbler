from rest_framework.test import APITestCase, APIClient
from django.urls import reverse
from accounts.tests.factories import UserFactory
from music.models import Scrobble
from music.tests.factories import SongFactory


class MostPlayedSongsViewTest(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.song1 = SongFactory()
        self.song2 = SongFactory()
        self.user = UserFactory()

        self.scrobble = Scrobble.objects.create(user=self.user, song=self.song1)
        self.scrobble = Scrobble.objects.create(user=self.user, song=self.song2)
        self.url = reverse("popular-songs")

    def test_most_played_songs_returns_ordered_list(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data[0]["title"], self.song1.title)
        self.assertEqual(response.data[1]["title"], self.song2.title)
