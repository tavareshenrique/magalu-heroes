'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import { ChevronLeft } from 'lucide-react';

import { fetchHeroDetails } from '@/repositories/fetch-hero-details';

import { useHeroes } from '@/context/HeroContext';

import { FavoriteButton } from '@/components/favorite-button/favorite-button';

import { HeroDetailsPageProps } from './HeroDetailsPage.types';

export function HeroDetailsPage({ heroId }: HeroDetailsPageProps) {
  const { onAddFavoriteHero, onRemoveFavoriteHero } = useHeroes();

  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ['hero-details', heroId],
    queryFn: () =>
      fetchHeroDetails({
        heroId,
      }),
  });

  function getMagaluLink() {
    if (!data) {
      return '';
    }

    const formatHeroName = data?.hero.name.replace(/\s|-/g, '+');

    return `https://www.magazineluiza.com.br/busca/${formatHeroName}/?from=submit`;
  }

  if (!data || isLoading) {
    return null;
  }

  return (
    <div>
      <button
        type="button"
        className="flex items-center"
        onClick={() => router.back()}
      >
        <ChevronLeft size={24} strokeWidth={3} />
      </button>

      <div className="flex flex-row mt-10">
        <Image
          src={data.hero.thumbnail}
          alt={data.hero.name}
          width={200}
          height={200}
          quality={100}
          className="rounded-2xl"
        />

        <div className="flex flex-col ml-4 w-full">
          <h1 className="text-4xl font-extrabold text-black">
            {data.hero.name}
          </h1>

          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-sky-900 text-base mr-4 mt-2 line-clamp-6">
              {data.hero.description}
            </p>

            <FavoriteButton
              hero={data.hero}
              onAddFavoriteHero={onAddFavoriteHero}
              onRemoveFavoriteHero={onRemoveFavoriteHero}
              reset
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-row items-center justify-start">
        <Image
          src="/images/magazine-luiza.webp"
          alt="Lu da Magalu"
          width={48}
          height={48}
          className="rounded-full mr-2"
          quality={100}
        />

        <p className="text-sky-900 text-base font-semibold">
          See some offers for this character at{' '}
          <a
            href={getMagaluLink()}
            target="_blank"
            rel="noreferrer"
            className="text-sky-550 underline text-xl hover:text-sky-900"
          >
            Magalu.
          </a>
        </p>
      </div>

      <h2 className="text-2xl font-bold text-sky-900 mt-10">
        Some of his works and appearances:
      </h2>

      <div></div>
    </div>
  );
}
