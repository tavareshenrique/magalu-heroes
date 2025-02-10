import { faker } from '@faker-js/faker';
import { describe, expect, it, Mock, vi } from 'vitest';

import { isLastPage } from '@/utils/isLastPage';

import { makeFetchHeroComics } from './make-fetch-hero-comics';

vi.mock('@/utils/isLastPage', () => ({
  isLastPage: vi.fn(() => false),
}));

describe('makeFetchHeroComics function', () => {
  it('should parse comics correctly', async () => {
    const mockComics = Array.from({ length: 3 }).map(() => ({
      id: faker.number.int(),
      title: faker.commerce.productName(),
      description: faker.lorem.sentence(),
      thumbnail: {
        path: faker.image.url(),
        extension: 'jpg',
      },
    }));

    const mockResponse = {
      data: {
        results: mockComics,
        offset: 0,
        count: 3,
        total: 10,
      },
    };

    (isLastPage as Mock).mockReturnValue(false);

    const result = await makeFetchHeroComics(mockResponse);

    expect(result.comics).toHaveLength(3);
    result.comics.forEach((comic, index) => {
      expect(comic.id).toBe(mockComics[index].id.toString());
      expect(comic.title).toBe(mockComics[index].title);
      expect(comic.description).toBe(mockComics[index].description);
      expect(comic.thumbnail).toBe(
        `${mockComics[index].thumbnail.path}.${mockComics[index].thumbnail.extension}`,
      );
    });
  });

  it('should return isLastPage as true when last page is reached', async () => {
    const mockResponse = {
      data: {
        results: [],
        offset: 6,
        count: 6,
        total: 6,
      },
    };

    (isLastPage as Mock).mockReturnValue(true);

    const result = await makeFetchHeroComics(mockResponse);

    expect(result.isLastPage).toBe(true);
  });

  it('should handle missing description by providing a default', async () => {
    const mockComics = [
      {
        id: faker.number.int(),
        title: faker.commerce.productName(),
        description: 'No description available...',
        thumbnail: {
          path: faker.image.url(),
          extension: 'jpg',
        },
      },
    ];

    const mockResponse = {
      data: {
        results: mockComics,
        offset: 0,
        count: 1,
        total: 10,
      },
    };

    (isLastPage as Mock).mockReturnValue(false);

    const result = await makeFetchHeroComics(mockResponse);

    expect(result.comics[0].description).toBe('No description available...');
  });
});
