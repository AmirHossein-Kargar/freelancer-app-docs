# Get One Proposal

Returns a single proposal based on the provided ID.

## 🟢 Endpoint

`GET /proposal/:id`

## 📥 Path Parameters

| Name | Type   | Description        |
| ---- | ------ | ------------------ |
| id   | string | ID of the proposal |

## ✅ Success Response

**Status Code:** `200 OK`

```json
{
  "statusCode": 200,
  "data": {
    "proposal": {
      "_id": "682312ecfd10ffa4a0800520",
      "price": 1000000,
      "duration": 30,
      "description": "this is first proposal demo",
      "user": "6820da3ca12e969ed1e7feeb",
      "status": 1,
      "createdAt": "2025-05-13T09:37:48.398Z",
      "updatedAt": "2025-05-13T09:37:48.398Z",
      "__v": 0
    }
  }
}
```
