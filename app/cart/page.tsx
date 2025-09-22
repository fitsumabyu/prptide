'use client';

import ClientOnly from '../../src/components/ClientOnly';
import Cart from '../../src/components/pages/Cart';

// Disable static generation for this page since it uses client-side context
export const dynamic = 'force-dynamic';

export default function CartPage() {
  return (
    <ClientOnly fallback={<div>Loading cart...</div>}>
      <Cart />
    </ClientOnly>
  );
}
