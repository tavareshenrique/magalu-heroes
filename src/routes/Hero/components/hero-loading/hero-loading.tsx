'use client';

import dynamic from 'next/dynamic';

import * as loadingLottie from '@/assets/lotties/loading-lottie.json';

const LoadingHeroes = dynamic(
  () =>
    import('@/components/animation-lottie/animation-lottie').then(
      (mod) => mod.AnimationLottie,
    ),
  {
    ssr: false,
  },
);

export function HeroLoading() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <LoadingHeroes animationData={loadingLottie} />
      <p className="text-2xl mt-4">Loading...</p>
    </div>
  );
}
