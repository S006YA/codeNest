from fastapi import APIRouter, HTTPException
from typing import List
from models.contact import ContactMessage, ContactMessageCreate
from utils.email_service import send_contact_email

router = APIRouter()


def get_db():
    from server import db
    return db


@router.post("/contact", response_model=ContactMessage, status_code=201)
async def submit_contact_message(message_data: ContactMessageCreate):
    """Submit contact form message"""
    db = get_db()
    contact_message = ContactMessage(**message_data.dict())
    
    # Save to database
    await db.contact_messages.insert_one(contact_message.dict())
    
    # Send email notification
    await send_contact_email(
        name=message_data.name,
        email=message_data.email,
        message=message_data.message
    )
    
    return contact_message


@router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages():
    """Get all contact messages (admin endpoint)"""
    db = get_db()
    messages = await db.contact_messages.find().sort("submitted_at", -1).to_list(100)
    return [ContactMessage(**msg) for msg in messages]


@router.get("/contact/{message_id}", response_model=ContactMessage)
async def get_contact_message(message_id: str):
    """Get single contact message"""
    db = get_db()
    message = await db.contact_messages.find_one({"id": message_id})
    if not message:
        raise HTTPException(status_code=404, detail="Message not found")
    return ContactMessage(**message)
