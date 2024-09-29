from rest_framework.test import APITestCase, APIClient
from django.urls import reverse
from music.models import Scrobble
from music.tests.factories import SongFactory
from accounts.tests.factories import UserFactory


class AddScrobbleViewTest(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = UserFactory()
        self.client.force_authenticate(user=self.user)
        self.song = SongFactory()
        self.url = reverse("scrobble-create")

    def test_add_scrobble_success(self):
        data = {"song": self.song.title}
        response = self.client.post(self.url, data, format="json")
        self.assertEqual(response.status_code, 201)
        self.assertEqual(Scrobble.objects.count(), 1)
        self.assertEqual(Scrobble.objects.first().song, self.song)

    def test_add_scrobble_song_not_found(self):
        data = {"song": "Nonexistent Song"}
        response = self.client.post(self.url, data, format="json")
        self.assertEqual(response.status_code, 404)
        self.assertIn("error", response.data)
