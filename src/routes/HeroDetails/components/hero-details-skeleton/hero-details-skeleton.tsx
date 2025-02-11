import Image from 'next/image';

import { Skeleton } from '@/components/ui/skeleton';

export function HeroDetailsSkeleton() {
  return (
    <>
      <div className="w-full max-h-[200px] overflow-hidden md:hidden">
        <Skeleton className="w-full h-52" data-testid="skeleton" />
      </div>

      <div className="md:px-14 md:mt-10 mt-4 px-6">
        <Skeleton className="w-10 h-10" data-testid="skeleton" />

        <div className="flex flex-row mt-5 md:mt-10">
          <div className="relative hidden md:block">
            <Skeleton className="w-48 h-48" data-testid="skeleton" />
          </div>

          <div className="flex flex-col items-start md:ml-4 w-full md:mx-4 md:mt-0">
            <div className="flex flex-row items-center justify-between w-full">
              <Skeleton
                className="mr-4 md:mr-0 w-full h-10"
                data-testid="skeleton"
              />

              <Skeleton className="ml-4 w-10 h-10" data-testid="skeleton" />
            </div>

            <div className="w-full mt-4">
              <Skeleton
                className="mr-4 md:mr-4 mt-2 w-full h-32"
                data-testid="skeleton"
              />
            </div>
          </div>
        </div>

        <div className="max-[1440px]:mt-2 mt-8 flex flex-row items-center justify-start">
          <Image
            src="/images/magazine-luiza.webp"
            alt="Blue shopping bag, symbol of Magazine Luiza Store."
            width={48}
            height={48}
            className="rounded-full mr-2 w-auto h-auto max-w-[10%] max-[1440px]:w-[4%] sm:max-w-[48px]"
            quality={10}
          />

          <Skeleton className="w-full h-10" data-testid="skeleton" />
        </div>

        <Skeleton
          className="h-10 w-full max-[1440px]:mt-4 mt-10"
          data-testid="skeleton"
        />
      </div>
    </>
  );
}
