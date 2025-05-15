## ➕ Add New Project

**Endpoint:** `POST /project/add`

**Description:**  
Allows users with the **Owner & ADMIN** role to create a new project.

---

### 🔐 Permissions
Only authenticated users with the `OWNER` and `ADMIN` role can access this endpoint.

---

### 📥 Request Body

```json
{
  "title": "First Project",
  "description": "Description of our project",
  "tags": ["frontend"],
  "category": "6820db0da12e969ed1e7fef8",
  "budget": 1000000,
  "deadline": "2025-05-12T08:52:35.100Z"
}
