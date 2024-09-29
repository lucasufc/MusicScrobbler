import factory
from factory.django import DjangoModelFactory
from music.models import Artist, Song, Scrobble

# from django.contrib.auth import get_user_model

# User = get_user_model()


class ArtistFactory(DjangoModelFactory):
    class Meta:
        model = Artist

    name = factory.Faker("name")
    genre = factory.Faker("word")
    image_url = factory.Faker("image_url")


class SongFactory(DjangoModelFactory):
    class Meta:
        model = Song

    title = factory.Faker("sentence", nb_words=4)
    artist = factory.SubFactory(ArtistFactory)
    album = factory.Faker("sentence", nb_words=3)
    cover = factory.Faker("image_url")
    duration = factory.Faker("random_int", min=180, max=300)
    release_date = factory.Faker("date")


# class ScrobbleFactory(DjangoModelFactory):
#     class Meta:
#         model = Scrobble

#     user = factory.SubFactory(UserFactory)
#     song = factory.SubFactory(SongFactory)
#     timestamp = factory.Faker("date_time")
