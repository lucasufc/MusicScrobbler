from django.test import TestCase
from music.models import Artist, Song
from music.tests.factories import ArtistFactory, SongFactory


class SongModelTest(TestCase):

    def setUp(self):
        self.song = SongFactory()

    def test_song_creation(self):
        self.assertEqual(self.song.id, 1)
        song_2 = SongFactory()
        self.assertEqual(song_2.id, 2)
