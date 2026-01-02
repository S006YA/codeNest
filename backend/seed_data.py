"""
Seed script to populate MongoDB with initial portfolio data
Run this once to initialize the database
"""
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Initial projects data
INITIAL_PROJECTS = [
    {
        "id": "proj-1",
        "title": "E-Commerce Platform",
        "description": "A full-featured e-commerce platform with product catalog, shopping cart, and checkout flow. Built with React, TypeScript, and integrated with Stripe for payments.",
        "technologies": ["React", "TypeScript", "Redux", "Stripe API", "Tailwind CSS"],
        "features": [
            "Dynamic product filtering and search",
            "Real-time cart management",
            "Secure payment processing",
            "Responsive design for all devices"
        ],
        "githubUrl": "#",
        "liveUrl": "#",
        "image": "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
        "order": 1
    },
    {
        "id": "proj-2",
        "title": "Real-Time Analytics Dashboard",
        "description": "Interactive analytics dashboard featuring real-time data visualization, WebSocket integration, and customizable widgets. Designed for monitoring business metrics.",
        "technologies": ["React", "JavaScript", "Chart.js", "WebSocket", "Node.js"],
        "features": [
            "Live data updates via WebSocket",
            "Customizable dashboard layouts",
            "Multiple chart types and visualizations",
            "Export data to CSV/PDF"
        ],
        "githubUrl": "#",
        "liveUrl": "#",
        "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        "order": 2
    },
    {
        "id": "proj-3",
        "title": "Task Management Application",
        "description": "Collaborative task management tool with drag-and-drop functionality, team collaboration features, and deadline tracking. Built with React and Context API.",
        "technologies": ["React", "TypeScript", "Context API", "DnD Kit", "LocalStorage"],
        "features": [
            "Drag-and-drop task organization",
            "Priority and deadline management",
            "Team collaboration features",
            "Offline-first architecture"
        ],
        "githubUrl": "#",
        "liveUrl": "#",
        "image": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
        "order": 3
    },
    {
        "id": "proj-4",
        "title": "Weather Forecast App",
        "description": "Elegant weather application with 7-day forecasts, location-based detection, and beautiful weather animations. Integrates with OpenWeather API.",
        "technologies": ["React", "JavaScript", "OpenWeather API", "Geolocation API", "CSS Animations"],
        "features": [
            "Current weather and 7-day forecast",
            "Auto-detect user location",
            "Search by city or zip code",
            "Animated weather conditions"
        ],
        "githubUrl": "#",
        "liveUrl": "#",
        "image": "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
        "order": 4
    },
    {
        "id": "proj-5",
        "title": "Serverless Portfolio CMS",
        "description": "Content management system for portfolios built with serverless architecture. Features AWS Lambda functions for backend operations and S3 for media storage.",
        "technologies": ["React", "TypeScript", "AWS Lambda", "API Gateway", "DynamoDB"],
        "features": [
            "Serverless backend with AWS Lambda",
            "Dynamic content management",
            "Image optimization and CDN delivery",
            "Cost-effective scalable architecture"
        ],
        "githubUrl": "#",
        "liveUrl": "#",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        "order": 5
    }
]

# Initial skills data
INITIAL_SKILLS = [
    {
        "id": "skill-cat-1",
        "category": "Frontend",
        "items": [
            {"name": "React", "level": 95},
            {"name": "JavaScript (ES6+)", "level": 92},
            {"name": "TypeScript", "level": 88},
            {"name": "HTML5 & CSS3", "level": 90},
            {"name": "Tailwind CSS", "level": 85},
            {"name": "Redux/Context API", "level": 80}
        ]
    },
    {
        "id": "skill-cat-2",
        "category": "Backend & Tools",
        "items": [
            {"name": "Node.js", "level": 75},
            {"name": "Python", "level": 70},
            {"name": "AWS Lambda", "level": 65},
            {"name": "Git & GitHub", "level": 85},
            {"name": "REST APIs", "level": 80},
            {"name": "Webpack/Vite", "level": 75}
        ]
    }
]


async def seed_database():
    """Seed the database with initial data"""
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ['DB_NAME']]
    
    print("🌱 Starting database seeding...")
    
    # Clear existing data
    await db.projects.delete_many({})
    await db.skills.delete_many({})
    print("✓ Cleared existing data")
    
    # Insert projects
    if INITIAL_PROJECTS:
        await db.projects.insert_many(INITIAL_PROJECTS)
        print(f"✓ Inserted {len(INITIAL_PROJECTS)} projects")
    
    # Insert skills
    if INITIAL_SKILLS:
        await db.skills.insert_many(INITIAL_SKILLS)
        print(f"✓ Inserted {len(INITIAL_SKILLS)} skill categories")
    
    print("✅ Database seeding completed successfully!")
    
    client.close()


if __name__ == "__main__":
    asyncio.run(seed_database())
