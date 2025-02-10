import { Metadata } from 'next';

import { HeroPage } from '@/pages/Hero/HeroPage';
import { HeroTemplate } from '@/templates/HeroTemplate/HeroTemplate';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Hero() {
  return (
    <HeroTemplate>
      <HeroPage />
    </HeroTemplate>
  );
}
