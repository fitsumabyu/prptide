#!/usr/bin/env node

/**
 * Three-Tier Payment Flow Demo
 * Demonstrates: WooCommerce Plugin C → Webapp B → Payment Processor A
 */

const BASE_URLS = {
  woocommerce: 'https://woocommerce-jade.vercel.app',
  webapp: 'https://www.protidelab.com',
  processor: 'https://processor-six.vercel.app'
};

class ThreeTierDemo {
  constructor() {
    this.results = [];
  }

  async makeRequest(url, data, headers = {}) {
    try {
      console.log(`📤 Making request to: ${url}`);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      console.log(`📥 Response (${response.status}):`, JSON.stringify(result, null, 2));
      
      return { status: response.status, data: result };
    } catch (error) {
      console.error(`❌ Request failed:`, error.message);
      return { status: 500, data: { error: error.message } };
    }
  }

  async testDirectProcessor() {
    console.log('\n🧪 Testing Direct Processor Access...');
    
    const testPayment = {
      amount: 2999,
      currency: 'USD',
      merchantAccount: 'test_merchant',
      reference: `DIRECT_TEST_${Date.now()}`,
      card: {
        number: '4111111111111111',
        expiryMonth: '12',
        expiryYear: '2025',
        cvc: '123',
        holderName: 'Test User'
      },
      capture: true
    };

    const result = await this.makeRequest(
      `${BASE_URLS.processor}/api/payments/authorize`,
      testPayment
    );

    this.results.push({ test: 'Direct Processor', result });
    return result.data;
  }

  async testWooCommerceFlow() {
    console.log('\n🛒 Testing Complete WooCommerce Flow...');
    
    const testOrder = {
      orderId: `WOO_${Date.now()}`,
      customer: {
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Test Street',
        city: 'Test City',
        postalCode: '12345',
        country: 'US'
      },
      items: [
        {
          name: 'Test Product',
          quantity: 1,
          price: 29.99
        }
      ],
      total: 29.99,
      currency: 'USD'
    };

    const result = await this.makeRequest(
      `${BASE_URLS.woocommerce}/api/orders/create`,
      testOrder
    );

    this.results.push({ test: 'WooCommerce Flow', result });
    return result.data;
  }

  async testWebhookFlow() {
    console.log('\n📡 Testing Webhook Flow...');
    
    const webhookData = {
      eventType: 'payment.authorized',
      data: {
        transactionId: `webhook_test_${Date.now()}`,
        status: 'authorized',
        amount: 2999,
        currency: 'USD',
        reference: `WEBHOOK_TEST_${Date.now()}`
      },
      webhookUrl: `${BASE_URLS.webapp}/api/webhooks/processor`
    };

    const result = await this.makeRequest(
      `${BASE_URLS.processor}/api/webhooks/send`,
      webhookData
    );

    this.results.push({ test: 'Webhook Flow', result });
    return result.data;
  }

  async runDemo() {
    console.log('🚀 Starting Three-Tier Payment Flow Demo\n');
    console.log('Architecture: WooCommerce C → Webapp B → Processor A\n');
    
    console.log('URLs:');
    console.log(`  WooCommerce C: ${BASE_URLS.woocommerce}`);
    console.log(`  Webapp B:      ${BASE_URLS.webapp}`);
    console.log(`  Processor A:   ${BASE_URLS.processor}\n`);

    // Test 1: Direct processor access
    await this.testDirectProcessor();
    
    // Wait a bit between tests
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Test 2: Complete WooCommerce flow
    await this.testWooCommerceFlow();
    
    // Wait a bit between tests
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Test 3: Webhook flow
    await this.testWebhookFlow();

    // Summary
    console.log('\n📊 Demo Summary:');
    console.log('================');
    
    this.results.forEach(({ test, result }) => {
      const status = result.status === 200 ? '✅ PASS' : '❌ FAIL';
      console.log(`${status} ${test}`);
      if (result.status !== 200) {
        console.log(`   Error: ${JSON.stringify(result.data)}`);
      }
    });

    const passed = this.results.filter(r => r.result.status === 200).length;
    const total = this.results.length;
    console.log(`\n📈 Success Rate: ${passed}/${total} (${((passed/total)*100).toFixed(1)}%)`);
    
    if (passed === total) {
      console.log('\n🎉 All tests passed! The three-tier payment system is working!');
    } else {
      console.log('\n⚠️  Some tests failed. Check the logs above for details.');
    }
  }
}

// Run the demo
async function main() {
  try {
    const demo = new ThreeTierDemo();
    await demo.runDemo();
  } catch (error) {
    console.error('❌ Demo failed:', error.message);
    process.exit(1);
  }
}

main();
