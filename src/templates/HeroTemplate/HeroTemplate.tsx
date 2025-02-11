'use client';

import { HeroProvider } from '@/context/HeroContext';

import { HeroTemplateProps } from './HeroTemplate.types';

export function HeroTemplate({ children }: HeroTemplateProps) {
  return <HeroProvider>{children}</HeroProvider>;
}
