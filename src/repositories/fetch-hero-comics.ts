import { api } from '@/lib/api';

import { makeFetchHeroComics } from './factories/make-fetch-hero-comics';

import {
  ComicResponse,
  FetchHeroComicsParams,
} from './types/fetch-hero-comics.types';

const LIMIT_PER_PAGE = 6;

export async function fetchHeroComics({ heroId, page }: FetchHeroComicsParams) {
  const offset = page * LIMIT_PER_PAGE;

  const params = {
    limit: LIMIT_PER_PAGE,
    offset,
  };

  const response = await api.get<ComicResponse>(
    `/characters/${heroId}/comics`,
    {
      params,
    },
  );

  console.log('chamou novamente', page);

  const comics = makeFetchHeroComics(response.data);

  return comics;
}
