import { render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';

import { useHeroes } from '@/context/HeroContext';

import { FilterSheet } from './filter-sheet';

vi.mock('@/context/HeroContext', () => ({
  useHeroes: vi.fn(),
}));

describe('FilterSheet', () => {
  let handleToggleBottomSheetFilter: Mock;

  beforeEach(() => {
    handleToggleBottomSheetFilter = vi.fn();
    (useHeroes as Mock).mockReturnValue({
      handleToggleBottomSheetFilter,
      isBottomSheetFilterOpen: false,
    });
  });

  it('does not render initially', () => {
    render(<FilterSheet />);

    const sheet = screen.getByLabelText(/filter/i);

    expect(sheet).toHaveStyle('visibility: hidden');
  });

  it('renders when mounted', async () => {
    render(<FilterSheet />);
    await waitFor(() => {
      expect(screen.getByLabelText(/filter/i)).toBeInTheDocument();
    });
  });

  it('shows filter sheet when open', async () => {
    (useHeroes as Mock).mockReturnValueOnce({
      handleToggleBottomSheetFilter,
      isBottomSheetFilterOpen: true,
    });

    render(<FilterSheet />);

    await waitFor(() => {
      expect(screen.getByLabelText(/filter/i)).toBeInTheDocument();
    });
  });
});
