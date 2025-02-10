import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import { describe, expect, it, Mock, vi } from 'vitest';

import { LayoutLogo } from './layout-logo';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

describe('LayoutLogo Component', () => {
  it('should render the logo on non-hero detail pages', () => {
    (usePathname as Mock).mockReturnValue('/home');

    render(<LayoutLogo />);

    expect(
      screen.getByRole('img', { name: /A silhouette of a superhero/i }),
    ).toBeInTheDocument();
  });

  it('should not render the logo on hero detail pages', () => {
    (usePathname as Mock).mockReturnValue('/hero/123');

    render(<LayoutLogo />);

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
