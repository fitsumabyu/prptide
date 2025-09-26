'use client';

import Index from '../src/components/pages/Index';
import { Suspense } from 'react';

// Disable static generation for this page since it uses client-side context
export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading... | Laddar...</div>}>
      <Index />
    </Suspense>
  );
}
