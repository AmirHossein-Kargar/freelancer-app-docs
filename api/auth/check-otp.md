---
title: Check OTP
description: Endpoint to verify OTP in freelancer app
---

# ✅ Check OTP

**POST** `/user/check-otp`  
Verifies the OTP code sent to the user's phone number.

> ⚠️ The OTP is valid for **90 seconds**. After that, it will expire and the user must request a new one.

## 🔸 Request Body

```json
{
  "phoneNumber": "09033709193",
  "otp": "123456"
}
```

## ✅ Success

```json
{
  "statusCode": 200,
  "data": {
    "message": "کد تایید شد، لطفا اطلاعات خود را تکمیل کنید",
    "user": {
      "otp": {
        "code": 814874,
        "expiresIn": "2025-05-10T09:27:26.671Z"
      },
      "_id": "681f1a4b29a304d471484a67",
      "biography": null,
      "phoneNumber": "09033709193",
      "resetLink": null,
      "isVerifiedPhoneNumber": true,
      "isActive": false,
      "status": 1,
      "role": "OWNER",
      "createdAt": "2025-05-10T09:20:11.565Z",
      "updatedAt": "2025-05-10T09:26:09.579Z",
      "__v": 0,
      "avatarUrl": null
    }
  }
}
```

## ❌ Failure Response

```json
{
    "statusCode": 400,
    "message": "کد ارسال شده صحیح نمیباشد"
}
