import { faker } from '@faker-js/faker';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Dialog } from '@/components/ui/dialog';

import { ComicCard } from './comic-card';

describe('ComicCard', () => {
  const generateComic = () => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    thumbnail: faker.image.avatar(),
    description: faker.lorem.sentence(),
  });

  it('renders comic information correctly', () => {
    const comic = generateComic();

    render(
      <Dialog>
        <ComicCard comic={comic} onSetSelectedComic={vi.fn()} />
      </Dialog>,
    );

    expect(screen.getByText(comic.title)).toBeInTheDocument();
    expect(screen.getByText(comic.description)).toBeInTheDocument();
    expect(screen.getByAltText(comic.title)).toBeInTheDocument();
  });

  it('calls onSetSelectedComic when clicked', () => {
    const comic = generateComic();
    const onSetSelectedComic = vi.fn();

    render(
      <Dialog>
        <ComicCard comic={comic} onSetSelectedComic={onSetSelectedComic} />
      </Dialog>,
    );

    fireEvent.click(screen.getByText(comic.title));

    expect(onSetSelectedComic).toHaveBeenCalledWith(comic);
  });
});
