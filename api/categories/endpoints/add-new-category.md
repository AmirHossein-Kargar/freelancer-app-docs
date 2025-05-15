## ➕ Add New Category

**Endpoint**: `POST /admin/category/add`  
**Access**: Only accessible by users with role `admin` or `owner`.

### 📝 Description

This endpoint allows an admin to create a new category to be used for organizing projects or skills.

### 🔐 Permissions

- Requires authentication.
- Only users with `admin` or `owner` roles are authorized.

### 📥 Request Body

```json
{
  "title": "programming",
  "description": "web development",
  "englishTitle": "programming",
  "type": "project"
}
```
### ✅ Success Response

**Status Code**: `201 Created`

```json
{
  "statusCode": 201,
  "data": {
    "message": "دسته بندی با موفقیت افزوده شد"
  }
}
