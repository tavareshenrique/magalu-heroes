'use client';

import { useQuery } from '@tanstack/react-query';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { FavoriteButton } from '@/components/favorite-button/favorite-button';
import { useHeroes } from '@/context/HeroContext';
import { fetchHeroDetails } from '@/repositories/fetch-hero-details';
import { getMagaluLink } from '@/utils/getMagaluLink';

import { AllComics } from './components/all-comics/all-comics';
import { HeroDetailsSkeleton } from './components/hero-details-skeleton/hero-details-skeleton';
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

  useEffect(() => {
    if (!data && !isLoading) {
      router.push('/404');
    }
  }, [data, isLoading, router]);

  if (isLoading && !data) {
    return <HeroDetailsSkeleton />;
  }

  if (!data || !data.hero) {
    return null;
  }

  return (
    <>
      <div className="w-full max-h-[200px] overflow-hidden bg-red-500 md:hidden">
        <Image
          src={data.hero.thumbnail}
          alt={data.hero.name}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto max-h-[200px] object-cover"
          quality={100}
        />
      </div>

      <div className="md:px-14 md:mt-10 mt-4 px-6">
        <button
          type="button"
          className="flex items-center mt-8"
          onClick={() => router.back()}
        >
          <ChevronLeft size={24} strokeWidth={3} />
        </button>

        <div className="flex flex-row mt-5 md:mt-10">
          <div className="relative hidden md:block">
            <Image
              src={data.hero.thumbnail}
              alt={data.hero.name}
              layout="intrinsic"
              width={200}
              height={200}
              quality={100}
              className="rounded-2xl"
            />
          </div>

          <div className="flex flex-col items-start md:ml-4 w-full md:mx-4 md:mt-0">
            <div className="flex flex-row items-center justify-between w-full">
              <h1 className="text-2xl mr-4 md:mr-0 md:text-4xl font-extrabold text-black">
                {data.hero.name}
              </h1>

              <FavoriteButton
                hero={data.hero}
                onAddFavoriteHero={onAddFavoriteHero}
                onRemoveFavoriteHero={onRemoveFavoriteHero}
                reset
              />
            </div>

            <div className="w-full mt-4">
              <p
                className="text-sky-900 text-sm md:text-base mr-4 md:mr-4 mt-2 line-clamp-9 md:line-clamp-6"
                title={data.hero.description}
              >
                {data.hero.description}
              </p>
            </div>
          </div>
        </div>

        <div className="max-[1440px]:mt-2 mt-8 flex flex-row items-center justify-start">
          <Image
            src="/images/magazine-luiza.webp"
            alt="Lu da Magalu"
            width={48}
            height={48}
            className="rounded-full mr-2 w-auto h-auto max-w-[10%] max-[1440px]:w-[4%] sm:max-w-[48px]"
            quality={100}
          />

          <p className="text-sky-900 text-sm md:text-base font-semibold">
            See some offers for this character at{' '}
            <a
              href={getMagaluLink(data.hero.name)}
              target="_blank"
              rel="noreferrer"
              className="text-sky-550 underline text-lg md:text-xl hover:text-sky-900"
            >
              Magalu.
            </a>
          </p>
        </div>

        <h2 className="text-lg md:text-2xl font-bold text-sky-900 max-[1440px]:mt-4 mt-10">
          All comics from: {''}
          <span className="text-sky-950 font-extrabold">{data.hero.name}</span>
        </h2>

        <div className="my-4">
          <AllComics heroId={heroId} />
        </div>
      </div>
    </>
  );
}
