# Backend Integration Contracts - codeNest Portfolio

## Overview
Converting frontend mock data to full-stack application with MongoDB backend.

## Database Models

### 1. Project Model
```python
{
  "id": str (auto-generated),
  "title": str,
  "description": str,
  "technologies": List[str],
  "features": List[str],
  "githubUrl": str,
  "liveUrl": str,
  "image": str (URL),
  "order": int,
  "created_at": datetime
}
```

### 2. ContactMessage Model
```python
{
  "id": str (auto-generated),
  "name": str,
  "email": str,
  "message": str,
  "submitted_at": datetime,
  "status": str (new/read/replied)
}
```

### 3. Skill Model
```python
{
  "id": str (auto-generated),
  "category": str,
  "items": List[{
    "name": str,
    "level": int
  }]
}
```

## API Endpoints

### Projects
- **GET /api/projects** - Retrieve all projects (sorted by order)
- **GET /api/projects/{id}** - Get single project details
- **POST /api/projects** - Create new project (admin)
- **PUT /api/projects/{id}** - Update project (admin)
- **DELETE /api/projects/{id}** - Delete project (admin)

### Contact
- **POST /api/contact** - Submit contact form message
- **GET /api/contact** - Get all messages (admin)

### Skills
- **GET /api/skills** - Get all skills data

## Mock Data to Backend Migration

### Current Mock Data Location
- `/app/frontend/src/data/mock.js` contains:
  - `mockData.projects` → Move to MongoDB `projects` collection
  - `mockData.skills` → Move to MongoDB `skills` collection
  - `mockData.hero` → Keep in frontend (static content)
  - `mockData.about` → Keep in frontend (static content)
  - `mockData.contact` → Keep email static, forms go to DB

### Frontend Integration Changes

#### 1. Projects Component (`/app/frontend/src/components/Projects.jsx`)
**Before:**
```javascript
import { mockData } from '../data/mock';
const { projects } = mockData;
```

**After:**
```javascript
const [projects, setProjects] = useState([]);
useEffect(() => {
  fetchProjects();
}, []);

const fetchProjects = async () => {
  const response = await axios.get(`${API}/projects`);
  setProjects(response.data);
};
```

#### 2. Skills Component (`/app/frontend/src/components/Skills.jsx`)
**Before:**
```javascript
import { mockData } from '../data/mock';
const { skills } = mockData;
```

**After:**
```javascript
const [skills, setSkills] = useState([]);
useEffect(() => {
  fetchSkills();
}, []);

const fetchSkills = async () => {
  const response = await axios.get(`${API}/skills`);
  setSkills(response.data);
};
```

#### 3. Contact Component (`/app/frontend/src/components/Contact.jsx`)
**Before:**
```javascript
// Mock form submission with setTimeout
setTimeout(() => {
  toast({ title: "Message Sent!" });
}, 1000);
```

**After:**
```javascript
const response = await axios.post(`${API}/contact`, formData);
if (response.status === 201) {
  toast({ title: "Message Sent!" });
}
```

## Backend Implementation Steps

1. ✅ Create MongoDB models in `/app/backend/models/`
2. ✅ Create API routes in `/app/backend/routes/`
3. ✅ Seed database with initial data from mock.js
4. ✅ Update server.py to include new routes
5. ✅ Test backend endpoints
6. ✅ Update frontend components to use backend APIs
7. ✅ Remove mock.js dependency from components
8. ✅ Test full-stack integration

## Database Seeding
Initial data will be seeded from mock.js to populate:
- 5 projects
- 2 skill categories with items
- Contact form will start empty

## Error Handling
- Frontend: Display user-friendly error messages via toast
- Backend: Return appropriate HTTP status codes with error messages
- Validation: Email format, required fields, string lengths

## Next Steps
1. Implement backend models and routes
2. Create database seed script
3. Update frontend to integrate with backend
4. Test all functionality
