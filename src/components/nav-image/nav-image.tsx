'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

const ALT_TITLE =
  "A silhouette of a superhero all in white flying with his right hand pointing to the sky, symbolizing the application's logo.";

export function NavImage() {
  const pathname = usePathname();

  const isHeroDetailPage = /^\/hero\/\d+$/.test(pathname!);

  return (
    <div
      className={`h-[241px] bg-sky-650 flex items-center justify-center ${isHeroDetailPage && 'hidden md:flex'}`}
    >
      <Image
        src="/images/logo.png"
        alt={ALT_TITLE}
        title={ALT_TITLE}
        width={170}
        height={170}
        quality={100}
      />
    </div>
  );
}
