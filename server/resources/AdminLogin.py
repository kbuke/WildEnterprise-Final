from flask import request, session
from flask_restful import Resource
import os

from config import bcrypt

from helpers.admin_required import admin_required

class AdminLogin(Resource):
    def post(self):
        data = request.get_json() or {}
        email = data.get("email")
        password = data.get("password")

        admin_email = os.getenv("ADMIN_EMAIL")
        admin_hash = os.getenv("ADMIN_PW")

        print(repr(admin_hash))

        if not email or not password:
            return {"error": "Email and password required"}, 400
        
        if email != admin_email or not bcrypt.check_password_hash(admin_hash, password):
            return {"error": "Invalid credentials"}, 401 
        
        session["is_admin"] = True
        session.permanent = True 

        return {"message": "Admin logged in"}, 200    