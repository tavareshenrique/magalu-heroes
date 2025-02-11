import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AllComicsSkeleton } from './all-comics-skeleton';

describe('AllComicsSkeleton', () => {
  it('renders the correct number of skeleton items', () => {
    render(<AllComicsSkeleton />);

    expect(screen.getByTestId('all-comics-skeleton')).toBeInTheDocument();
    expect(screen.getAllByTestId('skeleton-item').length).toBe(6);
  });
});
