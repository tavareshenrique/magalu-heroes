'use client';

import Lottie from 'react-lottie-player';

import { AnimationLottieProps } from './animation-lottie.types';

export function AnimationLottie({
  animationData,
  size = 200,
}: AnimationLottieProps) {
  return (
    <Lottie
      loop
      animationData={animationData}
      play
      style={{ width: size, height: size }}
    />
  );
}
