'use client';

import Image from 'next/image';

import { useHeroes } from '@/context/HeroContext';

export function FilterButton() {
  const { handleToggleBottomSheetFilter } = useHeroes();

  return (
    <button
      type="button"
      onClick={handleToggleBottomSheetFilter}
      className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-blue-400"
    >
      <Image
        src="/images/search.svg"
        alt="A magnifying glass symbolizing the search button"
        title="A magnifying glass symbolizing the search button"
        aria-label="Search button"
        width={24}
        height={24}
      />
    </button>
  );
}
