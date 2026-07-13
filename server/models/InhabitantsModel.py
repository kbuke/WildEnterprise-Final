from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db 

class InhabitantsModel(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False, unique = True)
    banner_img = db.Column(db.String, nullable = False)
    info = db.Column(db.String, nullable = False)

    site_id = db.Column(db.Integer, db.ForeignKey("sites.id"))

    site = db.relationship("SiteModel", backref = "inhabitants")

    serialize_rules = (
        "-site.inhabitants",
    )