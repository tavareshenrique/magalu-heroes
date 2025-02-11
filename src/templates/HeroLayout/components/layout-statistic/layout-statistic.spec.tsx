import { useQuery } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import { describe, expect, it, Mock, vi } from 'vitest';

import { LayoutStatistic } from './layout-statistic';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn(),
}));

vi.mock('@/repositories/fetch-hero-details', () => ({
  fetchHeroDetails: vi.fn(),
}));

describe('LayoutStatistic', () => {
  it('should render the skeleton when loading', () => {
    (usePathname as Mock).mockReturnValue('/hero/123');
    (useQuery as Mock).mockReturnValue({ data: null, isLoading: true });

    render(<LayoutStatistic />);

    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  it('should not render if heroId is invalid', () => {
    (usePathname as Mock).mockReturnValue('/hero/abc');
    (useQuery as Mock).mockReturnValue({ data: null, isLoading: false });

    const { container } = render(<LayoutStatistic />);

    expect(container.firstChild).toBeNull();
  });

  it('should render statistics when data is available', () => {
    (usePathname as Mock).mockReturnValue('/hero/123');
    (useQuery as Mock).mockReturnValue({
      data: {
        hero: {
          totalComics: 10,
          totalSeries: 5,
          totalStories: 8,
          totalEvents: 2,
        },
      },
      isLoading: false,
    });

    render(<LayoutStatistic />);

    expect(screen.getByText(/📊 Statistics/i)).toBeInTheDocument();
    expect(screen.getByTestId('Total Comics')).toHaveTextContent('10');
    expect(screen.getByTestId('Total Series')).toHaveTextContent('5');
    expect(screen.getByTestId('Total Stories')).toHaveTextContent('8');
    expect(screen.getByTestId('Total Events')).toHaveTextContent('2');
  });
});
