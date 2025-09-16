#!/usr/bin/env node

/**
 * Simple script to monitor logs from the Formulax webapp
 * This helps you see when requests come in from the WooCommerce mock
 */

import fetch from 'node-fetch';

const WEBAPP_URL = 'https://www.protidelab.com';
const STATUS_URL = `${WEBAPP_URL}/api/status`;
const LOGS_URL = `${WEBAPP_URL}/api/logs`;

async function checkStatus() {
  try {
    console.log('🔍 Checking system status...');
    const response = await fetch(STATUS_URL);
    const status = await response.json();
    
    console.log(`✅ System Status: ${status.status}`);
    console.log(`📊 Service: ${status.service}`);
    console.log(`🌍 Environment: ${status.environment}`);
    console.log(`⏱️  Uptime: ${Math.floor(status.uptime)}s`);
    console.log(`💾 Memory: ${Math.round(status.memory.used / 1024 / 1024)}MB`);
    console.log(`🔗 Request ID: ${status.requestId}`);
    
    return true;
  } catch (error) {
    console.error('❌ Status check failed:', error.message);
    return false;
  }
}

async function getLogs() {
  try {
    const response = await fetch(LOGS_URL);
    const data = await response.json();
    
    if (data.success && data.logs.length > 0) {
      console.log(`\n📋 Recent Logs (${data.count}/${data.total}):`);
      console.log('=' .repeat(80));
      data.logs.forEach((log, index) => {
        console.log(`${index + 1}. ${log}`);
      });
      console.log('=' .repeat(80));
    } else {
      console.log('📋 No recent logs found');
    }
    
    return data.logs.length;
  } catch (error) {
    console.error('❌ Failed to fetch logs:', error.message);
    return 0;
  }
}

async function monitor() {
  console.log('🚀 Formulax Webapp Log Monitor');
  console.log(`🌐 Monitoring: ${WEBAPP_URL}`);
  console.log('📝 This will show you when requests come in from the WooCommerce mock\n');
  
  // Initial status check
  const isHealthy = await checkStatus();
  if (!isHealthy) {
    console.log('❌ System is not healthy, exiting...');
    process.exit(1);
  }
  
  console.log('\n🔄 Starting log monitoring...');
  console.log('💡 Tip: Run the WooCommerce mock or test-complete-flow.js to see logs\n');
  
  let lastLogCount = 0;
  
  // Monitor logs every 5 seconds
  setInterval(async () => {
    const logCount = await getLogs();
    
    if (logCount > lastLogCount) {
      console.log(`\n🆕 New logs detected! (${logCount - lastLogCount} new entries)`);
    }
    
    lastLogCount = logCount;
  }, 5000);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Log monitoring stopped');
  process.exit(0);
});

monitor().catch(console.error);
