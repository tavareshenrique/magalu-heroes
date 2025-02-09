'use client';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@/lib/react-query';

import { HeroProvider } from '@/context/HeroContext';

import { HeroPage } from '@/pages/Hero/HeroPage';

export function HeroTemplate() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroProvider>
        <HeroPage />
      </HeroProvider>
    </QueryClientProvider>
  );
}
