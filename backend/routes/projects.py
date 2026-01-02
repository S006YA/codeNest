from fastapi import APIRouter, HTTPException
from typing import List
from models.project import Project, ProjectCreate, ProjectUpdate
from motor.motor_asyncio import AsyncIOMotorDatabase

router = APIRouter()


def get_db():
    from server import db
    return db


@router.get("/projects", response_model=List[Project])
async def get_projects():
    """Get all projects sorted by order"""
    db = get_db()
    projects = await db.projects.find().sort("order", 1).to_list(100)
    return [Project(**project) for project in projects]


@router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: str):
    """Get single project by ID"""
    db = get_db()
    project = await db.projects.find_one({"id": project_id})
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return Project(**project)


@router.post("/projects", response_model=Project, status_code=201)
async def create_project(project_data: ProjectCreate):
    """Create new project"""
    db = get_db()
    project = Project(**project_data.dict())
    await db.projects.insert_one(project.dict())
    return project


@router.put("/projects/{project_id}", response_model=Project)
async def update_project(project_id: str, project_data: ProjectUpdate):
    """Update existing project"""
    db = get_db()
    project = await db.projects.find_one({"id": project_id})
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    update_data = {k: v for k, v in project_data.dict().items() if v is not None}
    if update_data:
        await db.projects.update_one({"id": project_id}, {"$set": update_data})
    
    updated_project = await db.projects.find_one({"id": project_id})
    return Project(**updated_project)


@router.delete("/projects/{project_id}", status_code=204)
async def delete_project(project_id: str):
    """Delete project"""
    db = get_db()
    result = await db.projects.delete_one({"id": project_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Project not found")
    return None
