import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { AnimationLottie } from './animation-lottie';

vi.mock('react-lottie-player', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: ({ play, ...props }: any) => (
    <div
      data-testid="lottie-animation"
      data-play={play ? 'true' : 'false'}
      {...props}
    />
  ),
}));

describe('AnimationLottie Component', () => {
  it('should render the Lottie animation', () => {
    render(
      <AnimationLottie animationData={{}} data-testid="lottie-animation" />,
    );

    const lottieElement = screen.getByTestId('lottie-animation');

    expect(lottieElement).toBeInTheDocument();
  });

  it('should apply the correct size', () => {
    render(
      <AnimationLottie
        animationData={{}}
        size={300}
        data-testid="lottie-animation"
      />,
    );

    const lottieElement = screen.getByTestId('lottie-animation');

    expect(lottieElement).toHaveStyle({ width: '300px', height: '300px' });
  });
});
