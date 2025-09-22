'use client';

import RefundPolicy from '../../src/components/pages/RefundPolicy';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default function RefundPolicyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RefundPolicy />
    </Suspense>
  );
}
