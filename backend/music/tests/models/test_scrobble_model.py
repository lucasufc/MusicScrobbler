from django.test import TestCase
from accounts.models import User
from accounts.tests.factories import UserFactory
from music.models import Artist, Song, Scrobble
from music.tests.factories import SongFactory


class ScrobbleModelTest(TestCase):

    def setUp(self):
        self.user = UserFactory()
        self.song = SongFactory()
        self.scrobble = Scrobble.objects.create(user=self.user, song=self.song)

    def test_scrobble_creation(self):
        self.assertEqual(self.scrobble.user, self.user)
        self.assertEqual(self.scrobble.song, self.song)
        self.assertIsNotNone(self.scrobble.timestamp)

    def test_scrobble_str(self):
        expected_str = (
            f"{self.user.first_name} {self.user.last_name} listened to {self.song.title} at {self.scrobble.timestamp}"
        )
        self.assertEqual(str(self.scrobble), expected_str)

    def test_scrobble_user_relationship(self):
        self.assertIn(self.scrobble, self.user.scrobble_set.all())

    def test_scrobble_song_relationship(self):
        self.assertIn(self.scrobble, self.song.scrobble_set.all())
