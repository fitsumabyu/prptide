import { NextRequest, NextResponse } from 'next/server';
import { getProducts, getProductById, getProductsByCategory } from '../../../src/data/protidelabproducts-db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const category = searchParams.get('category');

    if (id) {
      // Get single product by ID
      const product = await getProductById(id);
      if (product) {
        return NextResponse.json(product);
      } else {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      }
    } else if (category) {
      // Get products by category
      const products = await getProductsByCategory(category);
      return NextResponse.json(products);
    } else {
      // Get all products
      const products = await getProducts();
      return NextResponse.json(products);
    }
  } catch (error) {
    console.error('Error in products API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
