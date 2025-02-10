import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { NotFoundAnimation } from './not-found-animation';

vi.mock('next/dynamic', () => ({
  __esModule: true,
  default: vi.fn(() => {
    const MockComponent = () => <div data-testid="lottie-animation" />;
    MockComponent.displayName = 'MockComponent';
    return MockComponent;
  }),
}));

describe('NotFoundAnimation Component', () => {
  it('should render the Lottie animation', () => {
    render(<NotFoundAnimation />);

    expect(screen.getByTestId('lottie-animation')).toBeInTheDocument();
  });
});
