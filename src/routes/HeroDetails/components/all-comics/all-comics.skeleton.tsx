import { Skeleton } from '@/components/ui/skeleton';

export function AllComicsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton
          className="max-[1440px]:h-[112px] rounded-2xl h-[160px] w-full"
          key={index}
        />
      ))}
    </div>
  );
}
