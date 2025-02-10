import { HeroDetailsPage } from '@/routes/HeroDetails/HeroDetailsPage';
import { HeroTemplate } from '@/templates/HeroTemplate/HeroTemplate';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata() {
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
