import { fireEvent, render, screen } from '@testing-library/react';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

import { Hero } from '@/types/global.types';

import { FavoriteButton } from './favorite-button';

const mockHero: Hero = {
  id: '1',
  name: 'Spider-Man',
  description: 'The amazing',
  thumbnail: 'image.jpg',
  isFavorite: false,
};

describe('FavoriteButton Component', () => {
  beforeAll(() => {
    Object.defineProperty(window.HTMLMediaElement.prototype, 'play', {
      configurable: true,
      value: vi.fn().mockResolvedValue(undefined),
    });
  });

  afterAll(() => {
    // @ts-expect-error - delete is not allowed
    delete window.HTMLMediaElement.prototype.play;
  });

  it('should render the favorite button', () => {
    render(
      <FavoriteButton
        hero={mockHero}
        onAddFavoriteHero={vi.fn()}
        onRemoveFavoriteHero={vi.fn()}
      />,
    );
    expect(
      screen.getByRole('button', { name: /favorite button/i }),
    ).toBeInTheDocument();
  });

  it('should mark hero as favorite when clicked', () => {
    const onAddFavoriteHero = vi.fn();
    render(
      <FavoriteButton
        hero={mockHero}
        onAddFavoriteHero={onAddFavoriteHero}
        onRemoveFavoriteHero={vi.fn()}
      />,
    );
    const button = screen.getByRole('button', { name: /favorite button/i });
    fireEvent.click(button);
    expect(onAddFavoriteHero).toHaveBeenCalledWith(mockHero);
  });

  it('should play the like sound when marking as favorite', () => {
    const playMock = vi
      .spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockImplementation(() => Promise.resolve());
    render(
      <FavoriteButton
        hero={mockHero}
        onAddFavoriteHero={vi.fn()}
        onRemoveFavoriteHero={vi.fn()}
      />,
    );
    const button = screen.getByRole('button', { name: /favorite button/i });
    fireEvent.click(button);
    expect(playMock).toHaveBeenCalled();
    playMock.mockRestore();
  });
});
