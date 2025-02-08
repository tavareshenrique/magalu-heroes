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
    <div className="flex flex-row h-screen">
      <section className="md:w-[392px] bg-sky-550 h-full">
        <div className="md:h-[241px] bg-sky-650 flex items-center justify-center">
          <Image
            src="/images/logo.svg"
            alt={ALT_TITLE}
            title={ALT_TITLE}
            width={170}
            height={170}
            quality={100}
          />
        </div>

        <div className="p-14">
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

      <main className="flex-1">{children}</main>
    </div>
  );
}
