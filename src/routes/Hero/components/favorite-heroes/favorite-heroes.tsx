'use client';

import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import * as heroLottie from '@/assets/lotties/hero-lottie.json';
import { Skeleton } from '@/components/ui/skeleton';
import { useHeroes } from '@/context/HeroContext';

import { HeroCard } from '../hero-card/hero-card';

const EmptyData = dynamic(
  () =>
    import('@/components/animation-lottie/animation-lottie').then(
      (mod) => mod.AnimationLottie,
    ),
  {
    ssr: false,
  },
);
export function FavoriteHeroes() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const searchParams = useSearchParams();

  const {
    favoriteHeroes,
    isLoadingFavoriteHeroes,
    onAddFavoriteHero,
    onRemoveFavoriteHero,
  } = useHeroes();

  const onlyFavorites = searchParams?.get('onlyFavorites') ?? false;

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();

    window.addEventListener('resize', updateItemsPerPage);

    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const scrollLeft = () => {
    setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const scrollRight = () => {
    if (!favoriteHeroes) {
      return;
    }

    setScrollIndex((prevIndex) =>
      Math.min(prevIndex + 1, favoriteHeroes.length - itemsPerPage),
    );
  };

  if (isLoadingFavoriteHeroes) {
    return (
      <Skeleton
        data-testid="loading-skeleton"
        className="h-[160px] rounded-2xl"
      />
    );
  }

  if (onlyFavorites && (!favoriteHeroes || favoriteHeroes.length === 0)) {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <EmptyData animationData={heroLottie} size={300} />

        <p className="text-2xl mt-4 mb-8 text-sky-900 font-bold">
          Nothing here...
        </p>
      </div>
    );
  }

  if (!favoriteHeroes || favoriteHeroes.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h1 className="text-xl font-extrabold text-sky-900 mb-6">Favorites</h1>

      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${scrollIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {favoriteHeroes.map((hero, index) => (
            <div
              key={index}
              className="flex-none px-2"
              style={{ width: `${100 / itemsPerPage}%` }}
            >
              <HeroCard
                key={hero.id}
                hero={{
                  ...hero,
                  isFavorite: true,
                }}
                onAddFavoriteHero={onAddFavoriteHero}
                onRemoveFavoriteHero={onRemoveFavoriteHero}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={scrollLeft}
          className="bg-blue-400 w-12 rounded-full text-white p-2 disabled:bg-gray-300"
          disabled={scrollIndex === 0}
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          className="bg-blue-400 w-12 text-white p-2 rounded-full disabled:bg-gray-300"
          disabled={scrollIndex === favoriteHeroes.length - itemsPerPage}
        >
          →
        </button>
      </div>
    </div>
  );
}
