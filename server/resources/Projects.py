from resources.BaseResource import BaseResource
from models.ProjectModel import ProjectModel

class ProjectList(BaseResource):
    model = ProjectModel

    field_map = {
        "name": "name",
        "img": "img",
        "p1Img": "p1_img",
        "p2Img": "p2_img",
        "p3Img": "p3_img",
        "video": "video",
        "introInfo": "intro_info",
        "mainInfo": "main_info"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificProject(BaseResource):
    model = ProjectModel

    field_map = {
        "name": "name",
        "img": "img",
        "p1Img": "p1_img",
        "p2Img": "p2_img",
        "p3Img": "p3_img",
        "video": "video",
        "introInfo": "intro_info",
        "mainInfo": "main_info"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)