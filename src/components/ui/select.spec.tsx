import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

describe('Select Component', () => {
  it('should render the select component', () => {
    render(
      <Select>
        <SelectTrigger>Select an option</SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );

    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('should open the select dropdown when clicked', () => {
    render(
      <Select>
        <SelectTrigger>Select an option</SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );

    fireEvent.click(screen.getByText('Select an option'));

    expect(screen.getByText('Option 1')).toBeInTheDocument();

    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('should select an option when clicked', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );

    fireEvent.click(screen.getByText('Select an option'));

    fireEvent.click(screen.getByText('Option 1'));

    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });
});
