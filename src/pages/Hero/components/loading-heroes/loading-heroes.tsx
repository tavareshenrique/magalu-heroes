'use client';

import Lottie from 'react-lottie-player';

import * as loadingLottie from '@/assets/lotties/loading-lottie.json';

export function LoadingHeroes() {
  return (
    <Lottie
      loop
      animationData={loadingLottie}
      play
      style={{ width: 200, height: 200 }}
    />
  );
}
