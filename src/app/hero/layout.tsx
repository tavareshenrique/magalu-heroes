import { HeroLayoutTemplate } from '@/templates/HeroLayoutTemplate/HeroLayoutTemplate';

export default async function HeroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeroLayoutTemplate>{children}</HeroLayoutTemplate>;
}
