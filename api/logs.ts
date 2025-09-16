import { VercelRequest, VercelResponse } from '@vercel/node';

// Simple in-memory log storage (in production, you'd use a proper logging service)
const recentLogs: string[] = [];
const MAX_LOGS = 100;

// Function to add logs (called from other API endpoints)
export function addLog(message: string) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}`;
  recentLogs.unshift(logEntry);
  
  // Keep only the most recent logs
  if (recentLogs.length > MAX_LOGS) {
    recentLogs.splice(MAX_LOGS);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const requestId = `logs_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const timestamp = new Date().toISOString();
  
  console.log(`\n📊 [${timestamp}] [${requestId}] Logs API Request`);
  console.log(`📋 Request Method: ${req.method}`);
  console.log(`🌐 User Agent: ${req.headers['user-agent'] || 'Unknown'}`);
  console.log(`📍 IP Address: ${req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'Unknown'}`);

  if (req.method !== 'GET') {
    console.log(`❌ [${requestId}] Invalid method: ${req.method}`);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const limit = parseInt(req.query.limit as string) || 50;
    const logs = recentLogs.slice(0, Math.min(limit, MAX_LOGS));

    console.log(`\n📋 [${requestId}] Returning ${logs.length} recent logs`);
    console.log(`🏁 [${requestId}] Logs request completed\n`);

    return res.status(200).json({
      success: true,
      count: logs.length,
      total: recentLogs.length,
      logs: logs,
      timestamp: timestamp
    });

  } catch (error) {
    console.error(`\n❌ [${requestId}] Logs API Error:`, error);
    console.error(`   Error Type: ${error instanceof Error ? error.constructor.name : 'Unknown'}`);
    console.error(`   Error Message: ${error instanceof Error ? error.message : 'Unknown error'}`);
    console.error(`\n💥 [${requestId}] Logs request failed\n`);

    return res.status(500).json({
      success: false,
      error: {
        code: 'LOGS_API_ERROR',
        message: error instanceof Error ? error.message : 'Failed to retrieve logs',
      },
    });
  }
}
