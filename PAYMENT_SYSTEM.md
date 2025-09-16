# Payment Processing System

This document describes the payment processing system implemented for the ecommerce application.

## Overview

The system provides a complete payment flow including authorization, capture, refund, 3DS authentication, and webhook handling for payment processor events.

## Environment Variables

Add these to your `.env` file:

```env
# Payment Processor Configuration
PROCESSOR_API_KEY=your_processor_api_key_here
PROCESSOR_MERCHANT_ID=your_merchant_id_here
PROCESSOR_WEBHOOK_SECRET=your_webhook_secret_here
PROCESSOR_BASE_URL=https://processor-six.vercel.app

# App Configuration
VITE_APP_URL=http://localhost:5173
```

## API Endpoints

### Payment Authorization
**POST** `/api/payments/authorize`

Authorizes a payment with optional capture.

**Request Body:**
```json
{
  "amount": 2999,
  "currency": "USD",
  "merchantAccount": "your_merchant_id",
  "reference": "ORDER_123",
  "card": {
    "number": "4111111111111111",
    "expiryMonth": "12",
    "expiryYear": "2025",
    "cvc": "123",
    "holderName": "John Doe"
  },
  "capture": false,
  "threeDS": {
    "returnUrl": "https://yourapp.com/api/payments/3ds/callback"
  },
  "billingAddress": {
    "street": "123 Main St",
    "city": "Anytown",
    "postalCode": "12345",
    "country": "US"
  },
  "customer": {
    "email": "customer@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

**Response:**
```json
{
  "success": true,
  "transactionId": "txn_123456789",
  "status": "authorized",
  "threeDSAction": {
    "type": "redirect",
    "url": "https://3ds.issuer.com/auth",
    "data": {...}
  }
}
```

### Payment Capture
**POST** `/api/payments/capture`

Captures a previously authorized payment.

**Request Body:**
```json
{
  "transactionId": "txn_123456789",
  "amount": 2999
}
```

### Payment Refund
**POST** `/api/payments/refund`

Refunds a captured payment.

**Request Body:**
```json
{
  "transactionId": "txn_123456789",
  "amount": 1000,
  "reason": "Customer request"
}
```

### 3DS Callback
**GET** `/api/payments/3ds/callback`

Handles 3DS authentication callbacks from the issuer.

**Query Parameters:**
- `transactionId`: The transaction ID
- `status`: success, error, or pending
- `error`: Error message if status is error

### Webhook Endpoint
**POST** `/api/webhooks/processor`

Receives webhook events from the payment processor.

**Headers:**
- `x-signature`: HMAC signature for verification

**Supported Events:**
- `payment.authorized`
- `payment.captured`
- `payment.refunded`
- `payment.dispute.created`
- `payment.chargeback.created`

## Security Features

### Idempotency
All payment requests include an `Idempotency-Key` header to prevent duplicate processing.

### Webhook Signature Verification
Webhook signatures are verified using HMAC-SHA256 to ensure authenticity.

### Card Data Handling
- Never store CVV or full card numbers
- Only store last 4 digits and card brand
- Use tokens for repeat payments

## Testing

Run the payment flow tests:

```bash
# Test the complete three-tier flow (recommended)
node test-complete-flow.js

# Or start your development server
npm run dev

# In another terminal, run the tests
node run-payment-tests.js
```

The test suite covers:
- Basic payment authorization
- Authorization with immediate capture
- 3DS authentication flow
- Payment capture
- Partial and full refunds
- Webhook signature verification
- Idempotency testing

## Vercel Deployment

The system is configured for Vercel deployment with:
- Node.js 18.x runtime for API functions
- Proper routing configuration
- Environment variable support

## Static Egress IPs

If your payment processor requires IP allowlisting, consider:
1. Vercel Outbound IPs add-on
2. Proxy/NAT solution
3. Contact Vercel support for dedicated IPs

## Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message"
  }
}
```

## Integration Notes

1. **Headers**: All requests to the processor include:
   - `Authorization: Bearer <API_KEY>`
   - `Idempotency-Key: <uuid>`
   - `Content-Type: application/json`

2. **Amounts**: All amounts are in cents (e.g., $29.99 = 2999)

3. **Currency**: Defaults to USD if not specified

4. **Reference**: Use unique order references for tracking

5. **3DS**: Configure return URLs to point to your callback endpoint
