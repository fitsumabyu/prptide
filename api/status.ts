import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const requestId = `status_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const timestamp = new Date().toISOString();
  
  console.log(`\n🏥 [${timestamp}] [${requestId}] Status API Request`);
  console.log(`📋 Request Method: ${req.method}`);
  console.log(`🌐 User Agent: ${req.headers['user-agent'] || 'Unknown'}`);
  console.log(`📍 IP Address: ${req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'Unknown'}`);

  if (req.method !== 'GET') {
    console.log(`❌ [${requestId}] Invalid method: ${req.method}`);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const status = {
      service: 'Formulax Webapp B',
      status: 'healthy',
      timestamp: timestamp,
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      endpoints: {
        'POST /api/woocommerce/process-payment': 'Process WooCommerce payments',
        'POST /api/webhooks/processor': 'Receive processor webhooks',
        'GET /api/logs': 'View recent system logs',
        'GET /api/status': 'System health check',
        'GET /api/test': 'Basic connectivity test'
      },
      integrations: {
        processor: {
          url: 'https://processor-six.vercel.app',
          status: 'configured'
        },
        woocommerce: {
          url: 'https://woocommerce-jade.vercel.app',
          status: 'configured'
        }
      },
      requestId: requestId
    };

    console.log(`\n✅ [${requestId}] System Status:`);
    console.log(`   Service: ${status.service}`);
    console.log(`   Status: ${status.status}`);
    console.log(`   Environment: ${status.environment}`);
    console.log(`   Uptime: ${Math.floor(status.uptime)}s`);
    console.log(`   Memory Usage: ${Math.round(status.memory.used / 1024 / 1024)}MB`);
    console.log(`🏁 [${requestId}] Status request completed\n`);

    return res.status(200).json(status);

  } catch (error) {
    console.error(`\n❌ [${requestId}] Status API Error:`, error);
    console.error(`   Error Type: ${error instanceof Error ? error.constructor.name : 'Unknown'}`);
    console.error(`   Error Message: ${error instanceof Error ? error.message : 'Unknown error'}`);
    console.error(`\n💥 [${requestId}] Status request failed\n`);

    return res.status(500).json({
      success: false,
      error: {
        code: 'STATUS_API_ERROR',
        message: error instanceof Error ? error.message : 'Failed to retrieve status',
      },
    });
  }
}
