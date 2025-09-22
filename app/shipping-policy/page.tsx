'use client';

import ShippingPolicy from '../../src/components/pages/ShippingPolicy';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default function ShippingPolicyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShippingPolicy />
    </Suspense>
  );
}
