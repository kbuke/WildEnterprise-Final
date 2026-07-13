from models.SiteImgModel import SiteImgModel
from resources.BaseResource import BaseResource

class SiteImgList(BaseResource):
    model = SiteImgModel

    field_map = {
        "url": "url",
        "siteId": "site_id"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificSiteImg(BaseResource):
    model = SiteImgModel

    field_map = {
        "url": "url",
        "siteId": "site_id"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)