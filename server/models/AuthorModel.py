from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db 

class AuthorModel(db.Model, SerializerMixin):
    __tablename__ = "authors"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    img = db.Column(db.String, nullable = False)
    intro = db.Column(db.String, nullable = False)
    # Set up a qualifications section maybe 

    serialize_rules = (
        "-blogs.author",
        "-blogs.sites"
    )