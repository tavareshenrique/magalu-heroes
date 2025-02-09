'use client';

import { HeroCard } from '@/components/hero-card/hero-card';

import { AllHeroesProps } from './all-heroes.types';
import { useHeroes } from '@/context/HeroContext';

export function AllHeroes({ heroes }: AllHeroesProps) {
  const { onAddFavoriteHero, onRemoveFavoriteHero } = useHeroes();

  return (
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
  );
}
