'use client';

import { useState } from 'react';

import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { fetchHeroComics } from '@/repositories/fetch-hero-comics';

import { ComicCard } from '@/components/comic-card/comic-card';
import { SimplePagination } from '@/components/simple-pagination/simple-pagination';

import { AllComicsSkeleton } from './all-comics.skeleton';

import { AllComicsProps } from './all-comics.types';

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
