import { HeroTemplate } from '@/templates/HeroTemplate/HeroTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Hero() {
  return <HeroTemplate />;
}
