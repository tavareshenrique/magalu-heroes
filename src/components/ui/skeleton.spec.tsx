import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Skeleton } from '@/components/ui/skeleton';

describe('Skeleton Component', () => {
  it('should render the skeleton component', () => {
    render(<Skeleton className="custom-class" data-testid="skeleton" />);

    const skeleton = screen.getByTestId('skeleton');

    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass(
      'animate-pulse',
      'rounded-md',
      'bg-gray-400',
      'custom-class',
    );
  });
});
