import { Hero } from '@/types/global.types';

export interface AllHeroesProps {
  heroes: Hero[];
  page: number;
  isLastPage: boolean;
  setPage: (page: number) => void;
}
