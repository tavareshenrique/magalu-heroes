import { HeroDetailsPage } from '@/routes/HeroDetails/HeroDetailsPage';
import { HeroTemplate } from '@/templates/HeroTemplate/HeroTemplate';

type Props = {
  params: Promise<{ id: string }>; // Permite que params seja uma Promise
};

export async function generateMetadata() {
  return {
    title: 'Details',
  };
}

export default async function HeroDetails({ params }: Props) {
  const { id } = await params; // Espera a resolução da Promise

  return (
    <HeroTemplate>
      <HeroDetailsPage heroId={id} />
    </HeroTemplate>
  );
}
