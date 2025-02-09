'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useQueryClient } from '@tanstack/react-query';

import {
  addFavoriteHeroes,
  getFavoriteHeroes,
} from '@/utils/favoriteHeroesStorage';

import { Hero } from '@/types/global.types';

interface IHeroContextType {
  favoriteHeroes: Hero[] | null;
  isLoadingFavoriteHeroes: boolean;
  isBottomSheetFilterOpen: boolean;
  onAddFavoriteHero: (hero: Hero) => void;
  onRemoveFavoriteHero: (hero: Hero) => void;
  handleToggleBottomSheetFilter: () => void;
}

interface IHeroProvider {
  children: ReactNode;
}

const HeroContext = createContext({} as IHeroContextType);

export function HeroProvider({ children }: IHeroProvider) {
  const queryClient = useQueryClient();

  const [favoriteHeroes, setFavoriteHeroes] = useState<Hero[] | null>(null);
  const [isLoadingFavoriteHeroes, setIsLoadingFavoriteHeroes] = useState(false);
  const [isBottomSheetFilterOpen, setIsBottomSheetFilterOpen] = useState(false);

  function handleToggleBottomSheetFilter() {
    setIsBottomSheetFilterOpen((prev) => !prev);
  }

  async function onRemoveFavoriteHero(hero: Hero) {
    const favorites = favoriteHeroes?.filter(
      (favorite) => favorite.id !== hero.id,
    );

    if (!favorites) {
      return;
    }

    setFavoriteHeroes(favorites);

    addFavoriteHeroes(favorites);

    await queryClient.invalidateQueries({ queryKey: ['heroes'], exact: false });
  }

  function onAddFavoriteHero(hero: Hero) {
    const favorites = favoriteHeroes ? [...favoriteHeroes, hero] : [hero];

    setFavoriteHeroes(favorites);

    addFavoriteHeroes(favorites);
  }

  useEffect(() => {
    setIsLoadingFavoriteHeroes(true);

    const favorites = getFavoriteHeroes();

    if (favorites.length > 0) {
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
        isBottomSheetFilterOpen,
        onAddFavoriteHero,
        onRemoveFavoriteHero,
        handleToggleBottomSheetFilter,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
}

export const useHeroes = () => useContext(HeroContext);
