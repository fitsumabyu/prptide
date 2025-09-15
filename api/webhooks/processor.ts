import { VercelRequest, VercelResponse } from '@vercel/node';
import { PaymentProcessor } from '../lib/payment-processor';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const signature = req.headers['x-signature'] as string;
    const rawBody = JSON.stringify(req.body);

    // Verify webhook signature
    const processor = new PaymentProcessor();
    if (!processor.verifyWebhookSignature(rawBody, signature)) {
      console.error('Invalid webhook signature');
      return res.status(401).json({ error: 'Invalid signature' });
    }

    const { eventType, data } = req.body;

    console.log(`Received webhook: ${eventType}`, data);

    // Handle different webhook events
    switch (eventType) {
      case 'payment.authorized':
        await handlePaymentAuthorized(data);
        break;
      
      case 'payment.captured':
        await handlePaymentCaptured(data);
        break;
      
      case 'payment.refunded':
        await handlePaymentRefunded(data);
        break;
      
      case 'payment.dispute.created':
        await handleDisputeCreated(data);
        break;
      
      case 'payment.chargeback.created':
        await handleChargebackCreated(data);
        break;
      
      default:
        console.log(`Unhandled webhook event: ${eventType}`);
    }

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return res.status(500).json({ error: 'Webhook processing failed' });
  }
}

async function handlePaymentAuthorized(data: any) {
  // Update order status to authorized
  console.log('Payment authorized:', data.transactionId);
  // TODO: Update database with authorized status
}

async function handlePaymentCaptured(data: any) {
  // Update order status to captured/paid
  console.log('Payment captured:', data.transactionId);
  // TODO: Update database with captured status
  // TODO: Send confirmation email to customer
}

async function handlePaymentRefunded(data: any) {
  // Update order status to refunded
  console.log('Payment refunded:', data.transactionId);
  // TODO: Update database with refunded status
  // TODO: Send refund confirmation email
}

async function handleDisputeCreated(data: any) {
  // Handle dispute notification
  console.log('Dispute created:', data.transactionId);
  // TODO: Update database with dispute status
  // TODO: Notify admin team
}

async function handleChargebackCreated(data: any) {
  // Handle chargeback notification
  console.log('Chargeback created:', data.transactionId);
  // TODO: Update database with chargeback status
  // TODO: Notify admin team
}
