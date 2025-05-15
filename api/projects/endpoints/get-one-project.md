## 🔍 Get One Project

Retrieve detailed information about a specific project by its ID.

### 📍 Endpoint

`GET /project/:id`

Replace `:id` with the specific project ID.

### 🔐 Access

Public — accessible by all users.

### 🧾 Example Request

```http
GET /project/681127cb975bf0bf77cc0240

```

## 📦 Status Codes

### ✅ 200 OK

Project retrieved successfully.

```json
{
  "statusCode": 200,
  "data": {
    "project": {
      "_id": "681127cb975bf0bf77cc0240",
      "title": "پروژه اول",
      "description": "Desc",
      "status": "OPEN",
      "category": null,
      "budget": 100000000,
      "tags": ["frontend"],
      "proposals": [
        {
          "_id": "6811292d975bf0bf77cc024d",
          "price": 200000000,
          "duration": 40,
          "description": "اولین درخواست",
          "user": null,
          "status": 2,
          "createdAt": "2025-04-29T19:31:57.990Z",
          "updatedAt": "2025-04-29T19:41:52.258Z",
          "__v": 0
        }
      ],
      "deadline": "2025-05-01T19:20:59.970Z",
      "owner": null,
      "freelancer": null,
      "createdAt": "2025-04-29T19:26:03.444Z",
      "updatedAt": "2025-05-12T09:41:32.286Z",
      "__v": 0
    }
  }
}
