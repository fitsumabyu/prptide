'use client';

import About from '../../src/components/pages/About';
import { Suspense } from 'react';

// Disable static generation for this page since it uses client-side context
export const dynamic = 'force-dynamic';

export default function AboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <About />
    </Suspense>
  );
}
