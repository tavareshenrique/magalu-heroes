import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { describe, expect, it, Mock, vi } from 'vitest';

import { Filter } from './filter';

class MockURLSearchParams extends URLSearchParams {
  get = vi.fn(() => '');
  set = vi.fn();
  toString = vi.fn(() => 'characterName=Spider-Man&onlyFavorites=true');
}

global.URLSearchParams = MockURLSearchParams;

vi.mock('next/navigation', () => {
  const pushMock = vi.fn();
  return {
    useRouter: vi.fn(() => ({ push: pushMock })),
    useSearchParams: vi.fn(
      () => new URLSearchParams('characterName=&onlyFavorites=false'),
    ),
  };
});

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Filter Component', () => {
  it('should render the filter form', () => {
    render(<Filter />);

    expect(screen.getByLabelText(/Character Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Show only favorites/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Apply Filters/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Reset Filters/i }),
    ).toBeInTheDocument();
  });

  it('should update the character name input', () => {
    render(<Filter />);

    const input = screen.getByPlaceholderText('Tell me the character name...');

    fireEvent.change(input, { target: { value: 'Iron Man' } });

    expect(input).toHaveValue('Iron Man');
  });

  it('should call router.push when submitting the form', async () => {
    const pushMock = vi.fn();

    (useRouter as Mock).mockReturnValue({ push: pushMock });

    render(<Filter />);

    fireEvent.click(screen.getByRole('button', { name: /Apply Filters/i }));

    await waitFor(() => expect(pushMock).toHaveBeenCalled());
  });

  it('should reset filters when clicking reset button', () => {
    render(<Filter />);

    const input = screen.getByPlaceholderText('Tell me the character name...');

    fireEvent.change(input, { target: { value: 'Thor' } });

    fireEvent.click(screen.getByRole('button', { name: /Reset Filters/i }));

    expect(input).toHaveValue('');
  });
});
