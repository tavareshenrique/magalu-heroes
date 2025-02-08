import Image from 'next/image';

import { HeroProvider } from '@/context/HeroContext';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { FavoriteHeroes } from '@/components/favorite-heroes/favorite-heroes';
import { HeroCard } from '@/components/hero-card/hero-card';

const heroes = [
  {
    id: 1,
    name: 'Spider-Man',
    description:
      'Peter Parker is a high school student and a superhero with spider-like abilities.',
    thumbnail: '/images/spider.jpg',
    isFavorite: false,
  },
  {
    id: 2,
    name: 'Spider-Man',
    description:
      'Peter Parker is a high school student and a superhero with spider-like abilities.',
    thumbnail: '/images/spider.jpg',
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Spider-Man',
    description:
      'Peter Parker is a high school student and a superhero with spider-like abilities.',
    thumbnail: '/images/spider.jpg',
    isFavorite: false,
  },
  {
    id: 4,
    name: 'Spider-Man',
    description:
      'Peter Parker is a high school student and a superhero with spider-like abilities.',
    thumbnail: '/images/spider.jpg',
    isFavorite: false,
  },
  {
    id: 5,
    name: 'Spider-Man',
    description:
      'Peter Parker is a high school student and a superhero with spider-like abilities.',
    thumbnail: '/images/spider.jpg',
    isFavorite: false,
  },
  {
    id: 6,
    name: 'Spider-Man',
    description:
      'Peter Parker is a high school student and a superhero with spider-like abilities.',
    thumbnail: '/images/spider.jpg',
    isFavorite: false,
  },
];

export default function Home() {
  return (
    <div className="h-full">
      <div className="flex flex-row-reverse justify-between">
        <Select defaultValue="name">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Options</SelectLabel>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="modified">Modification</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-blue-400">
          <Image
            src="/images/search.svg"
            alt="A magnifying glass symbolizing the search button"
            title="A magnifying glass symbolizing the search button"
            aria-label="Search button"
            width={24}
            height={24}
          />
        </button>
      </div>

      <HeroProvider>
        <FavoriteHeroes />

        <div className="mt-8">
          <h1 className="text-xl font-extrabold text-sky-900 mb-6">All</h1>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {heroes.map((hero) => (
                <HeroCard
                  key={hero.id}
                  hero={{
                    id: String(hero.id),
                    description: hero.description,
                    name: hero.name,
                    thumbnail: hero.thumbnail,
                    isFavorite: hero.isFavorite,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </HeroProvider>

      <div className="md:my-2 p-4 flex my-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
