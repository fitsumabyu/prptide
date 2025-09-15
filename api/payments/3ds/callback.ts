import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { transactionId, status, error } = req.query;

    // Handle 3DS callback from issuer
    if (status === 'success') {
      // Redirect to success page
      return res.redirect(302, `/checkout/success?transactionId=${transactionId}`);
    } else if (status === 'error') {
      // Redirect to error page
      return res.redirect(302, `/checkout/error?transactionId=${transactionId}&error=${error}`);
    } else {
      // Handle other statuses or redirect to pending page
      return res.redirect(302, `/checkout/pending?transactionId=${transactionId}`);
    }
  } catch (error) {
    console.error('3DS callback error:', error);
    return res.redirect(302, '/checkout/error?error=callback_failed');
  }
}
