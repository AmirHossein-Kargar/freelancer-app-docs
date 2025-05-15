## 📩 Request OTP

**Endpoint:** `POST /user/get-otp`  
Sends a one-time password (OTP) to the user's phone number.

### 🔗 Example Request

```json
{
  "phoneNumber": "09033709193"
}
```

### ✅ Success Response

```json
{
  "statusCode": 200,
  "data": {
    "message": "کد تائید برای ورود تستی: 441998",
    "expiresIn": 90000,
    "phoneNumber": "09033709193"
  }
}
```

## ❌ Failure Response

```json
{
  "statusCode": 400,
  "message": "شماره موبایل معتبر را وارد کنید"
}
```
## ⏭ Next Steps

After receiving the OTP, proceed to the [Verify OTP](../auth/check-otp.md) endpoint to validate the code and complete the authentication process.