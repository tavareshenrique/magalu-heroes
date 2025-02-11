import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import { describe, expect, it, Mock, vi } from 'vitest';

import { LayoutLogo } from './layout-logo';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

describe('LayoutLogo', () => {
  it('renders the logo image by default', () => {
    (usePathname as Mock).mockReturnValue('/');

    render(<LayoutLogo />);

    expect(
      screen.getByAltText(/A silhouette of a superhero/i),
    ).toBeInTheDocument();
  });

  it('hides the logo on hero detail page in medium screens and above', () => {
    (usePathname as Mock).mockReturnValue('/hero/123');

    render(<LayoutLogo />);

    const logoContainer = screen.getByRole('img').parentElement;

    expect(logoContainer).toHaveClass('hidden');
  });
});
