import { Hero } from '@/types/global.types';

const LOCAL_STORAGE_KEY = '@marvel:favorites';

export function getFavoriteHeroes() {
  const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!storedData) {
    return [];
  }

  const favorites = JSON.parse(storedData) as Hero[];

  return favorites;
}

export function addFavoriteHeroes(heroes: Hero[]) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(heroes));
}

export function checkIsFavorite(heroId: string) {
  const favorites = getFavoriteHeroes();

  return favorites.some((favorite) => favorite.id === heroId);
}
