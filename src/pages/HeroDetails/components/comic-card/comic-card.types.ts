import { Comic } from '@/types/global.types';

export interface ComicCardProps {
  comic: Comic;
  onSetSelectedComic: (comic: Comic | null) => void;
}
