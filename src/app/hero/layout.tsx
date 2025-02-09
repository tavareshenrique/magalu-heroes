import Image from 'next/image';

import { Filter } from '@/components/filter/filter';

const ALT_TITLE =
  "A silhouette of a superhero all in white flying with his right hand pointing to the sky, symbolizing the application's logo.";

export default function HeroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:flex-row md:h-screen flex flex-col">
      <section className="md:w-[392px] md:bg-sky-550 h-full">
        <div className="h-[241px] bg-sky-650 flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt={ALT_TITLE}
            title={ALT_TITLE}
            width={170}
            height={170}
            quality={100}
          />
        </div>

        <div className="md:block p-14 hidden">
          <h1 className="text-2xl font-extrabold text-white mb-6">Filters</h1>

          <Filter />
        </div>
      </section>

      <main className="md:px-14 md:mt-10 flex-1 mt-4 px-6">{children}</main>
    </div>
  );
}
