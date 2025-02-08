export type Hero = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  isFavorite?: boolean;
};

export interface HeroCardProps {
  hero: Hero;
}
