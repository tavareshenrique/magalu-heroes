'use client';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@/lib/react-query';

import { LayoutFilter } from './components/layout-filter/layout-filter';
import { LayoutLogo } from './components/layout-logo/layout-logo';
import { LayoutStatistic } from './components/layout-statistic/layout-statistic';
import { HeroLayoutTemplateProps } from './HeroLayoutTemplate.types';

export function HeroLayoutTemplate({ children }: HeroLayoutTemplateProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="md:flex-row md:h-screen flex flex-col">
        <section className="md:w-[392px] md:bg-sky-550 h-full">
          <LayoutLogo />

          <LayoutFilter />

          <LayoutStatistic />
        </section>

        <main className="flex-1">{children}</main>
      </div>
    </QueryClientProvider>
  );
}
