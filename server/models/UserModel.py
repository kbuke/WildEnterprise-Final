from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from config import db 

from flask_login import UserMixin #flask-login provides cookie based sessions, UserMixin tells Flask-Login how to treat UserModel as a user object as it gives is_authenticated, is_active and get_id for free based on your column id

class UserModel(db.Model, SerializerMixin, UserMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String, unique = True, nullable = False)
    name = db.Column(db.String)
    img = db.Column(db.String, default = "https://static.vecteezy.com/system/resources/previews/026/434/409/non_2x/default-avatar-profile-icon-social-media-user-photo-vector.jpg")

    serialize_rules = (
        "-oauth_accounts.user",
        "-blog_comments.user",
        "-blog_comments.blog",
    )