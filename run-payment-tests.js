#!/usr/bin/env node

/**
 * Payment Test Runner
 * Simple script to run payment flow tests
 */

import PaymentTester from './tests/payment-flow.test.js';

async function main() {
  console.log('🔧 Payment Flow Test Runner\n');
  
  // Check if server is running
  const BASE_URL = process.env.TEST_BASE_URL || 'http://localhost:3000';
  console.log(`Testing against: ${BASE_URL}\n`);
  
  try {
    const tester = new PaymentTester();
    await tester.runAllTests();
  } catch (error) {
    console.error('❌ Test runner failed:', error.message);
    process.exit(1);
  }
}

main();
