import { api } from '@/lib/api';

import { makeFetchHeroes } from './factories/make-fetch-heroes';

import { FetchHeroesParams, HeroResponse } from './types/fetch-heroes.types';

export async function fetchHeroes({ page, orderBy }: FetchHeroesParams) {
  const limit = 6;
  const offset = page * limit;

  const response = await api.get<HeroResponse>('/characters', {
    params: {
      limit,
      offset,
      orderBy,
    },
  });

  const heroes = makeFetchHeroes(response.data);

  return heroes;
}
