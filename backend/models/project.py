from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid


class ProjectCreate(BaseModel):
    title: str
    description: str
    technologies: List[str]
    features: List[str]
    githubUrl: str
    liveUrl: str
    image: str
    order: Optional[int] = 0


class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    technologies: Optional[List[str]] = None
    features: Optional[List[str]] = None
    githubUrl: Optional[str] = None
    liveUrl: Optional[str] = None
    image: Optional[str] = None
    order: Optional[int] = None


class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    technologies: List[str]
    features: List[str]
    githubUrl: str
    liveUrl: str
    image: str
    order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }
