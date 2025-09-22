'use client';

import ClientOnly from '../../src/components/ClientOnly';
import Products from '../../src/components/pages/ProductsNew';

// Disable static generation for this page since it uses client-side context
export const dynamic = 'force-dynamic';

export default function ProductsPage() {
  return (
    <ClientOnly fallback={<div>Loading products...</div>}>
      <Products />
    </ClientOnly>
  );
}
