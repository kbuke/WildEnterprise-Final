from datetime import datetime, date, time 

def to_date(value):
    if(isinstance(value, date)):
        return value
    return datetime.strptime(value, "%Y-%m-%d").date()