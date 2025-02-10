'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { HeroProvider } from '@/context/HeroContext';
import { queryClient } from '@/lib/react-query';

import { HeroTemplateProps } from './HeroTemplate.types';

export function HeroTemplate({ children }: HeroTemplateProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroProvider>{children}</HeroProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
