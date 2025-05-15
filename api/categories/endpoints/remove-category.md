# Remove Category

Removes a category by its ID.

- **Endpoint:** `/admin/category/remove/:id`
- **Method:** `DELETE`
- **Access:** Admin only (`role: ADMIN` or `OWNER`)

## Path Parameters

| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| `id`      | string | The ID of the category to remove |

## Success Response

```json
{
  "statusCode": 200,
  "data": {
    "message": "حذف دسته بندی با موفقیت انجام شد"
  }
}
