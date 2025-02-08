import Image from 'next/image';

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
import { HeroProvider } from '@/context/HeroContext';

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
        </div>
      </HeroProvider>

      <div className="absolute bottom-0 right-7 left-0">
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
