'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { FavoriteButtonVariants } from './favorite-button.style';

import { FavoriteButtonProps } from './favorite-button.types';

export function FavoriteButton({
  hero,
  reset = false,
  onAddFavoriteHero,
  onRemoveFavoriteHero,
}: FavoriteButtonProps) {
  const [isExploding, setIsExploding] = useState(false);
  const [isHeroFavorite, setIsHeroFavorite] = useState(
    hero.isFavorite ?? false,
  );

  const [likeAudio] = useState(() => new Audio('/sound/like.wav'));

  const explodeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function playLikeSound() {
    likeAudio.currentTime = 0;
    likeAudio.play();
  }

  function handleMarkAsFavorite() {
    if (isHeroFavorite) {
      setIsHeroFavorite(false);
      onRemoveFavoriteHero(hero);

      return;
    }

    playLikeSound();

    setIsExploding(true);
    setIsHeroFavorite(true);

    onAddFavoriteHero(hero);

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
      className={`group relative ${FavoriteButtonVariants({ isFavorite: isHeroFavorite, reset })} ${!reset ? 'bottom-6' : ''}`}
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
