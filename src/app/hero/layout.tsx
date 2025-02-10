import { NavFilter } from '@/components/nav-filter/nav-filter';
import { NavImage } from '@/components/nav-image/nav-image';

export default async function HeroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:flex-row md:h-screen flex flex-col">
      <section className="md:w-[392px] md:bg-sky-550 h-full">
        <NavImage />

        <NavFilter />
      </section>

      <main className="flex-1">{children}</main>
    </div>
  );
}
