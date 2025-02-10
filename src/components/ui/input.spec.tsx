import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Input } from '@/components/ui/input';

describe('Input Component', () => {
  it('should render the input field', () => {
    render(<Input placeholder="Enter text" />);

    const input = screen.getByPlaceholderText('Enter text');

    expect(input).toBeInTheDocument();
  });

  it('should accept text input', () => {
    render(<Input placeholder="Type here" />);

    const input = screen.getByPlaceholderText('Type here') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Hello World' } });

    expect(input.value).toBe('Hello World');
  });

  it('should be disabled when the disabled prop is passed', () => {
    render(<Input disabled placeholder="Disabled input" />);

    const input = screen.getByPlaceholderText('Disabled input');

    expect(input).toBeDisabled();
  });

  it('should call onChange when typing', () => {
    const handleChange = vi.fn();

    render(<Input onChange={handleChange} placeholder="Type something" />);

    const input = screen.getByPlaceholderText('Type something');

    fireEvent.change(input, { target: { value: 'Test' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should support different input types', () => {
    render(<Input type="password" placeholder="Enter password" />);

    const input = screen.getByPlaceholderText('Enter password');

    expect(input).toHaveAttribute('type', 'password');
  });
});
