import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { HeroDetailsSkeleton } from './hero-details-skeleton';

describe('HeroDetailsSkeleton', () => {
  it('renders the skeleton placeholders correctly', () => {
    render(<HeroDetailsSkeleton />);

    expect(screen.getAllByTestId('skeleton').length).toBeGreaterThan(5);

    expect(
      screen.getByAltText('Blue shopping bag, symbol of Magazine Luiza Store.'),
    ).toBeInTheDocument();
  });
});
