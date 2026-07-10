from flask import session
from helpers.admin_required import admin_required
from flask_restful import Resource

class AdminLogout(Resource):
    def delete(self):
        session.pop("is_admin", None)
        return {"message": "Admin logged out"}, 200