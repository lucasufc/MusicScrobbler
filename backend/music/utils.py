from datetime import datetime, timedelta
from typing import Optional
from django.utils.timezone import now


def get_start_time(time_interval: str) -> Optional[datetime]:
    if time_interval == "day":
        return now() - timedelta(days=1)
    elif time_interval == "week":
        return now() - timedelta(weeks=1)
    elif time_interval == "month":
        return now() - timedelta(days=30)
    elif time_interval == "year":
        return now() - timedelta(days=365)
    else:
        return None
