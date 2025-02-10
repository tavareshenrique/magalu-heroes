import { api } from '@/lib/api';

import { makeFetchHeroDetails } from './factories/make-fetch-hero-details';

import { FetchHeroDetailsParams } from './types/fetch-hero-details.type';
import { HeroResponse } from '@/types/global.types';

export async function fetchHeroDetails({ heroId }: FetchHeroDetailsParams) {
  const response = await api.get<HeroResponse>(`/characters/${heroId}`, {});

  const heroes = makeFetchHeroDetails(response.data);

  return heroes;
}
