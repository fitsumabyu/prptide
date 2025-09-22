'use client';

import Terms from '../../src/components/pages/Terms';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default function TermsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Terms />
    </Suspense>
  );
}
