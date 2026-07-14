from models.EventModel import EventModel
from resources.BaseResource import BaseResource

class EventsList(BaseResource):
    model = EventModel

    field_map = {
        "name": "name",
        "img": "img",
        "startDate": "start_date",
        "endDate": "end_date",
        "startTime": "start_time",
        "endTime": "end_time",
        "info": "info",
        "siteId": "site_id"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()
    
class SpecificEvent(BaseResource):
    model = EventModel

    field_map = {
        "name": "name",
         "img": "img",
        "startDate": "start_date",
        "endDate": "end_date",
        "startTime": "start_time",
        "endTime": "end_time",
        "info": "info",
        "siteId": "site_id"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)