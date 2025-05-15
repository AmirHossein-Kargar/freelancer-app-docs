## 🔄 Change Project Status

**Endpoint:** `PATCH /project/:id`

**Description:**  
Allows the project owner to change the status of a project to either `open` or `close`.

---

### 🔐 Permissions
Only the **Owner & ADMIN** of the project can perform this action.

---

### 📝 Path Parameters

| Parameter | Type   | Required | Description          |
|-----------|--------|----------|----------------------|
| `id`      | String | ✅       | The ID of the project |

---

### 📥 Request Body

```json
{
  "status": "open"
}
```

### 🎉 Success Response (200)

```json
{
  "statusCode": 200,
  "data": {
 "message": "وضعیت پروژه به حالت باز تغییر یافت"
  }
}
