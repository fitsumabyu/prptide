'use client';

import Shipping from '../../src/components/pages/Shipping';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default function ShippingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Shipping />
    </Suspense>
  );
}
