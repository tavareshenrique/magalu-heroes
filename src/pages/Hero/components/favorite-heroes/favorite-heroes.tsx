'use client';

import { useEffect, useState } from 'react';

import { HeroCard } from '@/components/hero-card/hero-card';
import { Skeleton } from '@/components/ui/skeleton';
import { useHeroes } from '@/context/HeroContext';

export function FavoriteHeroes() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const {
    favoriteHeroes,
    isLoadingFavoriteHeroes,
    onAddFavoriteHero,
    onRemoveFavoriteHero,
  } = useHeroes();

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
    return <Skeleton className="h-[160px] rounded-2xl" />;
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
                onAddFavoriteHero={onAddFavoriteHero}
                onRemoveFavoriteHero={onRemoveFavoriteHero}
                hero={{
                  name: hero.name,
                  description: hero.description,
                  id: hero.id,
                  thumbnail: hero.thumbnail,
                  isFavorite: true,
                }}
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
          disabled={scrollIndex >= favoriteHeroes.length - itemsPerPage}
        >
          →
        </button>
      </div>
    </div>
  );
}
