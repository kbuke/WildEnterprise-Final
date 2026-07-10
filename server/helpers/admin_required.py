from functools import wraps
from flask import session, abort


def admin_required(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        if not session.get("is_admin"):
            abort(401)
        return f(*args, **kwargs)
    return wrapper