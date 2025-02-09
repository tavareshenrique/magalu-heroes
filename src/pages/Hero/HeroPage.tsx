'use client';

import { useState } from 'react';

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
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState('name');

  const { data, isLoading } = useQuery({
    queryKey: ['heroes', page, orderBy],
    queryFn: () =>
      fetchHeroes({
        page,
        orderBy,
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

        <AllHeroes heroes={data} />

        <div className="md:my-2 p-4 flex my-8">
          <Pagination className="cursor-pointer">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={() => setPage(page - 1)} />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext onClick={() => setPage(page + 1)} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <FilterSheet />
      </div>
    </>
  );
}
