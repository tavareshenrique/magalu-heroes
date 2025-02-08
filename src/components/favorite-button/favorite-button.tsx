'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { useFavoriteHeroes } from '@/context/HeroContext';

import { Hero } from '../hero-card/hero-card.types';

import { FavoriteButtonVariants } from './favorite-button.style';

interface FavoriteButtonProps {
  hero: Hero;
}

export function FavoriteButton({ hero }: FavoriteButtonProps) {
  const [isExploding, setIsExploding] = useState(false);
  const [isHeroFavorite, setIsHeroFavorite] = useState(
    hero.isFavorite ?? false,
  );

  const explodeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { onAddFavoriteHero, onRemoveFavoriteHero } = useFavoriteHeroes();

  function handleMarkAsFavorite() {
    if (isHeroFavorite) {
      onRemoveFavoriteHero(hero);

      return;
    }

    onAddFavoriteHero(hero);

    setIsExploding(true);
    setIsHeroFavorite(true);

    explodeRef.current = setTimeout(() => {
      setIsExploding(false);
    }, 1000);
  }

  useEffect(() => {
    return () => {
      if (explodeRef.current) {
        clearTimeout(explodeRef.current);
      }
    };
  }, []);

  return (
    <button
      className={`group ${FavoriteButtonVariants({ isFavorite: isHeroFavorite })}`}
      onClick={handleMarkAsFavorite}
    >
      <div className="max-[1440px]:w-4 max-[1440px]:h-4 relative w-6 h-6">
        <Image
          src="/images/fav-full.png"
          alt="A heart symbolizing the favorite button"
          title="A heart symbolizing the favorite button"
          aria-label="Favorite button"
          fill
          className={`transition-opacity duration-200 ${
            isHeroFavorite ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        />

        <Image
          src="/images/fav-empty.png"
          alt="A heart symbolizing the favorite button"
          title="A heart symbolizing the favorite button"
          aria-label="Favorite button"
          fill
          className={`absolute top-0 left-0 transition-opacity duration-200 ${
            isHeroFavorite ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
          }`}
        />
      </div>

      {isExploding && (
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="absolute text-red-500 text-sm explode explode-1">
            ❤️
          </div>
          <div className="absolute text-red-500 text-sm explode explode-2">
            ❤️
          </div>
          <div className="absolute text-red-500 text-sm explode explode-3">
            ❤️
          </div>
        </div>
      )}
    </button>
  );
}
