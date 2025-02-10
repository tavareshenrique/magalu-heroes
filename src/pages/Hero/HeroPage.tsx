'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import { useSearchParams } from 'next/navigation';

import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { fetchHeroes } from '@/repositories/fetch-heroes';

import { SimplePagination } from '@/components/simple-pagination/simple-pagination';

import { FavoriteHeroes } from './components/favorite-heroes/favorite-heroes';
import { AllHeroes } from './components/all-heroes/all-heroes';
import { FilterSheet } from './components/filter-sheet/filter-sheet';
import { FilterButton } from './components/filter-button/filter-button';
import { SortHeroes } from './components/sort-heroes/sort-heroes';

const LoadingHeroes = dynamic(
  () =>
    import('./components/loading-heroes/loading-heroes').then(
      (mod) => mod.LoadingHeroes,
    ),
  {
    ssr: false,
  },
);

export function HeroPage() {
  const searchParams = useSearchParams();

  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState('name');

  const heroName = searchParams?.get('heroName') || null;
  const onlyFavorites = searchParams?.get('onlyFavorites') ?? false;

  const { data, isLoading } = useQuery({
    queryKey: ['heroes', page, orderBy, heroName],
    queryFn: () =>
      fetchHeroes({
        page,
        orderBy,
        byName: heroName,
      }),
    placeholderData: keepPreviousData,
  });

  if (!data || isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <LoadingHeroes />
        <p className="text-2xl mt-4">Loading...</p>
      </div>
    );
  }

  return (
    <div className="md:px-14 md:mt-10 mt-4 px-6">
      <div className="h-full">
        <div className="flex flex-row-reverse justify-between">
          <SortHeroes onChange={setOrderBy} value={orderBy} />

          <FilterButton />
        </div>

        <FavoriteHeroes />

        {!onlyFavorites && (
          <>
            <AllHeroes heroes={data.heroes} />

            <SimplePagination
              page={page}
              setPage={setPage}
              isLastPage={data.isLastPage}
            />
          </>
        )}

        <FilterSheet />
      </div>
    </div>
  );
}
