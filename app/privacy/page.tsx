'use client';

import Privacy from '../../src/components/pages/Privacy';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default function PrivacyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Privacy />
    </Suspense>
  );
}
