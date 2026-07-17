from resources.BaseResource import BaseResource
from models.AuthorModel import AuthorModel

class AuthorList(BaseResource):
    model = AuthorModel

    field_map = {
        "name": "name",
        "img": "img",
        "intro": "intro"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()
    
class SpecificAuthor(BaseResource):
    model = AuthorModel

    field_map = {
        "name": "name",
        "img": "img",
        "intro": "intro"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)