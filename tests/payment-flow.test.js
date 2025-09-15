/**
 * Payment Flow Test Suite
 * Tests the complete payment processing flow including authorization, capture, refund, and 3DS
 */

const BASE_URL = process.env.TEST_BASE_URL || 'http://localhost:3000';

// Test card data (use test cards from your processor)
const TEST_CARDS = {
  visa: {
    number: '4111111111111111',
    expiryMonth: '12',
    expiryYear: '2025',
    cvc: '123',
    holderName: 'Test User'
  },
  mastercard: {
    number: '5555555555554444',
    expiryMonth: '12',
    expiryYear: '2025',
    cvc: '123',
    holderName: 'Test User'
  },
  threeDS: {
    number: '4000000000000002', // 3DS test card
    expiryMonth: '12',
    expiryYear: '2025',
    cvc: '123',
    holderName: 'Test User'
  }
};

const TEST_ORDER = {
  amount: 2999, // $29.99 in cents
  currency: 'USD',
  merchantAccount: process.env.PROCESSOR_MERCHANT_ID || 'test_merchant',
  reference: `TEST_${Date.now()}`,
  billingAddress: {
    street: '123 Test Street',
    city: 'Test City',
    postalCode: '12345',
    country: 'US'
  },
  customer: {
    email: 'test@example.com',
    firstName: 'Test',
    lastName: 'User'
  }
};

class PaymentTester {
  constructor() {
    this.results = [];
  }

  async makeRequest(endpoint, data) {
    try {
      const response = await fetch(`${BASE_URL}/api${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      return { status: response.status, data: result };
    } catch (error) {
      return { status: 500, data: { error: error.message } };
    }
  }

  log(testName, result) {
    const status = result.status === 200 ? '✅ PASS' : '❌ FAIL';
    console.log(`${status} ${testName}`);
    if (result.status !== 200) {
      console.log(`   Error: ${JSON.stringify(result.data)}`);
    }
    this.results.push({ testName, result });
  }

  async testBasicAuthorization() {
    console.log('\n🧪 Testing Basic Payment Authorization...');
    
    const result = await this.makeRequest('/payments/authorize', {
      ...TEST_ORDER,
      card: TEST_CARDS.visa,
      capture: false
    });

    this.log('Basic Authorization', result);
    return result.data;
  }

  async testAuthorizationWithCapture() {
    console.log('\n🧪 Testing Authorization with Capture...');
    
    const result = await this.makeRequest('/payments/authorize', {
      ...TEST_ORDER,
      card: TEST_CARDS.mastercard,
      capture: true
    });

    this.log('Authorization with Capture', result);
    return result.data;
  }

  async testThreeDSAuthorization() {
    console.log('\n🧪 Testing 3DS Authorization...');
    
    const result = await this.makeRequest('/payments/authorize', {
      ...TEST_ORDER,
      card: TEST_CARDS.threeDS,
      capture: false,
      threeDS: {
        returnUrl: `${BASE_URL}/api/payments/3ds/callback`
      }
    });

    this.log('3DS Authorization', result);
    return result.data;
  }

  async testCapture(transactionId) {
    console.log('\n🧪 Testing Payment Capture...');
    
    const result = await this.makeRequest('/payments/capture', {
      transactionId
    });

    this.log('Payment Capture', result);
    return result.data;
  }

  async testPartialRefund(transactionId) {
    console.log('\n🧪 Testing Partial Refund...');
    
    const result = await this.makeRequest('/payments/refund', {
      transactionId,
      amount: 1000, // $10.00 refund
      reason: 'Customer request'
    });

    this.log('Partial Refund', result);
    return result.data;
  }

  async testFullRefund(transactionId) {
    console.log('\n🧪 Testing Full Refund...');
    
    const result = await this.makeRequest('/payments/refund', {
      transactionId,
      reason: 'Customer request'
    });

    this.log('Full Refund', result);
    return result.data;
  }

  async testWebhookSignature() {
    console.log('\n🧪 Testing Webhook Signature Verification...');
    
    const testPayload = JSON.stringify({
      eventType: 'payment.authorized',
      data: { transactionId: 'test_123' }
    });

    // This would need to be implemented with proper signature generation
    // For now, we'll just test the endpoint exists
    try {
      const response = await fetch(`${BASE_URL}/api/webhooks/processor`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-signature': 'test_signature'
        },
        body: testPayload,
      });

      const result = await response.json();
      this.log('Webhook Endpoint', { status: response.status, data: result });
    } catch (error) {
      this.log('Webhook Endpoint', { status: 500, data: { error: error.message } });
    }
  }

  async testIdempotency() {
    console.log('\n🧪 Testing Idempotency...');
    
    const requestData = {
      ...TEST_ORDER,
      card: TEST_CARDS.visa,
      capture: false
    };

    // Make the same request twice
    const result1 = await this.makeRequest('/payments/authorize', requestData);
    const result2 = await this.makeRequest('/payments/authorize', requestData);

    const isIdempotent = result1.data.transactionId === result2.data.transactionId;
    this.log('Idempotency Test', { 
      status: isIdempotent ? 200 : 400, 
      data: { 
        idempotent: isIdempotent,
        transactionId1: result1.data.transactionId,
        transactionId2: result2.data.transactionId
      } 
    });
  }

  async runAllTests() {
    console.log('🚀 Starting Payment Flow Tests...\n');
    console.log(`Base URL: ${BASE_URL}`);
    console.log(`Test Order Reference: ${TEST_ORDER.reference}\n`);

    // Test basic authorization
    const authResult = await this.testBasicAuthorization();
    
    // Test authorization with capture
    await this.testAuthorizationWithCapture();
    
    // Test 3DS authorization
    await this.testThreeDSAuthorization();
    
    // Test capture if we have a transaction ID
    if (authResult && authResult.transactionId) {
      await this.testCapture(authResult.transactionId);
      await this.testPartialRefund(authResult.transactionId);
      await this.testFullRefund(authResult.transactionId);
    }
    
    // Test webhook
    await this.testWebhookSignature();
    
    // Test idempotency
    await this.testIdempotency();

    // Summary
    console.log('\n📊 Test Summary:');
    const passed = this.results.filter(r => r.result.status === 200).length;
    const failed = this.results.filter(r => r.result.status !== 200).length;
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📈 Success Rate: ${((passed / this.results.length) * 100).toFixed(1)}%`);
  }
}

// Run tests if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const tester = new PaymentTester();
  tester.runAllTests().catch(console.error);
}

export default PaymentTester;
