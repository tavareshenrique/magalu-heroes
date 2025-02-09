'use client'; // Necessário no Next.js 15 para componentes que usam `useState` e `useEffect`

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
