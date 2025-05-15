# Refresh Access Token

Refreshes the user's **access token** using a valid refresh token.

- **Endpoint:** `/user/refresh-token`
- **Method:** `GET`
- **Access:** Public (requires refresh token in cookie)

## Success Response

```json
{
  "StatusCode": 200,
  "data": {
    "user": {
      "otp": {
        "code": 477270,
        "expiresIn": "2025-05-11T17:12:54.214Z"
      },
      "_id": "6820da3ca12e969ed1e7feeb",
      "biography": null,
      "phoneNumber": "09016405926",
      "resetLink": null,
      "isVerifiedPhoneNumber": true,
      "isActive": true,
      "status": 2,
      "role": "ADMIN",
      "createdAt": "2025-05-11T17:11:24.221Z",
      "updatedAt": "2025-05-11T17:12:21.801Z",
      "__v": 0,
      "email": "user@gmail.com",
      "name": "user-1",
      "avatarUrl": null
    }
  }
}
