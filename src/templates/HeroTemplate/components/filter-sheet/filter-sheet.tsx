'use client';

import { useHeroes } from '@/context/HeroContext';
import { useEffect, useState } from 'react';

import { Sheet } from 'react-modal-sheet';

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
    >
      <Sheet.Backdrop className="bg-black/50" />
      <Sheet.Container className="bg-white rounded-t-2xl shadow-lg p-4">
        <Sheet.Header className="flex justify-center py-2">
          <div className="w-12 h-1.5 bg-gray-400 rounded-full" />
        </Sheet.Header>
        <Sheet.Content className="p-4">
          <h1 className="text-lg font-semibold text-gray-800">Olá</h1>
          <p className="text-gray-600 mt-2">
            Este é um bottom sheet estilizado com Tailwind.
          </p>
          <button
            onClick={() => {}}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Fechar
          </button>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
