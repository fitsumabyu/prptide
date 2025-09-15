import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      amount,
      currency = 'USD',
      merchantAccount,
      reference,
      card,
      token,
      capture = false,
      threeDS,
      billingAddress,
      customer,
    } = req.body;

    // Validate required fields
    if (!amount || !merchantAccount || !reference) {
      return res.status(400).json({
        error: 'Missing required fields: amount, merchantAccount, reference',
      });
    }

    if (!card && !token) {
      return res.status(400).json({
        error: 'Either card or token must be provided',
      });
    }

    // For now, return a mock success response
    // TODO: Integrate with actual payment processor
    return res.status(200).json({
      success: true,
      transactionId: `txn_${Date.now()}`,
      status: 'authorized',
      message: 'Payment authorization successful (mock)',
      data: {
        amount,
        currency,
        merchantAccount,
        reference,
        capture
      }
    });

  } catch (error) {
    console.error('Payment authorization error:', error);
    return res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: error instanceof Error ? error.message : 'Internal server error',
      },
    });
  }
}
