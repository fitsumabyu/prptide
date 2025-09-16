import { VercelRequest, VercelResponse } from '@vercel/node';
import { PaymentProcessor } from '../lib/payment-processor';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      amount,
      currency,
      merchantAccount,
      reference,
      card,
      capture,
      billingAddress,
      customer,
      metadata
    } = req.body;

    console.log('🔄 Webapp B: Processing WooCommerce Payment', {
      reference,
      amount,
      currency,
      customer: customer?.email,
      source: metadata?.source
    });

    // Use the existing payment processor
    const processor = new PaymentProcessor();
    
    // For demo purposes, we'll use the mock processor URL
    const mockProcessorUrl = 'https://processor-six.vercel.app';
    
    // Prepare payment request for processor A
    const paymentRequest = {
      amount,
      currency,
      merchantAccount,
      reference,
      card,
      capture,
      billingAddress,
      customer
    };

    // Send to processor A with bypass token if available
    const processorBypassToken = process.env.PROCESSOR_BYPASS_TOKEN;
    const processorUrlWithBypass = processorBypassToken 
      ? `${mockProcessorUrl}/api/payments/authorize?x-vercel-set-bypass-cookie=true&x-vercel-protection-bypass=${processorBypassToken}`
      : `${mockProcessorUrl}/api/payments/authorize`;

    const processorResponse = await fetch(processorUrlWithBypass, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.PROCESSOR_API_KEY || 'mock_api_key'}`,
        'Idempotency-Key': `woo_${reference}_${Date.now()}`
      },
      body: JSON.stringify(paymentRequest)
    });

    const processorResult = await processorResponse.json();

    console.log('💳 Webapp B: Processor Response', {
      reference,
      transactionId: processorResult.transactionId,
      status: processorResult.status
    });

    // Send webhook to WooCommerce plugin C
    if (processorResult.success && metadata?.source === 'woocommerce') {
      const wooBypassToken = process.env.WOOCOMMERCE_BYPASS_TOKEN;
      const webhookUrl = wooBypassToken 
        ? `https://woocommerce-jade.vercel.app/api/webhooks/payment?x-vercel-set-bypass-cookie=true&x-vercel-protection-bypass=${wooBypassToken}`
        : 'https://woocommerce-jade.vercel.app/api/webhooks/payment';
      
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-webhook-source': 'formulax-webapp-b'
          },
          body: JSON.stringify({
            eventType: processorResult.status === 'authorized' ? 'payment.authorized' : 'payment.captured',
            data: {
              transactionId: processorResult.transactionId,
              status: processorResult.status,
              amount,
              currency,
              reference
            },
            orderId: metadata.orderId
          })
        });

        console.log('📤 Webapp B: Webhook sent to WooCommerce', {
          reference,
          webhookUrl
        });
      } catch (webhookError) {
        console.error('❌ Webapp B: Webhook failed', webhookError);
      }
    }

    return res.status(200).json({
      success: true,
      transactionId: processorResult.transactionId,
      status: processorResult.status,
      reference,
      amount,
      currency,
      message: 'Payment processed successfully',
      source: 'woocommerce-integration'
    });

  } catch (error) {
    console.error('❌ Webapp B: WooCommerce Payment Error', error);
    return res.status(500).json({
      success: false,
      error: {
        code: 'WOOCOMMERCE_PAYMENT_FAILED',
        message: error instanceof Error ? error.message : 'Payment processing failed',
      },
    });
  }
}
