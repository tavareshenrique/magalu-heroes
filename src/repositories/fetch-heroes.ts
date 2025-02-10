import { api } from '@/lib/api';

import { makeFetchHeroes } from './factories/make-fetch-heroes';

import { HeroResponse } from '@/types/global.types';

import { FetchHeroesParams } from './types/fetch-heroes.types';

const LIMIT_PER_PAGE = 6;

export async function fetchHeroes({
  page,
  orderBy,
  byName = null,
}: FetchHeroesParams) {
  const offset = page * LIMIT_PER_PAGE;

  const params = {
    limit: LIMIT_PER_PAGE,
    offset,
    orderBy,
  };

  const nameStartsWith = byName ? { nameStartsWith: byName } : {};

  Object.assign(params, nameStartsWith);

  const response = await api.get<HeroResponse>('/characters', {
    params,
  });

  const heroes = makeFetchHeroes(response.data);

  return heroes;
}
