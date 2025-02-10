'use client';

import { usePathname } from 'next/navigation';

import { Filter } from '../filter/filter';

export function NavFilter() {
  const pathname = usePathname();

  const isHeroDetailPage = /^\/hero\/\d+$/.test(pathname!);

  return (
    <div
      className={`md:block p-14 hidden ${isHeroDetailPage && 'hidden md:hidden'}`}
    >
      <h1 className="text-2xl font-extrabold text-white mb-6">Filters</h1>

      <Filter />
    </div>
  );
}
