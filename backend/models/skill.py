from pydantic import BaseModel, Field
from typing import List
import uuid


class SkillItem(BaseModel):
    name: str
    level: int


class SkillCategory(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    category: str
    items: List[SkillItem]
