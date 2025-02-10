import { api } from '@/lib/api';
import { HeroResponse } from '@/types/global.types';

import { makeFetchHeroDetails } from './factories/make-fetch-hero-details';
import { FetchHeroDetailsParams } from './types/fetch-hero-details.type';

export async function fetchHeroDetails({ heroId }: FetchHeroDetailsParams) {
  const response = await api.get<HeroResponse>(`/characters/${heroId}`, {});

  const heroes = makeFetchHeroDetails(response.data);

  return heroes;
}
