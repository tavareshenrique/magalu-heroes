import { faker } from '@faker-js/faker';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, Mock, vi } from 'vitest';

import { Hero } from '@/types/global.types';
import {
  addFavoriteHeroes,
  getFavoriteHeroes,
} from '@/utils/favoriteHeroesStorage';

import { HeroProvider, useHeroes } from './HeroContext';

vi.mock('@/utils/favoriteHeroesStorage', () => ({
  addFavoriteHeroes: vi.fn(),
  getFavoriteHeroes: vi.fn(() => []),
}));

const hero: Hero = {
  id: faker.string.uuid(),
  name: faker.person.firstName(),
  description: faker.lorem.sentence(),
  thumbnail: faker.image.url(),
};

describe('useHeroes Hook', () => {
  const queryClient = new QueryClient();

  function wrapper({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>
        <HeroProvider>{children}</HeroProvider>
      </QueryClientProvider>
    );
  }

  it('should provide default values', () => {
    const { result } = renderHook(() => useHeroes(), { wrapper });

    expect(result.current.favoriteHeroes).toBeNull();

    expect(result.current.isLoadingFavoriteHeroes).toBe(false);
  });

  it('should add a hero to favorites', async () => {
    const { result } = renderHook(() => useHeroes(), { wrapper });

    await act(() => {
      result.current.onAddFavoriteHero(hero);
    });

    expect(addFavoriteHeroes).toHaveBeenCalledWith([hero]);
  });

  it('should remove a hero from favorites', async () => {
    (getFavoriteHeroes as Mock).mockReturnValue([hero]);

    const { result } = renderHook(() => useHeroes(), { wrapper });

    await act(() => {
      result.current.onRemoveFavoriteHero(hero);
    });

    expect(addFavoriteHeroes).toHaveBeenCalledWith([]);
  });
});
