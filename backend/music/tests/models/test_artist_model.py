from django.test import TestCase

from music.models import Artist
from music.tests.factories import ArtistFactory


class ArtistTestCase(TestCase):

    def setUp(self):
        self.artist = ArtistFactory()

    def test_artist_creation(self):
        self.assertIsNotNone(self.artist.id)

    def test_artist_without_genre(self):
        artist_no_genre = Artist.objects.create(name="Jane Smith")
        self.assertEqual(artist_no_genre.genre, None)

    def test_artist_without_image_url(self):
        artist_no_image = Artist.objects.create(name="Mark Twain", genre="Literature")
        self.assertEqual(artist_no_image.image_url, None)
