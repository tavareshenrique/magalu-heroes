import { api } from '@/lib/api';

import { makeFetchHeroes } from './factories/make-fetch-heroes';

import { FetchHeroesParams, HeroResponse } from './types/fetch-heroes.types';

const LIMIT_PER_PAGE = 6;

export async function fetchHeroes({ page, orderBy }: FetchHeroesParams) {
  const offset = page * LIMIT_PER_PAGE;

  const response = await api.get<HeroResponse>('/characters', {
    params: {
      limit: LIMIT_PER_PAGE,
      offset,
      orderBy,
    },
  });

  const heroes = makeFetchHeroes(response.data);

  return heroes;
}
