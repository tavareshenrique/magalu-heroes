import { Metadata } from 'next';
import { HeroTemplate } from '@/templates/HeroTemplate/HeroTemplate';
import { HeroDetailsPage } from '@/pages/HeroDetails/HeroDetailsPage';

type Props = {
  params: { id: string };
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Details',
  };
}

export default async function HeroDetails({ params }: Props) {
  const { id } = await params;

  return (
    <HeroTemplate>
      <HeroDetailsPage heroId={id} />
    </HeroTemplate>
  );
}
