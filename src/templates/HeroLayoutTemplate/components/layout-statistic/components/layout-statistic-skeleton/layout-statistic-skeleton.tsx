import { Skeleton } from '@/components/ui/skeleton';

export function LayoutStatisticSkeleton() {
  return (
    <div className="md:flex flex-col p-14 hidden">
      <h1 className="text-2xl font-extrabold text-white mb-6">📊 Statistics</h1>

      <Skeleton
        className="md:flex flex-col p-14 w-full h-56 hidden"
        data-testid="skeleton"
      />
    </div>
  );
}
