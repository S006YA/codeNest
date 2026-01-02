from pydantic import BaseModel, Field, EmailStr
from datetime import datetime
import uuid


class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    message: str


class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    message: str
    submitted_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = "new"

    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }
