import { fireEvent, render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';

import { SortHeroes } from './sort-heroes';

describe('SortHeroes', () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  it('renders select component with default value', () => {
    render(<SortHeroes value="name" onChange={vi.fn()} />);

    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  it('calls onChange when an option is selected', async () => {
    const handleChange = vi.fn();

    render(<SortHeroes value="name" onChange={handleChange} />);

    fireEvent.click(screen.getByRole('combobox'));

    fireEvent.click(await screen.findByText('Modification'));

    expect(handleChange).toHaveBeenCalledWith('modified');
  });

  it('renders all sorting options', async () => {
    render(<SortHeroes value="name" onChange={vi.fn()} />);

    fireEvent.click(screen.getByRole('combobox'));

    expect(screen.getByText('Modification')).toBeInTheDocument();
  });
});
