---
title: Verify User
description: Admin can verify or change the status of a user
---

# ✅ Verify User

As an admin (with **OWNER** or **ADMIN** role), you can verify or reject a user account.

**POST** `/admin/user/verify/:userId`

This endpoint allows you to change the status of a user by sending a request with a `userId` and a `status`. Only admins with the **OWNER** or **ADMIN** role can perform this action.

### Authorization

- **Role Required**: `OWNER` or `ADMIN`

---

## Request

### URL Parameters

| Parameter  | Description             |
|------------|-------------------------|
| `userId`   | The unique identifier of the user to verify. |

### Request Body

The request body must include the new status value for the user:

| Field      | Type   | Description                                     |
|------------|--------|-------------------------------------------------|
| `status`   | number | The status to set for the user. Possible values: `0` (Inactive), `1` (Active), `2` (Verified). |

#### Example Request Body

```json
{
  "status": 2
}
