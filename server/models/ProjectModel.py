from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db 

class ProjectModel(db.Model, SerializerMixin):
    __tablename__ = "projects"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False, unique = True)
    img = db.Column(db.String, nullable = False)
    p1_img = db.Column(db.String)
    p2_img = db.Column(db.String)
    p3_img = db.Column(db.String)
    video = db.Column(db.String)
    intro_info = db.Column(db.String, nullable = False)
    main_info = db.Column(db.String, nullable = False)

    # Set up relations with partners 
    # Set up relations with blog posts
    # Maybe add images of the projects
    # Mention if the project is complete or underway 
    # If it is finished mention the success of the project