import { VercelRequest, VercelResponse } from '@vercel/node';
import { PaymentProcessor } from '../lib/payment-processor';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { transactionId, amount } = req.body;

    // Validate required fields
    if (!transactionId) {
      return res.status(400).json({
        error: 'Missing required field: transactionId',
      });
    }

    const processor = new PaymentProcessor();
    const result = await processor.capturePayment(transactionId, amount);

    if (result.success) {
      return res.status(200).json({
        success: true,
        transactionId: result.transactionId,
        status: result.status,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: result.error,
      });
    }
  } catch (error) {
    console.error('Payment capture error:', error);
    return res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Internal server error',
      },
    });
  }
}
