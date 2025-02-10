import { HeroLayoutTemplate } from '@/templates/HeroLayout/HeroLayoutTemplate';

export default async function HeroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeroLayoutTemplate>{children}</HeroLayoutTemplate>;
}
