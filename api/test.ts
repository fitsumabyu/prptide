import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  return res.status(200).json({
    message: 'API is working!',
    method: req.method,
    env: {
      hasApiKey: !!process.env.PROCESSOR_API_KEY,
      hasMerchantId: !!process.env.PROCESSOR_MERCHANT_ID,
      hasWebhookSecret: !!process.env.PROCESSOR_WEBHOOK_SECRET,
    }
  });
}
