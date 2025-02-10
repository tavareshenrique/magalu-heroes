import { checkIsFavorite } from '@/utils/favoriteHeroesStorage';

import { Hero, HeroResponse } from '@/types/global.types';

async function makeFetchHeroDetails(heroes: HeroResponse) {
  const parsedHeroes: Hero[] = heroes.data.results.map((hero) => {
    const { id, name, description, thumbnail } = hero;

    const parsedId = id.toString();

    const isFavorite = checkIsFavorite(parsedId);

    const thumbnailPath = thumbnail.path + '.' + thumbnail.extension;

    return {
      id: parsedId,
      name,
      description: description || 'No description available...',
      thumbnail: thumbnailPath,
      isFavorite,
    };
  });

  return {
    hero: parsedHeroes[0],
  };
}

export { makeFetchHeroDetails };
