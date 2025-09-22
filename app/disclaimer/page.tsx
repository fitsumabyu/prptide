'use client';

import Disclaimer from '../../src/components/pages/Disclaimer';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default function DisclaimerPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Disclaimer />
    </Suspense>
  );
}
