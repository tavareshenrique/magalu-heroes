import { Metadata } from 'next';
import { Suspense } from 'react';

import { HeroPage } from '@/routes/Hero/HeroPage';
import { HeroTemplate } from '@/templates/HeroTemplate/HeroTemplate';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Hero() {
  return (
    <HeroTemplate>
      <Suspense>
        <HeroPage />
      </Suspense>
    </HeroTemplate>
  );
}
