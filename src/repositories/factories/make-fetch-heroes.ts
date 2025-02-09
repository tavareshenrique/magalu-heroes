import { Hero } from '@/types/global.types';
import { HeroResponse } from '../types/fetch-heroes.types';

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

  return parsedHeroes;
}

export { makeFetchHeroes };
