'use client';

import Checkout from '../../src/components/pages/Checkout';
import { Suspense } from 'react';

// Disable static generation for this page since it uses client-side context
export const dynamic = 'force-dynamic';

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <Checkout />
    </Suspense>
  );
}
