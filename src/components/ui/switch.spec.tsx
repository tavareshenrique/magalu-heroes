import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Switch } from '@/components/ui/switch';

describe('Switch Component', () => {
  it('should render the switch component', () => {
    render(<Switch data-testid="switch" />);

    const switchElement = screen.getByTestId('switch');

    expect(switchElement).toBeInTheDocument();
  });

  it('should toggle state when clicked', () => {
    render(<Switch data-testid="switch" />);

    const switchElement = screen.getByTestId('switch');

    fireEvent.click(switchElement);

    expect(switchElement).toHaveAttribute('data-state', 'checked');

    fireEvent.click(switchElement);

    expect(switchElement).toHaveAttribute('data-state', 'unchecked');
  });

  it('should be disabled when the disabled prop is passed', () => {
    render(<Switch data-testid="switch" disabled />);

    const switchElement = screen.getByTestId('switch');

    expect(switchElement).toBeDisabled();
  });
});
