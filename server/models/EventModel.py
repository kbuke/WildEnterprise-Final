from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from datetime import datetime

from config import db 

from helpers.foreign_key_id import foreign_key_id
from helpers.one_to_many_relationship import one_to_many_relationship
from helpers.to_date import to_date
from helpers.to_time import to_time

class EventModel(db.Model, SerializerMixin):
    __tablename__ = "events"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    img = db.Column(db.String, nullable = False, default = "")
    start_date = db.Column(db.DateTime, nullable = False)
    end_date = db.Column(db.DateTime)
    start_time = db.Column(db.Time, nullable = False)
    end_time = db.Column(db.Time, nullable = False)
    info = db.Column(db.String, nullable = False)
    site_id = foreign_key_id("sites")
    site = one_to_many_relationship("SiteModel", "events")

    @validates("start_date")
    def validate_start_date(self, key, value):
        return to_date(value)

    @validates("end_date")
    def validate_end_date(self, key, value):
        if value is None:
            return value
        
        value = to_date(value)
        if value <= self.start_date:
            raise ValueError("End date must be after start date")
        
        return value
        
        # return to_date(value)
    
    @validates("start_time")
    def validate_start_time(self, key, value):
        return to_time(value)
    
    @validates("end_time")
    def validate_end_time(self, key, value):
        value = to_time(value)
        is_single_day = self.end_date is None 

        if is_single_day and self.start_time is not None:
            if value <= self.start_time:
                raise ValueError("End time must be after the start time for a single day event")
        
        return value