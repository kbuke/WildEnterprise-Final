from flask_restful import Resource
from flask import session

from helpers.admin_required import admin_required

class AdminCheckSession(Resource):
    def get(self):
        if session.get("is_admin"):
            return {"is_admin": True}, 200 
        return {"is_admin": False}, 401