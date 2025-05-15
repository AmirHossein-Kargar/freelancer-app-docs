## 📂 Get All Categories

Fetch the list of all available categories.

### 🟢 Endpoint

`GET /category/list`

### 🔐 Access

Public – No authentication required.

---

### ✅ Success Response

**Status Code**: `200 OK`

```json
{
  "statusCode": 200,
  "data": {
    "categories": [
      {
        "icon": {
          "sm": null,
          "lg": null
        },
        "_id": "6820db0da12e969ed1e7fef8",
        "title": "programming",
        "englishTitle": "programming",
        "description": "web development",
        "type": "project",
        "parentId": null,
        "createdAt": "2025-05-11T17:14:53.957Z",
        "updatedAt": "2025-05-11T17:14:53.957Z",
        "__v": 0
      }
    ]
  }
}
