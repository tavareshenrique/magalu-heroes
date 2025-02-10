import { faker } from '@faker-js/faker';
import { describe, expect, it, Mock, vi } from 'vitest';

import { checkIsFavorite } from '@/utils/favoriteHeroesStorage';
import { isLastPage } from '@/utils/isLastPage';

import { makeFetchHeroes } from './make-fetch-heroes';

vi.mock('@/utils/favoriteHeroesStorage', () => ({
  checkIsFavorite: vi.fn(() => false),
}));

vi.mock('@/utils/isLastPage', () => ({
  isLastPage: vi.fn(() => false),
}));

describe('makeFetchHeroes function', () => {
  it('should correctly parse hero list', async () => {
    const mockHeroes = Array.from({ length: 3 }, () => ({
      id: faker.number.int(),
      name: faker.person.firstName(),
      description: faker.lorem.sentence(),
      modified: faker.date.past().toISOString(),
      thumbnail: {
        path: faker.image.url(),
        extension: 'jpg',
      },
    }));

    const mockResponse = {
      data: {
        offset: 0,
        limit: 3,
        total: 10,
        count: 3,
        results: mockHeroes,
      },
    };

    const result = await makeFetchHeroes(mockResponse);

    expect(result.heroes).toEqual(
      mockHeroes.map((hero) => ({
        id: String(hero.id),
        name: hero.name,
        description: hero.description,
        thumbnail: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
        isFavorite: false,
      })),
    );
  });

  it('should provide a default description when none is available', async () => {
    const mockHero = {
      id: faker.number.int(),
      name: faker.person.firstName(),
      description: '',
      modified: faker.date.past().toISOString(),
      thumbnail: {
        path: faker.image.url(),
        extension: 'jpg',
      },
    };

    const mockResponse = {
      data: {
        offset: 0,
        limit: 1,
        total: 1,
        count: 1,
        results: [mockHero],
      },
    };

    const result = await makeFetchHeroes(mockResponse);

    expect(result.heroes[0].description).toBe('No description available...');
  });

  it('should check if heroes are favorites', async () => {
    const mockHero = {
      id: faker.number.int(),
      name: faker.person.firstName(),
      description: faker.lorem.sentence(),
      modified: faker.date.past().toISOString(),
      thumbnail: {
        path: faker.image.url(),
        extension: 'jpg',
      },
    };

    (checkIsFavorite as Mock).mockReturnValueOnce(true);

    const mockResponse = {
      data: {
        offset: 0,
        limit: 1,
        total: 1,
        count: 1,
        results: [mockHero],
      },
    };

    const result = await makeFetchHeroes(mockResponse);

    expect(result.heroes[0].isFavorite).toBe(true);
  });

  it('should determine if it is the last page', async () => {
    const mockResponse = {
      data: {
        offset: 6,
        limit: 3,
        total: 9,
        count: 3,
        results: [],
      },
    };

    (isLastPage as Mock).mockReturnValueOnce(true);

    const result = await makeFetchHeroes(mockResponse);

    expect(result.isLastPage).toBe(true);
  });
});
