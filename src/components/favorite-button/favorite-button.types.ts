import { Hero } from '@/types/global.types';

export interface FavoriteButtonProps {
  hero: Hero;
  onAddFavoriteHero: (hero: Hero) => void;
  onRemoveFavoriteHero: (hero: Hero) => void;
}
