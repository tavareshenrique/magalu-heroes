import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  it('should render the button with default styles', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toBeInTheDocument();
  });

  it('should render the button with different variants', () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole('button', { name: /delete/i });

    expect(button).toBeInTheDocument();
  });

  it('should render the button with different sizes', () => {
    render(<Button size="lg">Large</Button>);

    const button = screen.getByRole('button', { name: /large/i });

    expect(button).toBeInTheDocument();
  });

  it('should render as child element when asChild is true', () => {
    render(
      <Button asChild>
        <a href="#">Link</a>
      </Button>,
    );
    const link = screen.getByRole('link', { name: /link/i });

    expect(link).toBeInTheDocument();
  });

  it('should trigger onClick when clicked', () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Click</Button>);
    const button = screen.getByRole('button', { name: /click/i });

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is passed', () => {
    render(<Button disabled>Disabled</Button>);

    const button = screen.getByRole('button', { name: /disabled/i });

    expect(button).toBeDisabled();
  });
});
