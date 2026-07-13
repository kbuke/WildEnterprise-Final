from config import db 

def one_to_many_relationship(relation_model, reference):
    return db.relationship(relation_model, backref = reference)