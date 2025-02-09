'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

import { FavoriteButton } from '../favorite-button/favorite-button';

import { HeroCardProps } from './hero-card.types';

export function HeroCard({
  hero,
  onAddFavoriteHero,
  onRemoveFavoriteHero,
}: HeroCardProps) {
  return (
    <div className="max-[1440px]:h-[112px] bg-gray-200 rounded-2xl h-[160px] w-full flex justify-center items-center">
      <div className="flex flex-row items-start justify-between h-full">
        <div className="relative p-4 flex-shrink-0">
          <Image
            src={hero.thumbnail}
            alt={hero.name}
            width={121}
            height={121}
            className="rounded-2xl w-[100px] h-[100px] max-[1440px]:w-[80px] max-[1440px]:h-[80px]"
            quality={100}
          />

          <FavoriteButton
            hero={hero}
            onAddFavoriteHero={onAddFavoriteHero}
            onRemoveFavoriteHero={onRemoveFavoriteHero}
          />
        </div>

        <div className="flex flex-col py-4 flex-">
          <h2 className="max-[1440px]:text-sm text-base font-bold">
            {hero.name}
          </h2>
          <p className="max-[1440px]:text-xs max-[1440px]:line-clamp-3 text-sm line-clamp-4">
            {hero.description}
          </p>
        </div>

        <div className="flex flex-col p-4">
          <Link href={`/hero/${hero.id}`}>
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
