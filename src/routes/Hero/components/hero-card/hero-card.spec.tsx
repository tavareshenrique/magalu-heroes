import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Hero } from '@/types/global.types';

import { HeroCard } from './hero-card';

vi.mock('@/components/favorite-button/favorite-button', () => ({
  FavoriteButton: vi.fn(() => (
    <button data-testid="favorite-button">Favorite</button>
  )),
}));

describe('HeroCard', () => {
  const generateHero = (): Hero => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    thumbnail: faker.image.avatar(),
    description: faker.lorem.sentence(),
    isFavorite: false,
  });

  it('renders hero information correctly', () => {
    const hero = generateHero();

    render(
      <HeroCard
        hero={hero}
        onAddFavoriteHero={vi.fn()}
        onRemoveFavoriteHero={vi.fn()}
      />,
    );

    expect(screen.getByText(hero.name)).toBeInTheDocument();
    expect(screen.getByText(hero.description)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: hero.name })).toBeInTheDocument();
  });

  it('renders the favorite button', () => {
    const hero = generateHero();

    render(
      <HeroCard
        hero={hero}
        onAddFavoriteHero={vi.fn()}
        onRemoveFavoriteHero={vi.fn()}
      />,
    );

    expect(screen.getByTestId('favorite-button')).toBeInTheDocument();
  });

  it('links to the correct hero page', () => {
    const hero = generateHero();
    render(
      <HeroCard
        hero={hero}
        onAddFavoriteHero={vi.fn()}
        onRemoveFavoriteHero={vi.fn()}
      />,
    );

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', `/hero/${hero.id}`);
  });
});
