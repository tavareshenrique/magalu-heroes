import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { SimplePaginationProps } from './simple-pagination.types';

export function SimplePagination({
  isLastPage,
  page,
  setPage,
}: SimplePaginationProps) {
  return (
    <div className="md:my-2 p-4 flex my-8">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer disabled:cursor-not-allowed"
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className="cursor-pointer disabled:cursor-not-allowed"
              disabled={isLastPage}
              onClick={() => setPage(page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
