import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { HeroLoading } from './hero-loading';

vi.mock('@/components/animation-lottie/animation-lottie', () => ({
  AnimationLottie: () => (
    <div data-testid="loading-animation">Mock Animation</div>
  ),
}));

describe('HeroLoading', () => {
  it('renders loading animation and text', async () => {
    render(<HeroLoading />);

    await waitFor(() => {
      expect(screen.getByTestId('loading-animation')).toBeInTheDocument();
    });

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
