import { Hero } from '@/types/global.types';
import { HeroResponse } from '../types/fetch-heroes.types';

const isLastPage = (offset: number, count: number, total: number): boolean => {
  return offset + count >= total;
};

async function makeFetchHeroes(heroes: HeroResponse) {
  const parsedHeroes: Hero[] = heroes.data.results.map((hero) => {
    const { id, name, description, thumbnail } = hero;

    return {
      id: id.toString(),
      name,
      description,
      thumbnail: thumbnail.path + '.' + thumbnail.extension,
      isFavorite: false, // TODO: Implement favorite feature
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
