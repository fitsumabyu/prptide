const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function viewProducts() {
  try {
    console.log('🔍 Fetching products from database...\n');
    
    const products = await prisma.product.findMany({
      include: {
        cartItems: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    if (products.length === 0) {
      console.log('❌ No products found in the database.');
      return;
    }

    console.log(`✅ Found ${products.length} products in the database:\n`);
    console.log('=' .repeat(80));
    
    products.forEach((product, index) => {
      console.log(`\n📦 Product ${index + 1}:`);
      console.log(`   ID: ${product.id}`);
      console.log(`   Name: ${product.name}`);
      console.log(`   Description: ${product.description}`);
      console.log(`   Purity: ${product.purity}`);
      console.log(`   Price: $${product.price}`);
      console.log(`   Image: ${product.image}`);
      console.log(`   CAS: ${product.cas}`);
      console.log(`   Size: ${product.size}`);
      console.log(`   Storage: ${product.storage}`);
      console.log(`   Created: ${product.createdAt.toISOString()}`);
      console.log(`   Cart Items: ${product.cartItems.length}`);
      
      if (product.cartItems.length > 0) {
        console.log(`   Cart Details:`);
        product.cartItems.forEach((item, itemIndex) => {
          console.log(`     - Item ${itemIndex + 1}: Quantity ${item.quantity} (Added: ${item.createdAt.toISOString()})`);
        });
      }
      console.log('-'.repeat(60));
    });

    console.log(`\n📊 Summary:`);
    console.log(`   Total Products: ${products.length}`);
    console.log(`   Total Cart Items: ${products.reduce((sum, p) => sum + p.cartItems.length, 0)}`);
    
    // Show unique categories if they exist
    const categories = [...new Set(products.map(p => p.name.split(' ')[0]))];
    console.log(`   Product Types: ${categories.join(', ')}`);

  } catch (error) {
    console.error('❌ Error fetching products:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the function
viewProducts();
