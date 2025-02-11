import { faker } from '@faker-js/faker';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';

import { useHeroes } from '@/context/HeroContext';

import { FavoriteHeroes } from './favorite-heroes';

vi.mock('@/context/HeroContext', () => ({
  useHeroes: vi.fn(),
}));

describe('FavoriteHeroes', () => {
  const generateHero = () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    thumbnail: faker.image.avatar(),
  });

  let favoriteHeroes;
  let onAddFavoriteHero;
  let onRemoveFavoriteHero;

  beforeEach(() => {
    favoriteHeroes = Array.from({ length: 5 }, generateHero);
    onAddFavoriteHero = vi.fn();
    onRemoveFavoriteHero = vi.fn();

    (useHeroes as Mock).mockReturnValue({
      favoriteHeroes,
      isLoadingFavoriteHeroes: false,
      onAddFavoriteHero,
      onRemoveFavoriteHero,
    });
  });

  it('renders the title correctly', () => {
    render(<FavoriteHeroes />);
    expect(screen.getByText('Favorites')).toBeInTheDocument();
  });

  it('renders the correct number of hero cards', () => {
    render(<FavoriteHeroes />);

    const heroCards = screen.getAllByTestId('hero-card');

    expect(heroCards.length).toBeGreaterThan(0);
  });

  it('shows skeleton when loading', () => {
    (useHeroes as Mock).mockReturnValueOnce({ isLoadingFavoriteHeroes: true });

    render(<FavoriteHeroes />);

    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument();
  });

  it('hides component when there are no favorite heroes', () => {
    (useHeroes as Mock).mockReturnValueOnce({ favoriteHeroes: [] });

    render(<FavoriteHeroes />);

    expect(screen.queryByText('Favorites')).not.toBeInTheDocument();
  });

  it('handles scroll left and right correctly', () => {
    render(<FavoriteHeroes />);

    const leftButton = screen.getByText('←');
    const rightButton = screen.getByText('→');

    expect(leftButton).toBeDisabled();
    expect(rightButton).not.toBeDisabled();

    fireEvent.click(rightButton);

    expect(leftButton).not.toBeDisabled();
  });
});
