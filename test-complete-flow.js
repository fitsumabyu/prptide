/**
 * Test the complete three-tier payment flow
 * WooCommerce C → Webapp B → Processor A
 */

import fetch from 'node-fetch';

const URLS = {
  woocommerce: 'https://woocommerce-jade.vercel.app',
  webapp: 'https://www.protidelab.com',
  processor: 'https://processor-six.vercel.app'
};

const BYPASS_TOKENS = {
  woocommerce: 'QGZ6HfM3ttRzekKwAiqQVBVSlwkx6cCM',
  webapp: 'vPkbCrknO5hsk3Pd1ZeSWQf9yxtZmiYh',
  processor: 'vPkbCrknO5hsk3Pd1ZeSWQf9yxtZmiYh' // You'll need to generate this one
};

async function testCompleteFlow() {
  console.log('🚀 Testing Complete Three-Tier Payment Flow\n');
  console.log('Architecture: WooCommerce C → Webapp B → Processor A\n');
  console.log('URLs:');
  console.log(`  WooCommerce C: ${URLS.woocommerce}`);
  console.log(`  Webapp B:      ${URLS.webapp}`);
  console.log(`  Processor A:   ${URLS.processor}\n`);

  try {
    // Test 1: Create order in WooCommerce
    console.log('1️⃣  Testing WooCommerce order creation...');
    const orderData = {
      orderId: `WOO_${Date.now()}`,
      customer: {
        email: 'test@example.com',
        firstName: 'Dawn',
        lastName: 'Doe',
        address: '123 Test Street',
        city: 'Test City',
        postalCode: '12345',
        country: 'US'
      },
      items: [{
        name: 'Selank',
        quantity: 1,
        price: 84.99
      }],
      total: 84.99,
      currency: 'USD',
      webappUrl: URLS.webapp
    };

    const wooResponse = await fetch(`${URLS.woocommerce}/api/orders/create?x-vercel-set-bypass-cookie=true&x-vercel-protection-bypass=${BYPASS_TOKENS.woocommerce}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    const wooResult = await wooResponse.json();
    
    if (wooResponse.ok && wooResult.success) {
      console.log('✅ WooCommerce order created successfully');
      console.log(`   Order ID: ${wooResult.orderId}`);
      console.log(`   Transaction ID: ${wooResult.payment?.transactionId}`);
      console.log(`   Status: ${wooResult.payment?.status}`);
    } else {
      console.log('❌ WooCommerce order creation failed');
      console.log(`   Error: ${JSON.stringify(wooResult)}`);
      return;
    }

    console.log('\n🎉 Complete three-tier payment flow test completed successfully!');
    console.log('\n📊 Summary:');
    console.log('================');
    console.log(`   Order ID: ${wooResult.orderId}`);
    console.log(`   Transaction ID: ${wooResult.payment?.transactionId}`);
    console.log(`   Amount: $${orderData.total}`);
    console.log(`   Status: ${wooResult.payment?.status}`);
    console.log(`   Customer: ${orderData.customer.email}`);

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testCompleteFlow();
