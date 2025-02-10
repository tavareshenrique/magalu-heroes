import { Thumbnail } from '@/types/global.types';

export interface FetchHeroComicsParams {
  heroId: string;
  page: number;
}

export interface ComicResponse {
  data: {
    offset: number;
    count: number;
    total: number;
    results: {
      id: number;
      title: string;
      description: string;
      thumbnail: Thumbnail;
    }[];
  };
}
