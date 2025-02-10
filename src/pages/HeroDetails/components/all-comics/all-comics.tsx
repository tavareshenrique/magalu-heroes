'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { fetchHeroComics } from '@/repositories/fetch-hero-comics';

import { ComicCard } from '@/components/comic-card/comic-card';
import { SimplePagination } from '@/components/simple-pagination/simple-pagination';

import { AllComicsSkeleton } from './all-comics.skeleton';

import { AllComicsProps } from './all-comics.types';

import * as bookLottie from '@/assets/lotties/book-lottie.json';

const EmptyData = dynamic(
  () =>
    import('@/components/animation-lottie/animation-lottie').then(
      (mod) => mod.AnimationLottie,
    ),
  {
    ssr: false,
  },
);

export function AllComics({ heroId }: AllComicsProps) {
  const [page, setPage] = useState(0);

  const { data, isLoading } = useQuery({
    queryKey: ['hero-comics', heroId, page],
    queryFn: () =>
      fetchHeroComics({
        heroId,
        page,
      }),
    placeholderData: keepPreviousData,
  });

  if (!data || isLoading) {
    return <AllComicsSkeleton />;
  }

  if (data.comics.length === 0) {
    return (
      <div className="mt-2 h-full">
        <div className="flex flex-col justify-center items-center h-full">
          <EmptyData animationData={bookLottie} size={300} />

          <p className="text-xl mt-2 text-sky-900 font-bold text-center">
            No comics found...try another character.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.comics.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>

      <SimplePagination page={page} setPage={setPage} isLastPage={false} />
    </div>
  );
}
