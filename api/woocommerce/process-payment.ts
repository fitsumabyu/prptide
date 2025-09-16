import { VercelRequest, VercelResponse } from '@vercel/node';
import { PaymentProcessor } from '../lib/payment-processor.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const timestamp = new Date().toISOString();
  
  console.log(`\n🚀 [${timestamp}] [${requestId}] WooCommerce Payment Request Received`);
  console.log(`📋 Request Method: ${req.method}`);
  console.log(`🌐 User Agent: ${req.headers['user-agent'] || 'Unknown'}`);
  console.log(`🔗 Referer: ${req.headers.referer || 'Direct'}`);
  console.log(`📍 IP Address: ${req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'Unknown'}`);

  if (req.method !== 'POST') {
    console.log(`❌ [${requestId}] Invalid method: ${req.method}`);
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

    console.log(`\n📦 [${requestId}] WooCommerce Order Data:`);
    console.log(`   Order ID: ${metadata?.orderId || 'N/A'}`);
    console.log(`   Reference: ${reference}`);
    console.log(`   Amount: ${amount} ${currency}`);
    console.log(`   Customer: ${customer?.firstName} ${customer?.lastName} (${customer?.email})`);
    console.log(`   Address: ${billingAddress?.street}, ${billingAddress?.city}, ${billingAddress?.country}`);
    console.log(`   Card: ****${card?.number?.slice(-4) || 'N/A'} (${card?.holderName || 'N/A'})`);
    console.log(`   Capture: ${capture ? 'Yes' : 'No'}`);
    console.log(`   Source: ${metadata?.source || 'Unknown'}`);

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

    console.log(`\n🔄 [${requestId}] Sending to Processor A:`);
    console.log(`   URL: ${mockProcessorUrl}/api/payments/authorize`);
    console.log(`   Amount: ${amount} ${currency}`);
    console.log(`   Reference: ${reference}`);
    console.log(`   Merchant: ${merchantAccount}`);

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

    console.log(`\n💳 [${requestId}] Processor A Response:`);
    console.log(`   Status Code: ${processorResponse.status}`);
    console.log(`   Success: ${processorResult.success}`);
    console.log(`   Transaction ID: ${processorResult.transactionId}`);
    console.log(`   Payment Status: ${processorResult.status}`);
    console.log(`   Response Time: ${Date.now() - parseInt(requestId.split('_')[1])}ms`);

    // Send webhook to WooCommerce plugin C
    if (processorResult.success && metadata?.source === 'woocommerce') {
      const wooBypassToken = process.env.WOOCOMMERCE_BYPASS_TOKEN;
      const webhookUrl = wooBypassToken 
        ? `https://woocommerce-jade.vercel.app/api/webhooks/payment?x-vercel-set-bypass-cookie=true&x-vercel-protection-bypass=${wooBypassToken}`
        : 'https://woocommerce-jade.vercel.app/api/webhooks/payment';
      
      console.log(`\n📤 [${requestId}] Sending Webhook to WooCommerce C:`);
      console.log(`   URL: ${webhookUrl}`);
      console.log(`   Event Type: ${processorResult.status === 'authorized' ? 'payment.authorized' : 'payment.captured'}`);
      console.log(`   Transaction ID: ${processorResult.transactionId}`);
      
      try {
        const webhookResponse = await fetch(webhookUrl, {
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

        console.log(`✅ [${requestId}] Webhook sent successfully to WooCommerce C`);
        console.log(`   Response Status: ${webhookResponse.status}`);
      } catch (webhookError) {
        console.error(`❌ [${requestId}] Webhook failed:`, webhookError);
      }
    }

    const response = {
      success: true,
      transactionId: processorResult.transactionId,
      status: processorResult.status,
      reference,
      amount,
      currency,
      message: 'Payment processed successfully',
      source: 'woocommerce-integration'
    };

    console.log(`\n✅ [${requestId}] Payment Processing Complete:`);
    console.log(`   Final Status: ${processorResult.status}`);
    console.log(`   Transaction ID: ${processorResult.transactionId}`);
    console.log(`   Total Processing Time: ${Date.now() - parseInt(requestId.split('_')[1])}ms`);
    console.log(`   Response: ${JSON.stringify(response, null, 2)}`);
    console.log(`\n🏁 [${requestId}] Request completed successfully\n`);

    return res.status(200).json(response);

  } catch (error) {
    console.error(`\n❌ [${requestId}] WooCommerce Payment Error:`, error);
    console.error(`   Error Type: ${error instanceof Error ? error.constructor.name : 'Unknown'}`);
    console.error(`   Error Message: ${error instanceof Error ? error.message : 'Unknown error'}`);
    console.error(`   Stack Trace: ${error instanceof Error ? error.stack : 'No stack trace'}`);
    console.error(`\n💥 [${requestId}] Request failed\n`);

    return res.status(500).json({
      success: false,
      error: {
        code: 'WOOCOMMERCE_PAYMENT_FAILED',
        message: error instanceof Error ? error.message : 'Payment processing failed',
      },
    });
  }
}
