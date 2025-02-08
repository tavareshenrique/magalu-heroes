'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

import { FavoriteButton } from '../favorite-button/favorite-button';

import { HeroCardProps } from './hero-card.types';

export function HeroCard({ hero }: HeroCardProps) {
  return (
    <div className="bg-gray-200 rounded-2xl h-[160px] w-full flex justify-center items-center">
      <div className="flex flex-row items-start justify-between h-full">
        <div className="relative p-4 flex-shrink-0">
          <Image
            src={hero.thumbnail}
            alt={hero.name}
            width={121}
            height={121}
            className="rounded-2xl"
            quality={100}
          />

          <FavoriteButton hero={hero} />
        </div>

        <div className="flex flex-col py-4 flex-">
          <h2 className="text-lg font-bold">{hero.name}</h2>
          <p className="text-sm line-clamp-5">{hero.description}</p>
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
