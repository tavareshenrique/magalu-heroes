import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import { describe, expect, it, Mock, vi } from 'vitest';

import { LayoutFilter } from './layout-filter';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

vi.mock('@/components/filter/filter', () => ({
  Filter: () => <div data-testid="filter-component" />,
}));

describe('LayoutFilter Component', () => {
  it('should render filter and title', () => {
    (usePathname as Mock).mockReturnValue('/');

    render(<LayoutFilter />);

    expect(
      screen.getByRole('heading', { name: /filters/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('filter-component')).toBeInTheDocument();
  });

  it('should hide filter on hero detail page', () => {
    (usePathname as Mock).mockReturnValue('/hero/123');

    render(<LayoutFilter />);

    expect(screen.queryByTestId('filter-component')).not.toBeInTheDocument();
  });
});
