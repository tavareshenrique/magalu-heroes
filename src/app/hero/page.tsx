import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';

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
    </div>
  );
}
