from flask_restful import Resource
from flask_login import logout_user, login_required

class Logout(Resource):
    @login_required
    def post(self):
        logout_user()
        return {"message": "Logged out"}, 200