'use client';

import dynamic from 'next/dynamic';

import * as heroLottie from '@/assets/lotties/hero-lottie.json';
import { SimplePagination } from '@/components/simple-pagination/simple-pagination';
import { useHeroes } from '@/context/HeroContext';

import { HeroCard } from '../hero-card/hero-card';
import { AllHeroesProps } from './all-heroes.types';

const EmptyData = dynamic(
  () =>
    import('@/components/animation-lottie/animation-lottie').then(
      (mod) => mod.AnimationLottie,
    ),
  {
    ssr: false,
  },
);

export function AllHeroes({
  heroes,
  isLastPage,
  page,
  setPage,
}: AllHeroesProps) {
  const { onAddFavoriteHero, onRemoveFavoriteHero } = useHeroes();

  if (heroes.length === 0) {
    return (
      <div className="mt-8 h-full">
        <h1 className="text-xl font-extrabold text-sky-900 mb-6">All</h1>

        <div className="flex flex-col justify-center items-center h-full">
          <EmptyData animationData={heroLottie} size={300} />

          <p className="text-2xl mt-4 mb-8 text-sky-900 font-bold">
            No characters found...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-8">
        <h1 className="text-xl font-extrabold text-sky-900 mb-6">All</h1>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {heroes.map((hero) => (
              <HeroCard
                key={hero.id}
                hero={hero}
                onAddFavoriteHero={onAddFavoriteHero}
                onRemoveFavoriteHero={onRemoveFavoriteHero}
              />
            ))}
          </div>
        </div>
      </div>

      <SimplePagination page={page} setPage={setPage} isLastPage={isLastPage} />
    </>
  );
}
