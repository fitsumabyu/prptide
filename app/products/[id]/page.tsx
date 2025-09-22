'use client';

import ProductDetail from '../../../src/components/pages/ProductDetail';
import { Suspense } from 'react';

// Disable static generation for this page since it uses client-side context
export const dynamic = 'force-dynamic';

export default function ProductDetailPage() {
  return (
    <Suspense fallback={<div>Loading product...</div>}>
      <ProductDetail />
    </Suspense>
  );
}
