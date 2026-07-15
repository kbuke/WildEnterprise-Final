from resources.BaseResource import BaseResource
from models.OtherSitesModel import OtherSiteModel

class OtherSitesList(BaseResource):
    model = OtherSiteModel

    field_map = {
        "name": "name",
        "img": "img",
        "info": "info",
        "url": "url"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificOtherSite(BaseResource):
    model = OtherSiteModel

    field_map = {
        "name": "name",
        "img": "img",
        "info": "info",
        "url": "url"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)