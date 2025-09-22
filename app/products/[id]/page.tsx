'use client';

import ProductDetail from '../../../src/pages/ProductDetail';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  // In Next.js App Router, we need to create a wrapper that provides the id
  // The ProductDetail component expects useParams from react-router-dom
  // We'll need to modify this component or create a bridge
  return <ProductDetail />;
}
