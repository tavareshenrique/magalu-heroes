import { checkIsFavorite } from '@/utils/favoriteHeroesStorage';

import { Hero, HeroResponse } from '@/types/global.types';

const isLastPage = (offset: number, count: number, total: number): boolean => {
  return offset + count >= total;
};

async function makeFetchHeroes(heroes: HeroResponse) {
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

  const isLast = isLastPage(
    heroes.data.offset,
    heroes.data.count,
    heroes.data.total,
  );

  return {
    heroes: parsedHeroes,
    isLastPage: isLast,
  };
}

export { makeFetchHeroes };
