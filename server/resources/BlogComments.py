from resources.BaseResource import BaseResource
from models.BlogCommentModel import BlogCommentModel

class BlogCommentsList(BaseResource):
    model = BlogCommentModel

    field_map = {
        "comment": "comment",
        "userId": "user_id",
        "blogId": "blog_id"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificBlogComment(BaseResource):
    model = BlogCommentModel

    field_map = {
        "comment": "comment",
        "userId": "user_id",
        "blogId": "blog_id"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)