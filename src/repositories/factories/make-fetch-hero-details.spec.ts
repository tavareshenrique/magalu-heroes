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
      comics: { available: faker.number.int() },
      series: { available: faker.number.int() },
      stories: { available: faker.number.int() },
      events: { available: faker.number.int() },
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
      totalComics: mockHero.comics.available,
      totalSeries: mockHero.series.available,
      totalStories: mockHero.stories.available,
      totalEvents: mockHero.events.available,
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
      comics: { available: 0 },
      series: { available: 0 },
      stories: { available: 0 },
      events: { available: 0 },
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
    expect(result.hero?.description).toBe('No description available...');
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
      comics: { available: 0 },
      series: { available: 0 },
      stories: { available: 0 },
      events: { available: 0 },
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
    expect(result.hero?.isFavorite).toBe(true);
  });

  it('should return null hero if results are empty', async () => {
    const mockResponse = {
      data: {
        offset: 0,
        limit: 1,
        total: 1,
        count: 0,
        results: [],
      },
    };

    const result = await makeFetchHeroDetails(mockResponse);
    expect(result.hero).toBeNull();
  });

  it('should correctly set totalComics, totalSeries, totalStories, and totalEvents', async () => {
    const mockHero = {
      id: faker.number.int(),
      name: faker.person.firstName(),
      description: faker.lorem.sentence(),
      modified: faker.date.past().toISOString(),
      thumbnail: {
        path: faker.image.url(),
        extension: 'jpg',
      },
      comics: { available: 5 },
      series: { available: 3 },
      stories: { available: 8 },
      events: { available: 2 },
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
    expect(result.hero?.totalComics).toBe(5);
    expect(result.hero?.totalSeries).toBe(3);
    expect(result.hero?.totalStories).toBe(8);
    expect(result.hero?.totalEvents).toBe(2);
  });
});
