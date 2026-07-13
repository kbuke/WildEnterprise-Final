from models.InhabitantsModel import InhabitantsModel
from resources.BaseResource import BaseResource

class InhabitantsList(BaseResource):
    model = InhabitantsModel

    field_map = {
        "name": "name",
        "bannerImg": "banner_img",
        "info": "info"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()
    
class SpecificInhabitants(BaseResource):
    model = InhabitantsModel

    field_map = {
        "name": "name",
        "bannerImg": "banner_img",
        "info": "info"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)
