import { faker } from '@faker-js/faker';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { Hero } from '@/types/global.types';
import {
  addFavoriteHeroes,
  checkIsFavorite,
  getFavoriteHeroes,
} from '@/utils/favoriteHeroesStorage';

const LOCAL_STORAGE_KEY = '@marvel:favorites';

const heroes: Hero[] = [
  {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    description: faker.lorem.sentence(),
    thumbnail: faker.image.url(),
  },
];

describe('favoriteHeroesStorage functions', () => {
  beforeEach(() => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      if (key === LOCAL_STORAGE_KEY) {
        return JSON.stringify([{ id: '1', name: 'Spider-Man' }]);
      }
      return null;
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return an empty array when no favorites are stored', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
    expect(getFavoriteHeroes()).toEqual([]);
  });

  it('should return stored favorite heroes', () => {
    expect(getFavoriteHeroes()).toEqual([{ id: '1', name: 'Spider-Man' }]);
  });

  it('should store favorite heroes in localStorage', () => {
    addFavoriteHeroes(heroes);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      LOCAL_STORAGE_KEY,
      JSON.stringify(heroes),
    );
  });

  it('should check if a hero is favorite', () => {
    expect(checkIsFavorite('1')).toBe(true);
    expect(checkIsFavorite('2')).toBe(false);
  });
});
