# ➕ Add New Proposal

Create a new proposal (bid) for a project. Only users with the role of `FREELANCER` can send proposals.

## 📥 Endpoint

`POST /proposal/add`

## 🔐 Access

- ✅ Requires authentication
- ✅ Role: `FREELANCER`

## 🧾 Request Body

```json
{
  "duration": 30,
  "description": "this is first proposal demo",
  "price": 1000000,
  "projectId": "681127cb975bf0bf77cc0240"
}
```
## ✅ Success Response

**Status Code:** `201 Created`

```json
{
  "statusCode": 201,
  "data": {
    "message": "پروژه با موفقیت ایجاد شد"
  }
}
```
**Status Code:** `400`

```json
{
    "statusCode": 400,
    "message": "شناسه پروژه وارد شده صحیح نمیباشد"
}
