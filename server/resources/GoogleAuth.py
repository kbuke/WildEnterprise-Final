import os 
from flask import request, session
from flask_restful import Resource
from flask_login import login_user

from google.oauth2 import id_token
from google.auth.transport import requests as google_requests

from config import db 
from models.UserModel import UserModel
from models.OAuthModel import OAuthModel

GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")

class GoogleAuth(Resource):
    def post(self):
        data = request.get_json() or {}
        token = data.get("credential")

        if not token:
            return {"error": "Missing credentials"}, 400 
        try:
            id_info = id_token.verify_oauth2_token(
                token, google_requests.Request(), GOOGLE_CLIENT_ID
            )
        except ValueError:
            return{"error": "Invalid Google Token"}, 401
        
        google_sub = id_info["sub"] # sub is a unique, immutable 21 digit google id specfici to the user
        email = id_info.get("email")
        name = id_info.get("name")
        img = id_info.get("picture")

        oauth_account = OAuthModel.query.filter_by(
            provider="google", provider_user_id=google_sub
        ).first()

        if oauth_account:
            user = oauth_account.user # due to relationship defined this is the specific UserModel instance
        else:
            user = UserModel.query.filter_by(email=email).first()
            if not user:
                user = UserModel(email=email, name=name, img=img)
                db.session.add(user)
                db.session.flush() # assign user.id before commit
            db.session.add(OAuthModel(
                user_id = user.id,
                provider = "google",
                provider_user_id = google_sub
            ))
        db.session.commit()

        session.permanent = True
        login_user(user, remember=True)
        
        return user.to_dict(), 200