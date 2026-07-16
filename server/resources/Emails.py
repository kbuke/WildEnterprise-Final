from flask import make_response, request
from flask_restful import Resource
from flask_mail import Message

from config import db, mail

from models.EmailModel import EmailModel

import os

class EmailList(Resource):
    def post(self):
        data = request.get_json()

        try:
            new_email = EmailModel(
                address=data.get("address"),
                subject=data.get("subject"),
                message=data.get("message")
            )
        except ValueError as e:
            return {"error": str(e)}, 422
        
        db.session.add(new_email)
        db.session.commit()

        try: 
            msg = Message(
                subject=new_email.subject,
                sender=new_email.address,
                recipients=[os.environ.get("GMAIL_ADDRESS")], # Message.recipients expects a list of email address strings, so ensure it is wrapped in []
                body=new_email.message
            )
            mail.send(msg)
        except Exception as e:
            return {"error": f"Saved but failed to send email: {str(e)}"}, 502
        
        return new_email.to_dict(), 201

class SpecificEmail(Resource):
    pass