import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

describe('Pagination Component', () => {
  it('should render the pagination component', () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => {}} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={() => {}} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>,
    );

    expect(
      screen.getByRole('navigation', { name: /pagination/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /previous/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '1' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  it('should call onClick when Previous button is clicked', () => {
    const handleClick = vi.fn();

    render(<PaginationPrevious onClick={handleClick} />);

    const prevButton = screen.getByRole('button', { name: /previous/i });

    fireEvent.click(prevButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should call onClick when Next button is clicked', () => {
    const handleClick = vi.fn();

    render(<PaginationNext onClick={handleClick} />);

    const nextButton = screen.getByRole('button', { name: /next/i });

    fireEvent.click(nextButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
