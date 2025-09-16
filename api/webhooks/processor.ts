import { VercelRequest, VercelResponse } from '@vercel/node';
import { PaymentProcessor } from '../lib/payment-processor';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const requestId = `webhook_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const timestamp = new Date().toISOString();
  
  console.log(`\n🔔 [${timestamp}] [${requestId}] Webhook Received from Processor A`);
  console.log(`📋 Request Method: ${req.method}`);
  console.log(`🌐 User Agent: ${req.headers['user-agent'] || 'Unknown'}`);
  console.log(`📍 IP Address: ${req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'Unknown'}`);
  console.log(`🔐 Signature Present: ${req.headers['x-signature'] ? 'Yes' : 'No'}`);

  if (req.method !== 'POST') {
    console.log(`❌ [${requestId}] Invalid method: ${req.method}`);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const signature = req.headers['x-signature'] as string;
    const rawBody = JSON.stringify(req.body);

    console.log(`\n🔍 [${requestId}] Webhook Data:`);
    console.log(`   Raw Body Length: ${rawBody.length} characters`);
    console.log(`   Signature: ${signature ? `${signature.substring(0, 20)}...` : 'None'}`);

    // Verify webhook signature
    const processor = new PaymentProcessor();
    if (!processor.verifyWebhookSignature(rawBody, signature)) {
      console.error(`❌ [${requestId}] Invalid webhook signature`);
      return res.status(401).json({ error: 'Invalid signature' });
    }

    const { eventType, data } = req.body;

    console.log(`\n📨 [${requestId}] Webhook Event Details:`);
    console.log(`   Event Type: ${eventType}`);
    console.log(`   Transaction ID: ${data?.transactionId || 'N/A'}`);
    console.log(`   Status: ${data?.status || 'N/A'}`);
    console.log(`   Amount: ${data?.amount || 'N/A'} ${data?.currency || 'N/A'}`);
    console.log(`   Reference: ${data?.reference || 'N/A'}`);
    console.log(`   Timestamp: ${data?.timestamp || 'N/A'}`);

    // Handle different webhook events
    console.log(`\n⚙️ [${requestId}] Processing webhook event: ${eventType}`);
    
    switch (eventType) {
      case 'payment.authorized':
        await handlePaymentAuthorized(data, requestId);
        break;
      
      case 'payment.captured':
        await handlePaymentCaptured(data, requestId);
        break;
      
      case 'payment.refunded':
        await handlePaymentRefunded(data, requestId);
        break;
      
      case 'payment.dispute.created':
        await handleDisputeCreated(data, requestId);
        break;
      
      case 'payment.chargeback.created':
        await handleChargebackCreated(data, requestId);
        break;
      
      default:
        console.log(`⚠️ [${requestId}] Unhandled webhook event: ${eventType}`);
    }

    console.log(`\n✅ [${requestId}] Webhook processed successfully`);
    console.log(`🏁 [${requestId}] Webhook request completed\n`);

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error(`\n❌ [${requestId}] Webhook processing error:`, error);
    console.error(`   Error Type: ${error instanceof Error ? error.constructor.name : 'Unknown'}`);
    console.error(`   Error Message: ${error instanceof Error ? error.message : 'Unknown error'}`);
    console.error(`   Stack Trace: ${error instanceof Error ? error.stack : 'No stack trace'}`);
    console.error(`\n💥 [${requestId}] Webhook request failed\n`);

    return res.status(500).json({ error: 'Webhook processing failed' });
  }
}

async function handlePaymentAuthorized(data: any, requestId: string) {
  console.log(`\n💳 [${requestId}] Processing Payment Authorized:`);
  console.log(`   Transaction ID: ${data.transactionId}`);
  console.log(`   Amount: ${data.amount} ${data.currency}`);
  console.log(`   Reference: ${data.reference}`);
  console.log(`   Status: ${data.status}`);
  // TODO: Update database with authorized status
  console.log(`✅ [${requestId}] Payment authorization processed`);
}

async function handlePaymentCaptured(data: any, requestId: string) {
  console.log(`\n💰 [${requestId}] Processing Payment Captured:`);
  console.log(`   Transaction ID: ${data.transactionId}`);
  console.log(`   Amount: ${data.amount} ${data.currency}`);
  console.log(`   Reference: ${data.reference}`);
  console.log(`   Status: ${data.status}`);
  // TODO: Update database with captured status
  // TODO: Send confirmation email to customer
  console.log(`✅ [${requestId}] Payment capture processed`);
}

async function handlePaymentRefunded(data: any, requestId: string) {
  console.log(`\n🔄 [${requestId}] Processing Payment Refunded:`);
  console.log(`   Transaction ID: ${data.transactionId}`);
  console.log(`   Amount: ${data.amount} ${data.currency}`);
  console.log(`   Reference: ${data.reference}`);
  console.log(`   Status: ${data.status}`);
  // TODO: Update database with refunded status
  // TODO: Send refund confirmation email
  console.log(`✅ [${requestId}] Payment refund processed`);
}

async function handleDisputeCreated(data: any, requestId: string) {
  console.log(`\n⚠️ [${requestId}] Processing Dispute Created:`);
  console.log(`   Transaction ID: ${data.transactionId}`);
  console.log(`   Amount: ${data.amount} ${data.currency}`);
  console.log(`   Reference: ${data.reference}`);
  console.log(`   Dispute ID: ${data.disputeId || 'N/A'}`);
  console.log(`   Reason: ${data.reason || 'N/A'}`);
  // TODO: Update database with dispute status
  // TODO: Notify admin team
  console.log(`✅ [${requestId}] Dispute notification processed`);
}

async function handleChargebackCreated(data: any, requestId: string) {
  console.log(`\n🚨 [${requestId}] Processing Chargeback Created:`);
  console.log(`   Transaction ID: ${data.transactionId}`);
  console.log(`   Amount: ${data.amount} ${data.currency}`);
  console.log(`   Reference: ${data.reference}`);
  console.log(`   Chargeback ID: ${data.chargebackId || 'N/A'}`);
  console.log(`   Reason: ${data.reason || 'N/A'}`);
  // TODO: Update database with chargeback status
  // TODO: Notify admin team
  console.log(`✅ [${requestId}] Chargeback notification processed`);
}
