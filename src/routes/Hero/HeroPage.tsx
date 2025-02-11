'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { fetchHeroes } from '@/repositories/fetch-heroes';

import { AllHeroes } from './components/all-heroes/all-heroes';
import { FavoriteHeroes } from './components/favorite-heroes/favorite-heroes';
import { FilterButton } from './components/filter-button/filter-button';
import { FilterSheet } from './components/filter-sheet/filter-sheet';
import { HeroLoading } from './components/hero-loading/hero-loading';
import { SortHeroes } from './components/sort-heroes/sort-heroes';

export function HeroPage() {
  const searchParams = useSearchParams();

  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState('name');

  const characterName = searchParams?.get('characterName') || null;
  const onlyFavorites = searchParams?.get('onlyFavorites') ?? false;

  const { data, isLoading } = useQuery({
    queryKey: ['heroes', page, orderBy, characterName],
    queryFn: () =>
      fetchHeroes({
        page,
        orderBy,
        byName: characterName,
      }),
    placeholderData: keepPreviousData,
  });

  if (!data || isLoading) {
    return <HeroLoading />;
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
          <AllHeroes
            heroes={data.heroes}
            page={page}
            isLastPage={data.isLastPage}
            setPage={setPage}
          />
        )}

        <FilterSheet />
      </div>
    </div>
  );
}
