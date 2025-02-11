'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const ALT_TITLE =
  "A silhouette of a superhero all in white flying with his right hand pointing to the sky, symbolizing the application's logo.";

export function LayoutLogo() {
  const pathname = usePathname();

  const isHeroDetailPage = /^\/hero\/\d+$/.test(pathname!);

  const className = clsx(
    'h-[241px] bg-sky-650 flex items-center justify-center',
    {
      'hidden md:flex': isHeroDetailPage,
    },
  );

  return (
    <div className={className}>
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
