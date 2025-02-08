import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import Image from 'next/image';

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
            src="/images/logo.svg"
            alt={ALT_TITLE}
            title={ALT_TITLE}
            width={170}
            height={170}
            quality={100}
          />
        </div>

        <div className="md:block p-14 hidden">
          <h1 className="text-2xl font-extrabold text-white mb-6">Filters</h1>

          <div className="flex flex-col items-start space-y-2 mt-8">
            <Label htmlFor="hero-name" className="text-white font-bold">
              Hero Name:
            </Label>
            <Input
              id="hero-name"
              type="text"
              placeholder="Tell me the hero's name..."
            />
          </div>

          <div className="flex flex-col items-start space-y-2 mt-8">
            <Label htmlFor="hero-name" className="text-white font-bold">
              Show only favorites?
            </Label>
            <Switch />
          </div>
        </div>
      </section>

      <main className="md:px-14 md:mt-32 flex-1 mt-4 px-6">{children}</main>
    </div>
  );
}
