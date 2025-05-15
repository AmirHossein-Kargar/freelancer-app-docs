---
title: Get User Profile
description: Endpoint to fetch the authenticated user's profile
---

# 👤 Get User Profile

This endpoint retrieves the authenticated user's profile information.

## 🔒 Endpoint

**GET** `/user/profile`

## ✅ Success Response

**Status Code:** `200 OK`

### Response Body

```json
{
  "statusCode": 200,
  "data": {
    "user": {
      "_id": "6820702d1cf8957d78d0ad71",
      "biography": null,
      "phoneNumber": "09183887794",
      "resetLink": null,
      "isVerifiedPhoneNumber": true,
      "isActive": true,
      "status": 1,
      "role": "FREELANCER",
      "createdAt": "2025-05-11T09:38:53.635Z",
      "updatedAt": "2025-05-11T09:41:03.311Z",
      "__v": 0,
      "email": "user2@gmail.com",
      "name": "user2",
      "avatarUrl": null
    }
  }
}
```
