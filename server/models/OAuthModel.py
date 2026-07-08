from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from config import db

class OAuthModel(db.Model, SerializerMixin):
    __tablename__ = "oauth_accounts"

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    provider = db.Column(db.String(50), nullable = False)
    provider_user_id = db.Column(db.String(255), nullable = False)

    __table_args__ = (
        db.UniqueConstraint("provider", "provider_user_id", name = "uq_provider_account"),
    )

    user = db.relationship("UserModel", backref = "oauth_accounts")