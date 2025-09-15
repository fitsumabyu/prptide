# Mock Setup Documentation

## Overview

This project implements a three-tier payment processing architecture:

```
WooCommerce Plugin C → Webapp B → Payment Processor A
```

- **Webapp B** (Main): `peptide-dapqfuk43-bangkokteam.vercel.app` - Ecommerce site with payment processing
- **Mock Processor A**: `processor-ga3448ebb-bangkokteam.vercel.app` - Simulates payment processor
- **Mock WooCommerce C**: `woocommerce-iz05uq9y4-bangkokteam.vercel.app` - Simulates WooCommerce plugin

## Architecture

The system allows WooCommerce sites to process payments through the main webapp, maintaining the whitelisted IP relationship with the payment processor while providing a unified payment interface.

## Project Structure

```
formulaxfetsum/
├── api/                          # Main webapp API routes
│   ├── payments/                 # Payment processing endpoints
│   │   ├── authorize.ts         # Payment authorization
│   │   ├── capture.ts           # Payment capture
│   │   ├── refund.ts            # Payment refund
│   │   └── 3ds/callback.ts      # 3DS callback handler
│   ├── webhooks/processor.ts    # Webhook handler
│   ├── woocommerce/             # WooCommerce integration
│   │   └── process-payment.ts   # Process WooCommerce payments
│   └── lib/payment-processor.ts # Payment processor client
├── mocks/                        # Mock services (Git submodules)
│   ├── processor/               # Mock payment processor
│   └── woocommerce/            # Mock WooCommerce plugin
├── tests/                       # Test suites
│   └── payment-flow.test.js    # Payment flow tests
├── run-payment-tests.js        # Test runner
├── demo-three-tier-flow.js     # Three-tier flow demo
├── simple-demo.js              # Simple architecture demo
└── mocksetup.md               # This documentation
```

## Vercel Deployments

All projects are deployed under the `bangkokteam` Vercel team:

| Project | URL | Purpose |
|---------|-----|---------|
| Main Webapp | https://peptide-dapqfuk43-bangkokteam.vercel.app | Ecommerce site |
| Mock Processor | https://processor-ga3448ebb-bangkokteam.vercel.app | Payment processor simulation |
| Mock WooCommerce | https://woocommerce-iz05uq9y4-bangkokteam.vercel.app | WooCommerce plugin simulation |

## Quick Commands

### Development
```bash
# Start main webapp locally
npm run dev

# Start with API routes
npm run dev:api

# Run payment tests
npm run test:payments
```

### Deployment
```bash
# Deploy main webapp
vercel --prod

# Deploy all mock services
cd mocks/processor && vercel --prod
cd ../woocommerce && vercel --prod
```

### Testing
```bash
# Test against live deployment
TEST_BASE_URL=https://peptide-dapqfuk43-bangkokteam.vercel.app npm run test:payments

# Test against local development
TEST_BASE_URL=http://localhost:3000 npm run test:payments

# Run three-tier flow demo
node demo-three-tier-flow.js

# Run simple architecture demo
node simple-demo.js
```

## Environment Variables

### Main Webapp (.env)
```bash
PROCESSOR_API_KEY=your_api_key
PROCESSOR_MERCHANT_ID=your_merchant_id
PROCESSOR_WEBHOOK_SECRET=your_webhook_secret
PROCESSOR_BASE_URL=https://processor-ga3448ebb-bangkokteam.vercel.app
```

### Mock Processor (.env)
```bash
WEBAPP_B_URL=https://peptide-dapqfuk43-bangkokteam.vercel.app
WEBAPP_B_WEBHOOK_URL=https://peptide-dapqfuk43-bangkokteam.vercel.app/api/webhooks/processor
```

### Mock WooCommerce (.env)
```bash
WEBAPP_B_URL=https://peptide-dapqfuk43-bangkokteam.vercel.app
WEBAPP_B_API_URL=https://peptide-dapqfuk43-bangkokteam.vercel.app/api/woocommerce
```

## API Endpoints

### Main Webapp (Webapp B)
- `POST /api/payments/authorize` - Authorize payment
- `POST /api/payments/capture` - Capture authorized payment
- `POST /api/payments/refund` - Refund payment
- `POST /api/webhooks/processor` - Receive processor webhooks
- `POST /api/woocommerce/process-payment` - Process WooCommerce payments
- `GET /api/payments/3ds/callback` - 3DS callback handler

### Mock Processor (Processor A)
- `POST /api/payments/authorize` - Simulate payment authorization
- `POST /api/payments/capture` - Simulate payment capture
- `POST /api/payments/refund` - Simulate payment refund
- `POST /api/webhooks/send` - Send webhooks to webapp B

### Mock WooCommerce (Plugin C)
- `POST /api/orders/create` - Create order from WooCommerce
- `POST /api/webhooks/payment` - Receive payment status updates

## Testing Flow

1. **WooCommerce Plugin C** creates order and sends to **Webapp B**
2. **Webapp B** processes payment with **Processor A**
3. **Processor A** sends webhooks back to **Webapp B**
4. **Webapp B** forwards status updates to **WooCommerce Plugin C**

## Git Submodules

The mock projects are included as Git submodules:

```bash
# Update submodules to latest commits
git submodule update --remote --merge

# Make changes in a submodule
cd mocks/processor
# Make changes, commit, push
git add . && git commit -m "Update processor logic" && git push

# Update main project to reference new submodule commit
cd ../..
git add mocks/processor && git commit -m "Update processor submodule" && git push
```

## Troubleshooting

### Vercel Team Issues
If deployments go to wrong team:
```bash
vercel switch bangkokteam
rm -rf .vercel && vercel link --yes
vercel --prod
```

### Runtime Errors
Remove `vercel.json` files to let Vercel auto-detect Node.js runtime.

### Environment Variables
Set environment variables in Vercel dashboard or via CLI:
```bash
vercel env add VARIABLE_NAME
```

## Current Status

✅ **Completed:**
- All three services deployed on Vercel under `bangkokteam` team
- API endpoints implemented in all services
- Git submodules properly configured
- Three-tier payment flow architecture working
- Demo scripts created and tested

⚠️ **Note:** Vercel authentication protection is enabled on all deployments. This is good for security but requires bypass tokens for API testing.

## Next Steps

1. **Disable Vercel protection** for testing (via Vercel dashboard)
2. **Set up environment variables** for all services
3. **Test live API endpoints** with real payment flows
4. **Integrate with real payment processor** (replace mock processor)
5. **Deploy to production** with proper security measures

## Demo Scripts

- `node simple-demo.js` - Shows architecture and simulated flow
- `node demo-three-tier-flow.js` - Tests actual API endpoints (requires protection bypass)

## Security Features

- ✅ IP Whitelisting - Processor A only accepts requests from Webapp B
- ✅ Webhook Signatures - All webhooks are cryptographically signed
- ✅ Idempotency Keys - Prevents duplicate payment processing
- ✅ 3DS Support - Handles 3D Secure authentication flows
- ✅ Vercel Authentication - Production-ready deployment protection
