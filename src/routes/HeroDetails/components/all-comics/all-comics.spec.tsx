import { faker } from '@faker-js/faker';
import { useQuery } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import { beforeAll, beforeEach, describe, expect, it, Mock, vi } from 'vitest';

import { AllComics } from './all-comics';

vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn(),
}));

vi.mock('@/repositories/fetch-hero-comics', () => ({
  fetchHeroComics: vi.fn(),
}));

describe('AllComics', () => {
  const generateComic = () => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    thumbnail: faker.image.avatar(),
    description: faker.lorem.sentence(),
  });

  beforeAll(() => {
    HTMLCanvasElement.prototype.getContext = vi.fn();
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders loading state initially', () => {
    (useQuery as Mock).mockReturnValue({ isLoading: true, data: null });
    render(<AllComics heroId="123" />);
    expect(screen.getByTestId('all-comics-skeleton')).toBeInTheDocument();
  });

  it('renders empty state when no comics are found', async () => {
    (useQuery as Mock).mockReturnValue({
      isLoading: false,
      data: { comics: [] },
    });
    render(<AllComics heroId="123" />);

    await waitFor(() => {
      expect(screen.getByText(/No comics found/i)).toBeInTheDocument();
    });
  });

  it('renders list of comics when data is available', async () => {
    const comics = Array.from({ length: 3 }, generateComic);
    (useQuery as Mock).mockReturnValue({ isLoading: false, data: { comics } });
    render(<AllComics heroId="123" />);

    await waitFor(() => {
      comics.forEach((comic) => {
        expect(screen.getByText(comic.title)).toBeInTheDocument();
      });
    });
  });
});
