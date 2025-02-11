import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { LayoutStatisticSkeleton } from './layout-statistic-skeleton';

describe('LayoutStatisticSkeleton', () => {
  it('should render the Statistics title', () => {
    render(<LayoutStatisticSkeleton />);

    const title = screen.getByText(/📊 Statistics/i);

    expect(title).toBeInTheDocument();
  });

  it('should render the Skeleton component', () => {
    render(<LayoutStatisticSkeleton />);

    const skeleton = screen.getByTestId('skeleton');

    expect(skeleton).toBeInTheDocument();
  });

  it('should be hidden on small screens', () => {
    render(<LayoutStatisticSkeleton />);
    const container = screen.getByText(/📊 Statistics/i).parentElement;

    expect(container).toHaveClass('hidden');
  });
});
