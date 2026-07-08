# When FE firdt loads/refreshes it needs to ask "is this browser still logged in" without re-running the Google flow

from flask_restful import Resource
from flask_login import current_user

class CheckSession(Resource):
    def get(self):
        if current_user.is_authenticated:
            return current_user.to_dict(), 200 
        return {"error": "Not authenticated"}, 401