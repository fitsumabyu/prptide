# Mock Setup Documentation

## Overview

This project implements a three-tier payment processing architecture:

```
WooCommerce Plugin C → Webapp B → Payment Processor A
```

- **Webapp B** (Main): `protidelab.com` - Ecommerce site with payment processing
- **Mock Processor A**: `processor-six.vercel.app` - Simulates payment processor
- **Mock WooCommerce C**: `woocommerce-jade.vercel.app` - Simulates WooCommerce plugin

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
│   └── lib/payment-processor.ts # Payment processor client
├── mocks/                        # Mock services (Git submodules)
│   ├── processor/               # Mock payment processor
│   └── woocommerce/            # Mock WooCommerce plugin
├── tests/                       # Test suites
│   └── payment-flow.test.js    # Payment flow tests
└── run-payment-tests.js        # Test runner
```

## Vercel Deployments

All projects are deployed under the `bangkokteam` Vercel team:

| Project | URL | Purpose |
|---------|-----|---------|
| Main Webapp | https://www.protidelab.com | Ecommerce site |
| Mock Processor | https://processor-six.vercel.app | Payment processor simulation |
| Mock WooCommerce | https://woocommerce-jade.vercel.app | WooCommerce plugin simulation |

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
TEST_BASE_URL=https://www.protidelab.com npm run test:payments

# Test against local development
TEST_BASE_URL=http://localhost:3000 npm run test:payments
```

## Environment Variables

### Main Webapp (.env)
```bash
PROCESSOR_API_KEY=your_api_key
PROCESSOR_MERCHANT_ID=your_merchant_id
PROCESSOR_WEBHOOK_SECRET=your_webhook_secret
PROCESSOR_BASE_URL=https://processor-six.vercel.app
```

### Mock Processor (.env)
```bash
WEBAPP_B_URL=https://www.protidelab.com
WEBAPP_B_WEBHOOK_URL=https://www.protidelab.com/api/webhooks/processor
```

### Mock WooCommerce (.env)
```bash
WEBAPP_B_URL=https://www.protidelab.com
WEBAPP_B_API_URL=https://www.protidelab.com/api/woocommerce
```

## API Endpoints

### Main Webapp (Webapp B)
- `POST /api/payments/authorize` - Authorize payment
- `POST /api/payments/capture` - Capture authorized payment
- `POST /api/payments/refund` - Refund payment
- `POST /api/webhooks/processor` - Receive processor webhooks
- `GET /api/payments/3ds/callback` - 3DS callback handler

### Mock Processor (Processor A)
- `POST /api/payments/authorize` - Simulate payment authorization
- `POST /api/payments/capture` - Simulate payment capture
- `POST /api/payments/refund` - Simulate payment refund
- `POST /api/webhooks/send` - Send webhooks to webapp B

### Mock WooCommerce (Plugin C)
- `POST /api/orders/create` - Create order from WooCommerce
- `POST /api/checkout/process` - Process checkout
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

## Next Steps

1. Implement actual API endpoints in mock services
2. Set up environment variables for all services
3. Test complete three-tier payment flow
4. Implement webhook routing between services
5. Add comprehensive error handling and logging
