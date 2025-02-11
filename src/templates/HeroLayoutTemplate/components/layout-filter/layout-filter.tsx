'use client';

import { usePathname } from 'next/navigation';
import { Suspense } from 'react';

import { Filter } from '@/components/filter/filter';

export function LayoutFilter() {
  const pathname = usePathname();
  const isHeroDetailPage = /^\/hero\/\d+$/.test(pathname || '');

  if (isHeroDetailPage) {
    return null;
  }

  return (
    <div className="md:block p-14 hidden">
      <h1 className="text-2xl font-extrabold text-white mb-6">Filters</h1>
      <Suspense>
        <Filter />
      </Suspense>
    </div>
  );
}
