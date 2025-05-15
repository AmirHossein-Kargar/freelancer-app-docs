# Get Category By ID

Retrieve details of a specific category by its unique ID.

- **Endpoint:** `/category/:id`
- **Method:** `GET`
- **Access:** Public

## Path Parameters

| Parameter | Type   | Description              |
|-----------|--------|--------------------------|
| `id`      | string | The ID of the category   |

## Success Response

```json
{
  "statusCode": 200,
  "data": {
    "category": {
      "icon": {
        "sm": null,
        "lg": null
      },
      "_id": "6823a15254ec5134dc5c501c",
      "title": "programming-2",
      "englishTitle": "programming-2",
      "description": "web development-2",
      "type": "project",
      "parentId": null,
      "createdAt": "2025-05-13T19:45:22.787Z",
      "updatedAt": "2025-05-13T19:45:22.787Z",
      "__v": 0
    }
  }
}
