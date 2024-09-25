from django.urls import path
from .views import UserCreateView, edit_user, soft_delete_user

urlpatterns = [
    path("register", UserCreateView.as_view(), name="user-register"),
    path("edit", edit_user, name="edit_user"),
    path("delete", soft_delete_user, name="soft_delete_user"),
]
