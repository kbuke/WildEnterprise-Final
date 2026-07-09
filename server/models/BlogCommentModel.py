from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db 

class BlogCommentModel(db.Model, SerializerMixin):
    __tablename__ = "blog_comments"

    id = db.Column(db.Integer, primary_key = True)
    comment = db.Column(db.String, nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    blog_id = db.Column(db.Integer, db.ForeignKey("blogs.id"))

    user = db.relationship("UserModel", backref = "blog_comments")
    blog = db.relationship("BlogModel", backref = "blog_comments")