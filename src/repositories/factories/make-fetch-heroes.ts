import { Hero, HeroResponse } from '@/types/global.types';
import { checkIsFavorite } from '@/utils/favoriteHeroesStorage';
import { isLastPage } from '@/utils/isLastPage';

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
