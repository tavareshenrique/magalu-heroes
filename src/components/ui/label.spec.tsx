import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Label } from '@/components/ui/label';

describe('Label Component', () => {
  it('should render the label with text', () => {
    render(<Label>Test Label</Label>);

    const label = screen.getByText('Test Label');

    expect(label).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<Label className="custom-class">Styled Label</Label>);

    const label = screen.getByText('Styled Label');

    expect(label).toHaveClass('custom-class');
  });

  it('should be associated with an input field via htmlFor', () => {
    render(
      <>
        <Label htmlFor="test-input">Label for Input</Label>
        <input id="test-input" type="text" />
      </>,
    );

    const label = screen.getByText('Label for Input');

    expect(label).toHaveAttribute('for', 'test-input');
  });
});
