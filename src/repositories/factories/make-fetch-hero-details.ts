import { Hero, HeroResponse } from '@/types/global.types';
import { checkIsFavorite } from '@/utils/favoriteHeroesStorage';

interface MakeFetchHeroDetailsResponse extends Hero {
  totalComics: number;
  totalSeries: number;
  totalStories: number;
  totalEvents: number;
}

async function makeFetchHeroDetails(heroes: HeroResponse) {
  const hero = heroes.data.results[0];

  if (!hero) return { hero: null };

  const { id, name, description, thumbnail, comics, series, stories, events } =
    hero;

  return {
    hero: {
      id: id.toString(),
      name,
      description: description || 'No description available...',
      thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
      isFavorite: checkIsFavorite(id.toString()),
      totalComics: comics.available,
      totalSeries: series.available,
      totalStories: stories.available,
      totalEvents: events.available,
    } as MakeFetchHeroDetailsResponse,
  };
}

export { makeFetchHeroDetails };
