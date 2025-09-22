'use client';

import Contact from '../../src/components/pages/Contact';
import { Suspense } from 'react';

// Disable static generation for this page since it uses client-side context
export const dynamic = 'force-dynamic';

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Contact />
    </Suspense>
  );
}
