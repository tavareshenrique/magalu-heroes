'use client';

import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';

import { fetchHeroDetails } from '@/repositories/fetch-hero-details';

import { LayoutStatisticSkeleton } from './components/layout-statistic-skeleton/layout-statistic-skeleton';
import { LayoutStatisticText } from './components/layout-statistic-text/layout-statistic-text';

export function LayoutStatistic() {
  const pathname = usePathname();
  const heroId = pathname.split('/').pop() ?? '';

  const hasHeroId = /^\d+$/.test(heroId);

  const { data, isLoading } = useQuery({
    queryKey: ['hero-details', heroId],
    queryFn: () =>
      fetchHeroDetails({
        heroId,
      }),

    enabled: hasHeroId,
  });

  if (isLoading) {
    return <LayoutStatisticSkeleton />;
  }

  if (!hasHeroId) {
    return null;
  }

  if (!data || !data.hero) {
    return null;
  }

  return (
    <div className="md:flex flex-col p-14 hidden">
      <h1 className="text-2xl font-extrabold text-white mb-6">📊 Statistics</h1>

      <LayoutStatisticText title="Total Comics" value={data.hero.totalComics} />
      <LayoutStatisticText title="Total Series" value={data.hero.totalSeries} />
      <LayoutStatisticText
        title="Total Stories"
        value={data.hero.totalStories}
      />
      <LayoutStatisticText title="Total Events" value={data.hero.totalEvents} />
    </div>
  );
}
