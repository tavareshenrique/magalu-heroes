'use client';

import { useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { fetchHeroes } from '@/repositories/fetch-heroes';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { FavoriteHeroes } from './components/favorite-heroes/favorite-heroes';
import { AllHeroes } from './components/all-heroes/all-heroes';
import { FilterSheet } from './components/filter-sheet/filter-sheet';
import { FilterButton } from './components/filter-button/filter-button';
import { SortHeroes } from './components/sort-heroes/sort-heroes';
import { LoadingHeroes } from './components/loading-heroes/loading-heroes';

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
    <>
      <div className="h-full">
        <div className="flex flex-row-reverse justify-between">
          <SortHeroes onChange={setOrderBy} value={orderBy} />

          <FilterButton />
        </div>

        <FavoriteHeroes />

        {!onlyFavorites && (
          <>
            <AllHeroes heroes={data.heroes} />

            <div className="md:my-2 p-4 flex my-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      className="cursor-pointer disabled:cursor-not-allowed"
                      disabled={page === 0}
                      onClick={() => setPage(page - 1)}
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      className="cursor-pointer disabled:cursor-not-allowed"
                      disabled={data.isLastPage}
                      onClick={() => setPage(page + 1)}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </>
        )}

        <FilterSheet />
      </div>
    </>
  );
}
