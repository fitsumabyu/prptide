# Development Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create/update your `.env` file with:
```env
# Payment Processor Configuration
PROCESSOR_API_KEY=your_processor_api_key_here
PROCESSOR_MERCHANT_ID=your_merchant_id_here
PROCESSOR_WEBHOOK_SECRET=your_webhook_secret_here
PROCESSOR_BASE_URL=https://processor-six.vercel.app

# Bypass tokens for testing (from test-complete-flow.js)
PROCESSOR_BYPASS_TOKEN=vPkbCrknO5hsk3Pd1ZeSWQf9yxtZmiYh
WOOCOMMERCE_BYPASS_TOKEN=QGZ6HfM3ttRzekKwAiqQVBVSlwkx6cCM

# App Configuration
VITE_APP_URL=http://localhost:5173
```

### 3. Start Development Environment

**Option A: Full Stack (Recommended)**
```bash
npm run dev:full
```
This starts both:
- Frontend: http://localhost:5173 (Vite)
- API: http://localhost:3000 (Vercel dev)

**Option B: Separate Services**
```bash
# Terminal 1: Frontend only
npm run dev

# Terminal 2: API only
npm run dev:api
```

## 🧪 Testing Payment Flow

### 1. Test the complete three-tier flow (recommended)
```bash
node test-complete-flow.js
```

### 2. Start the development environment
```bash
npm run dev:full
```

### 3. Run payment tests
```bash
npm run test:payments
```

## 🚀 Deployment

### Deploy to Production
```bash
npm run deploy
```

### Deploy Preview
```bash
vercel
```

## 📁 Project Structure

```
formulaxfetsum/
├── api/                    # Vercel serverless functions
│   ├── payments/          # Payment API endpoints
│   ├── webhooks/          # Webhook handlers
│   └── lib/               # Shared utilities
├── src/                   # React frontend
├── tests/                 # Payment flow tests
├── dev-server.js          # Development server script
└── run-payment-tests.js   # Test runner
```

## 🔧 Development Workflow

1. **Code**: Make changes to your React app or API routes
2. **Test**: Run `npm run test:payments` to test payment flows
3. **Deploy**: Run `npm run deploy` to push to production

## 🌐 URLs

- **Local Frontend**: http://localhost:5173
- **Local API**: http://localhost:3000
- **Production**: https://www.protidelab.com

## 🔑 Key Benefits

- ✅ **Same code**: API routes run identically locally and in production
- ✅ **Same environment**: Uses Vercel's runtime locally
- ✅ **Instant deployment**: One command deploys to production
- ✅ **Hot reload**: Both frontend and API reload on changes
- ✅ **Environment parity**: Local and production are identical

## 🐛 Troubleshooting

### API endpoints not accessible
- Make sure you're running `npm run dev:full` or `npm run dev:api`
- Check that Vercel CLI is installed: `vercel --version`

### Environment variables not working
- Make sure `.env` file exists and has the correct variables
- Restart the development server after changing `.env`

### Payment tests failing
- Ensure both frontend and API are running
- Check that your payment processor credentials are set in `.env`
