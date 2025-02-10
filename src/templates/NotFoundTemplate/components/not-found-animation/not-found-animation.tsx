'use client';

import dynamic from 'next/dynamic';

import * as notFoundLottie from '@/assets/lotties/404.json';

const NFAnimation = dynamic(
  () =>
    import('@/components/animation-lottie/animation-lottie').then(
      (mod) => mod.AnimationLottie,
    ),
  {
    ssr: false,
  },
);

export function NotFoundAnimation() {
  return <NFAnimation animationData={notFoundLottie} />;
}
