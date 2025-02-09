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

import { FavoriteHeroes } from './components/favorite-heroes/favorite-heroes';
import { AllHeroes } from './components/all-heroes/all-heroes';
import { FilterSheet } from './components/filter-sheet/filter-sheet';
import { FilterButton } from './components/filter-button/filter-button';

import { HeroTemplateProps } from './HeroTemplate.types';

export function HeroTemplate({ heroes }: HeroTemplateProps) {
  return (
    <HeroProvider>
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

          <FilterButton />
        </div>

        <FavoriteHeroes />

        <AllHeroes heroes={heroes} />

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

        <FilterSheet />
      </div>
    </HeroProvider>
  );
}
