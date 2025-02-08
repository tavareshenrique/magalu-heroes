'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Hero } from '@/components/hero-card/hero-card.types';

interface IHeroContextType {
  favoriteHeroes: Hero[] | null;
  isLoadingFavoriteHeroes: boolean;
  onAddFavoriteHero: (hero: Hero) => void;
  onRemoveFavoriteHero: (hero: Hero) => void;
}

interface IHeroProvider {
  children: ReactNode;
}

const HeroContext = createContext({} as IHeroContextType);

export function HeroProvider({ children }: IHeroProvider) {
  const [favoriteHeroes, setFavoriteHeroes] = useState<Hero[] | null>(null);
  const [isLoadingFavoriteHeroes, setIsLoadingFavoriteHeroes] = useState(false);

  function onRemoveFavoriteHero(hero: Hero) {
    const favorites = favoriteHeroes?.filter(
      (favorite) => favorite.id !== hero.id,
    );

    if (!favorites) {
      return;
    }

    setFavoriteHeroes(favorites);

    localStorage.setItem('@marvel:favorites', JSON.stringify(favorites));
  }

  function onAddFavoriteHero(hero: Hero) {
    const favorites = favoriteHeroes ? [...favoriteHeroes, hero] : [hero];

    setFavoriteHeroes(favorites);

    localStorage.setItem('@marvel:favorites', JSON.stringify(favorites));
  }

  useEffect(() => {
    setIsLoadingFavoriteHeroes(true);

    const storedData = localStorage.getItem('@marvel:favorites');

    if (storedData) {
      const favorites = JSON.parse(storedData) as Hero[];

      const favoriteHeroesParsed = favorites.map((favorite) => ({
        ...favorite,
        isFavorite: true,
      }));

      setFavoriteHeroes(favoriteHeroesParsed);
    }

    setIsLoadingFavoriteHeroes(false);
  }, []);

  return (
    <HeroContext.Provider
      value={{
        favoriteHeroes,
        isLoadingFavoriteHeroes,
        onAddFavoriteHero,
        onRemoveFavoriteHero,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
}

export const useFavoriteHeroes = () => useContext(HeroContext);
