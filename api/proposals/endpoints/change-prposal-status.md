# Change Proposal Status

Update the status of a specific proposal by its ID.

- **Endpoint:** `/proposal/:id`
- **Method:** `PATCH`
- **Access:** Only users with the role `ADMIN` or `OWNER` can access this endpoint.

## Request Body

```json
{
  "status": 1
}
```
## Status Code 200

```json
{
    "statusCode": 200,
    "data": {
        "message": "وضعیت پروپوزال تایید شد"
    }
}
