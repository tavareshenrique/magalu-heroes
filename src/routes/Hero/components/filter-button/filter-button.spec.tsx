import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, Mock, vi } from 'vitest';

import { useHeroes } from '@/context/HeroContext';

import { FilterButton } from './filter-button';

vi.mock('@/context/HeroContext', () => ({
  useHeroes: vi.fn(),
}));

describe('FilterButton', () => {
  it('renders correctly', () => {
    (useHeroes as Mock).mockReturnValue({
      handleToggleBottomSheetFilter: vi.fn(),
    });
    render(<FilterButton />);
    expect(
      screen.getByRole('button', { name: /search button/i }),
    ).toBeInTheDocument();
  });

  it('calls handleToggleBottomSheetFilter when clicked', () => {
    const handleToggleBottomSheetFilter = vi.fn();
    (useHeroes as Mock).mockReturnValue({ handleToggleBottomSheetFilter });

    render(<FilterButton />);
    fireEvent.click(screen.getByRole('button', { name: /search button/i }));

    expect(handleToggleBottomSheetFilter).toHaveBeenCalledTimes(1);
  });
});
