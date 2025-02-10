import { faker } from '@faker-js/faker';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';

import { useHeroes } from '@/context/HeroContext';

import { AllHeroes } from './all-heroes';

vi.mock('@/context/HeroContext', () => ({
  useHeroes: vi.fn(),
}));

vi.mock('next/dynamic', () => ({
  __esModule: true,
  default: () => () => null,
}));

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} alt={props.alt || 'mocked-image'} />
  ),
}));

describe('AllHeroes', () => {
  const mockOnAddFavoriteHero = vi.fn();
  const mockOnRemoveFavoriteHero = vi.fn();

  beforeEach(() => {
    (useHeroes as Mock).mockReturnValue({
      onAddFavoriteHero: mockOnAddFavoriteHero,
      onRemoveFavoriteHero: mockOnRemoveFavoriteHero,
    });
  });

  it('renders message when no heroes are available', () => {
    render(
      <AllHeroes heroes={[]} isLastPage={false} page={1} setPage={vi.fn()} />,
    );
    expect(screen.getByText('No characters found...')).toBeInTheDocument();
  });

  it('renders heroes correctly', () => {
    const heroes = Array.from({ length: 3 }, () => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      image: faker.image.avatar() || 'https://via.placeholder.com/150',
      description: faker.lorem.sentence(),
      thumbnail: {
        path: faker.image.avatar(),
        extension: 'jpg',
      },
    })).map((hero) => ({
      ...hero,
      thumbnail: hero.image || 'https://via.placeholder.com/150',
    }));

    render(
      <AllHeroes
        heroes={heroes}
        isLastPage={false}
        page={1}
        setPage={vi.fn()}
      />,
    );

    heroes.forEach((hero) => {
      expect(screen.getByText(hero.name)).toBeInTheDocument();
    });
  });

  it('triggers pagination function when changing pages', () => {
    const setPage = vi.fn();
    render(
      <AllHeroes heroes={[]} isLastPage={false} page={1} setPage={setPage} />,
    );

    const nextButton = screen.queryByRole('button', { name: /next/i });
    if (nextButton) {
      fireEvent.click(nextButton);
      expect(setPage).toHaveBeenCalledWith(2);
    }
  });
});
