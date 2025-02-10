'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import { useSearchParams } from 'next/navigation';

import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { fetchHeroes } from '@/repositories/fetch-heroes';

import { FavoriteHeroes } from './components/favorite-heroes/favorite-heroes';
import { AllHeroes } from './components/all-heroes/all-heroes';
import { FilterSheet } from './components/filter-sheet/filter-sheet';
import { FilterButton } from './components/filter-button/filter-button';
import { SortHeroes } from './components/sort-heroes/sort-heroes';

import * as loadingLottie from '@/assets/lotties/loading-lottie.json';

const LoadingHeroes = dynamic(
  () =>
    import('@/components/animation-lottie/animation-lottie').then(
      (mod) => mod.AnimationLottie,
    ),
  {
    ssr: false,
  },
);

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
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <LoadingHeroes animationData={loadingLottie} />
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
