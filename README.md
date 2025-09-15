# FormulaX - Ecommerce Payment System

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create `.env` file with:
```env
PROCESSOR_API_KEY=your_processor_api_key_here
PROCESSOR_MERCHANT_ID=your_merchant_id_here
PROCESSOR_WEBHOOK_SECRET=your_webhook_secret_here
PROCESSOR_BASE_URL=https://api.yourprocessor.com/v1
NEXT_PUBLIC_APP_URL=http://localhost:8080
```

### 3. Start Development
```bash
# Start both frontend and API
npm run dev:full

# Or start separately:
npm run dev        # Frontend only (port 8080)
npm run dev:api    # API only (port 3000)
```

## Testing Payment System

### Run Payment Tests
```bash
npm run test:payments
```

### Test Individual Endpoints
```bash
# Test API health
curl http://localhost:3000/api/test

# Test payment authorization (mock)
curl -X POST http://localhost:3000/api/payments/authorize \
  -H "Content-Type: application/json" \
  -d '{"amount": 1000, "currency": "USD", "merchantAccount": "test", "reference": "test123", "card": {"number": "4111111111111111", "expiryMonth": "12", "expiryYear": "2025", "cvc": "123", "holderName": "Test User"}}'
```

## Deployment
```bash
npm run deploy
```

## URLs
- **Local Frontend**: http://localhost:8080
- **Local API**: http://localhost:3000
- **Production**: https://your-app.vercel.app

## API Endpoints
- `POST /api/payments/authorize` - Authorize payments
- `POST /api/payments/capture` - Capture payments  
- `POST /api/payments/refund` - Process refunds
- `GET /api/payments/3ds/callback` - 3DS callbacks
- `POST /api/webhooks/processor` - Webhook events
- `GET /api/test` - Health check
