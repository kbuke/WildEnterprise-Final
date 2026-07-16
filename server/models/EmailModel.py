import re
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from config import db

class EmailModel(db.Model, SerializerMixin):
    __tablename__ = "emails"

    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String, nullable=False)
    subject = db.Column(db.String, nullable=False)
    message = db.Column(db.String, nullable=False)

    ADDRESS_REGEX = re.compile(
        r"^(?!\.)(?!.*\.\.)[a-zA-Z0-9_'+\-.]*[a-zA-Z0-9_+\-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$"
    )

    @validates("address")
    def validate_address(self, key, value):
        if not value or not self.ADDRESS_REGEX.match(value):
            raise ValueError("Please enter a valid email address")
        return value