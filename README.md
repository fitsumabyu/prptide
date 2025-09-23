# Protidelab - Ecommerce Payment System

## Quick Start

### Prerequisites
- Node.js 18.x (required for Vercel deployment)

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
PROCESSOR_BASE_URL=https://processor-six.vercel.app
PROCESSOR_BYPASS_TOKEN=vPkbCrknO5hsk3Pd1ZeSWQf9yxtZmiYh
WOOCOMMERCE_BYPASS_TOKEN=QGZ6HfM3ttRzekKwAiqQVBVSlwkx6cCM
VITE_APP_URL=http://localhost:5173
```

### 3. Start Development
```bash
# Start both frontend and API
npm run dev:full

# Or start separately:
npm run dev        # Frontend only (port 5173)
npm run dev:api    # API only (port 3000)
```

## Testing Payment System

### Test Complete Three-Tier Flow
```bash
node test-complete-flow.js
```

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
- **Local Frontend**: http://localhost:5173
- **Local API**: http://localhost:3000
- **Production**: https://www.protidelab.com

## API Endpoints
- `POST /api/payments/authorize` - Authorize payments
- `POST /api/payments/capture` - Capture payments  
- `POST /api/payments/refund` - Process refunds
- `GET /api/payments/3ds/callback` - 3DS callbacks
- `POST /api/webhooks/processor` - Webhook events
- `POST /api/woocommerce/process-payment` - Process WooCommerce payments
- `GET /api/test` - Health check

## Three-Tier Architecture
This system implements a three-tier payment flow:
- **WooCommerce Plugin C**: `https://woocommerce-jade.vercel.app`
- **Webapp B**: `https://www.protidelab.com` 
- **Processor A**: `https://processor-six.vercel.app`
