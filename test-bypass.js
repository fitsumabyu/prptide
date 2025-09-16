/**
 * Test script to verify the bypass token works with the main webapp
 */

import fetch from 'node-fetch';

async function testBypassToken() {
  const bypassToken = 'vPkbCrknO5hsk3Pd1ZeSWQf9yxtZmiYh';
  const webappUrl = 'https://peptide-onncyw958-bangkokteam.vercel.app';
  
  console.log('🧪 Testing bypass token with main webapp...');
  
  try {
    // First, set the bypass cookie
    const bypassUrl = `${webappUrl}/api/woocommerce/process-payment?x-vercel-set-bypass-cookie=true&x-vercel-protection-bypass=${bypassToken}`;
    
    console.log('📤 Setting bypass cookie...');
    const bypassResponse = await fetch(bypassUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ test: 'bypass' }),
      redirect: 'manual'
    });
    
    console.log('🔍 Bypass response status:', bypassResponse.status);
    console.log('🍪 Cookies:', bypassResponse.headers.get('set-cookie'));
    
    // Extract the JWT cookie
    const setCookieHeader = bypassResponse.headers.get('set-cookie');
    const jwtCookie = setCookieHeader?.match(/_vercel_jwt=([^;]+)/)?.[1];
    
    if (!jwtCookie) {
      throw new Error('No JWT cookie found in bypass response');
    }
    
    console.log('✅ JWT cookie extracted:', jwtCookie.substring(0, 50) + '...');
    
    // Now test the actual API with the JWT cookie
    const testData = {
      amount: 100,
      currency: 'USD',
      merchantAccount: 'test',
      reference: 'test123',
      card: {
        number: '4111111111111111',
        expiryMonth: '12',
        expiryYear: '2025',
        cvc: '123',
        holderName: 'Test User'
      },
      capture: true
    };
    
    console.log('📤 Testing API with JWT cookie...');
    const apiResponse = await fetch(`${webappUrl}/api/woocommerce/process-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': `_vercel_jwt=${jwtCookie}`
      },
      body: JSON.stringify(testData)
    });
    
    console.log('🔍 API response status:', apiResponse.status);
    
    if (apiResponse.ok) {
      const result = await apiResponse.json();
      console.log('✅ API call successful!');
      console.log('📄 Response:', JSON.stringify(result, null, 2));
    } else {
      const errorText = await apiResponse.text();
      console.log('❌ API call failed');
      console.log('📄 Error response:', errorText.substring(0, 500));
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testBypassToken();
