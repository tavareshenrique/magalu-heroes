import { Comic } from '@/types/global.types';
import { isLastPage } from '@/utils/isLastPage';

import { ComicResponse } from '../types/fetch-hero-comics.types';

async function makeFetchHeroComics(comics: ComicResponse) {
  const parsedComics: Comic[] = comics.data.results.map((hero) => {
    const { id, title, description, thumbnail } = hero;

    const parsedId = id.toString();

    const thumbnailPath = thumbnail.path + '.' + thumbnail.extension;

    return {
      id: parsedId,
      title,
      description: description || 'No description available...',
      thumbnail: thumbnailPath,
    };
  });

  const isLast = isLastPage(
    comics.data.offset,
    comics.data.count,
    comics.data.total,
  );

  return {
    comics: parsedComics,
    isLastPage: isLast,
  };
}

export { makeFetchHeroComics };
