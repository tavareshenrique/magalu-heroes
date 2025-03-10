import { Skeleton } from '@/components/ui/skeleton';

export function AllComicsSkeleton() {
  return (
    <div
      data-testid="all-comics-skeleton"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton
          data-testid="skeleton-item"
          className="max-[1440px]:h-[112px] rounded-2xl h-[160px] w-full"
          key={index}
        />
      ))}
    </div>
  );
}
