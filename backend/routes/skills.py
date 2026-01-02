from fastapi import APIRouter
from typing import List
from models.skill import SkillCategory

router = APIRouter()


def get_db():
    from server import db
    return db


@router.get("/skills", response_model=List[SkillCategory])
async def get_skills():
    """Get all skills data"""
    db = get_db()
    skills = await db.skills.find().to_list(100)
    return [SkillCategory(**skill) for skill in skills]
