import { faker } from '@faker-js/faker';
import { describe, expect, it, Mock, vi } from 'vitest';

import { checkIsFavorite } from '@/utils/favoriteHeroesStorage';

import { makeFetchHeroDetails } from './make-fetch-hero-details';

vi.mock('@/utils/favoriteHeroesStorage', () => ({
  checkIsFavorite: vi.fn(() => false),
}));

describe('makeFetchHeroDetails function', () => {
  it('should correctly parse hero details', async () => {
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

    const result = await makeFetchHeroDetails(mockResponse);

    expect(result.hero).toEqual({
      id: String(mockHero.id),
      name: mockHero.name,
      description: 'No description available...',
      thumbnail: `${mockHero.thumbnail.path}.${mockHero.thumbnail.extension}`,
      isFavorite: false,
    });
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

    const result = await makeFetchHeroDetails(mockResponse);

    expect(result.hero.description).toBe('No description available...');
  });

  it('should check if the hero is a favorite', async () => {
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

    const result = await makeFetchHeroDetails(mockResponse);

    expect(result.hero.isFavorite).toBe(true);
  });
});
