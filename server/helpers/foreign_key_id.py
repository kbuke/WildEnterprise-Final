from config import db

def foreign_key_id(table_name):
    return db.Column(db.Integer, db.ForeignKey(f"{table_name}.id"))