import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { SimplePagination } from './simple-pagination';

describe('SimplePagination Component', () => {
  it('should render pagination component', () => {
    render(<SimplePagination page={1} setPage={vi.fn()} isLastPage={false} />);

    expect(
      screen.getByRole('navigation', { name: /pagination/i }),
    ).toBeInTheDocument();
  });

  it('should disable the previous button when on the first page', () => {
    render(<SimplePagination page={0} setPage={vi.fn()} isLastPage={false} />);

    expect(
      screen.getByRole('button', { name: /go to previous page/i }),
    ).toBeDisabled();
  });

  it('should disable the next button when on the last page', () => {
    render(<SimplePagination page={2} setPage={vi.fn()} isLastPage={true} />);

    expect(
      screen.getByRole('button', { name: /go to next page/i }),
    ).toBeDisabled();
  });

  it('should call setPage with next page number when clicking next button', () => {
    const setPageMock = vi.fn();

    render(
      <SimplePagination page={1} setPage={setPageMock} isLastPage={false} />,
    );

    fireEvent.click(screen.getByRole('button', { name: /go to next page/i }));

    expect(setPageMock).toHaveBeenCalledWith(2);
  });

  it('should call setPage with previous page number when clicking previous button', () => {
    const setPageMock = vi.fn();

    render(
      <SimplePagination page={1} setPage={setPageMock} isLastPage={false} />,
    );

    fireEvent.click(
      screen.getByRole('button', { name: /go to previous page/i }),
    );

    expect(setPageMock).toHaveBeenCalledWith(0);
  });
});
