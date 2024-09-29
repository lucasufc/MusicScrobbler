from rest_framework.test import APITestCase, APIClient
from django.urls import reverse
from accounts.tests.factories import UserFactory
from music.models import Scrobble
from music.tests.factories import SongFactory


class UserScrobblesViewTest(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = UserFactory()
        self.client.force_authenticate(user=self.user)
        self.song = SongFactory()
        self.scrobble = Scrobble.objects.create(user=self.user, song=self.song)
        self.url = reverse("user-scrobbles")

    def test_user_scrobbles_returns_most_played_songs(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["title"], self.song.title)
