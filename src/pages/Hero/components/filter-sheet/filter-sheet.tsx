'use client';

import { useEffect, useState } from 'react';

import { Sheet } from 'react-modal-sheet';

import { useHeroes } from '@/context/HeroContext';

import { Filter } from '@/components/filter/filter';

export function FilterSheet() {
  const [isMounted, setIsMounted] = useState(false);

  const { handleToggleBottomSheetFilter, isBottomSheetFilterOpen } =
    useHeroes();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet
      isOpen={isBottomSheetFilterOpen}
      onClose={handleToggleBottomSheetFilter}
      aria-label="Filter"
      aria-description="Filter the characters"
    >
      <Sheet.Backdrop className="bg-black/50" />

      <Sheet.Container className="bg-sky-550 rounded-t-2xl shadow-lg h-[50vh] max-h-[400px]">
        <Sheet.Header className="flex justify-center py-2 bg-sky-550">
          <div className="w-12 h-1.5 bg-white rounded-full" />
        </Sheet.Header>

        <Sheet.Content className="p-6 bg-sky-550 flex flex-col items-center justify-start">
          <h1 className="text-lg font-extrabold text-white">Filter</h1>

          <div>
            <Filter />
          </div>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
