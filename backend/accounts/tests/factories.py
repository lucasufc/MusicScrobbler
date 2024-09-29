import factory
from django.contrib.auth import get_user_model
from django.utils import timezone
import factory.fuzzy

User = get_user_model()


class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = User

    email = factory.Faker("email")
    first_name = factory.Faker("first_name")
    last_name = factory.Faker("last_name")
    is_active = True
    date_joined = factory.LazyFunction(timezone.now)
    image_url = factory.Faker("image_url")
    bio = factory.Faker("paragraph", nb_sentences=3)
