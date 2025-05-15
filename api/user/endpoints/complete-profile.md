---
title: Complete Profile
description: Endpoint to complete the user profile after OTP verification
---

# 📝 Complete Profile

This endpoint is used to complete a user's profile after OTP verification. It requires the user to submit their name, email, and role.

## 🔒 Endpoint

**POST** `/user/complete-profile`

## 🧾 Request Body

```json
{
  "name": "user-1 test",
  "email": "user@gmail.com",
  "role": "FREELANCER"
}
```
Note: The role field must be capitalized.
Allowed values: FREELANCER, ADMIN, OWNER.

## ✅ Response - 200 OK

```json
{
  "statusCode": 200,
  "data": {
    "message": "اطلاعات شما با موفقیت تکمیل شد",
    "user": {
      "otp": {
        "code": 306310,
        "expiresIn": "2025-05-11T09:13:52.866Z"
      },
      "_id": "682069f61cf8957d78d0ad68",
      "biography": null,
      "phoneNumber": "09033709193",
      "resetLink": null,
      "isVerifiedPhoneNumber": true,
      "isActive": true,
      "status": 1,
      "role": "OWNER",
      "createdAt": "2025-05-11T09:12:22.876Z",
      "updatedAt": "2025-05-11T09:12:58.941Z",
      "__v": 0,
      "email": "user@gmail.com",
      "name": "user-1 test",
      "avatarUrl": null
    }
  }
}
```
## ❌ Error 400: Bad Request

### Message:
"کاربری با این ایمیل قبلا ثبت نام کرده است."

### Description:
This error occurs when the user tries to register with an email that already exists in the system.

### Response Example

```json
{
  "statusCode": 400,
  "message": "کاربری با این ایمیل قبلا ثبت نام کرده است."
}
