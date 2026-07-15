from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

from config import db 

class OtherSiteModel(db.Model, SerializerMixin):
    __tablename__ = "other_sites"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False, unique = True)
    img = db.Column(db.String, nullable = False)
    info = db.Column(db.String, nullable = False)
    url = db.Column(db.String, nullable = False, unique = True)