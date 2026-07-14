from datetime import datetime, date, time

def to_time(value):
    if isinstance(value, time):
        return value
    formats = ("%H:%M:%S", "%H:%M")
    for fmt in formats:
        try:
            return datetime.strptime(value, fmt).time()
        except ValueError:
            continue
    raise ValueError(f"Invalid time format: {value}")