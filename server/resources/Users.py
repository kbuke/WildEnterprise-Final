from resources.BaseResource import BaseResource
from models.UserModel import UserModel

class UserList(BaseResource):
    model = UserModel

    def get(self):
        return self.get_all()