import { Hero } from '@/types/global.types';

export interface HeroCardProps {
  hero: Hero;
  onAddFavoriteHero: (hero: Hero) => void;
  onRemoveFavoriteHero: (hero: Hero) => void;
}
