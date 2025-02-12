'use client';

import { useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { useState } from 'react';

import * as bookLottie from '@/assets/lotties/book-lottie.json';
import { SimplePagination } from '@/components/simple-pagination/simple-pagination';
import { Dialog } from '@/components/ui/dialog';
import { fetchHeroComics } from '@/repositories/fetch-hero-comics';
import { Comic } from '@/types/global.types';

import { AllComicsSkeleton } from '../all-comics-skeleton/all-comics-skeleton';
import { ComicCard } from '../comic-card/comic-card';
import { ComicDialog } from '../comic-dialog/comic-dialog';
import { AllComicsProps } from './all-comics.types';

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
  const [selectedComic, setSelectedComic] = useState<Comic | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ['hero-comics', heroId, page],
    queryFn: () =>
      fetchHeroComics({
        heroId,
        page,
      }),
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
    <Dialog>
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.comics.map((comic) => (
            <ComicCard
              key={comic.id}
              comic={comic}
              onSetSelectedComic={setSelectedComic}
            />
          ))}
        </div>

        <SimplePagination
          page={page}
          setPage={setPage}
          isLastPage={data.isLastPage}
        />
      </div>

      {selectedComic && <ComicDialog comic={selectedComic} />}
    </Dialog>
  );
}
