import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { LayoutStatisticText } from './layout-statistic-text';

describe('LayoutStatisticText', () => {
  it('should render the title correctly', () => {
    render(<LayoutStatisticText title="Test Title" value={100} />);
    const title = screen.getByText(/Test Title/i);

    expect(title).toBeInTheDocument();
  });

  it('should render the value correctly', () => {
    render(<LayoutStatisticText title="Test Title" value={100} />);

    const value = screen.getByTestId('Test Title');

    expect(value).toHaveTextContent('100');
  });

  it('should have the correct styles', () => {
    render(<LayoutStatisticText title="Test Title" value={100} />);

    const valueElement = screen.getByTestId('Test Title');

    expect(valueElement).toHaveClass('text-white font-extrabold text-xl');
  });
});
