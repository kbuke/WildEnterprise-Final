from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db 

from helpers.foreign_key_id import foreign_key_id
from helpers.one_to_many_relationship import one_to_many_relationship

class SiteImgModel(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key = True)
    url = db.Column(db.String, nullable = False)
    site_id = foreign_key_id("sites")

    site = one_to_many_relationship("SiteModel", "images")