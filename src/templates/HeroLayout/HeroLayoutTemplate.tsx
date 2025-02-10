import { LayoutFilter } from './components/layout-filter/layout-filter';
import { LayoutLogo } from './components/layout-logo/layout-logo';
import { HeroLayoutTemplateProps } from './HeroLayoutTemplate.types';

export function HeroLayoutTemplate({ children }: HeroLayoutTemplateProps) {
  return (
    <div className="md:flex-row md:h-screen flex flex-col">
      <section className="md:w-[392px] md:bg-sky-550 h-full">
        <LayoutLogo />

        <LayoutFilter />
      </section>

      <main className="flex-1">{children}</main>
    </div>
  );
}
