import { faker } from '@faker-js/faker';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Dialog } from '@/components/ui/dialog';

import { ComicDialog } from './comic-dialog';

describe('ComicDialog', () => {
  const generateComic = () => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    thumbnail: faker.image.avatar(),
    description: faker.lorem.sentence(),
  });

  it('renders comic dialog with correct information', async () => {
    const comic = generateComic();

    render(
      <Dialog open>
        <ComicDialog comic={comic} />
      </Dialog>,
    );

    await waitFor(() => {
      expect(screen.getByText(comic.title)).toBeInTheDocument();
      expect(
        screen.getByText(comic.description, { exact: false }),
      ).toBeInTheDocument();
      expect(screen.getByAltText(comic.title)).toBeInTheDocument();
    });
  });

  it('closes dialog when close button is clicked', async () => {
    const comic = generateComic();

    render(
      <Dialog defaultOpen={true}>
        <ComicDialog comic={comic} />
      </Dialog>,
    );

    const closeButtons = screen.getAllByRole('button', { name: /close/i });

    fireEvent.click(closeButtons[0]);

    await waitFor(
      () => {
        expect(screen.queryByText(comic.title)).not.toBeInTheDocument();
      },
      { timeout: 2000 },
    );
  });
});
