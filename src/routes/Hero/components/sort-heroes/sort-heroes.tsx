import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SortHeroesProps {
  value: string;
  onChange: (value: string) => void;
}

const DEFAULT_VALUE = 'name';

export function SortHeroes({ onChange, value }: SortHeroesProps) {
  return (
    <Select defaultValue={value || DEFAULT_VALUE} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]" data-testid="sort-heroes-trigger">
        <SelectValue placeholder="Select sorting" />
      </SelectTrigger>
      <SelectContent data-testid="sort-heroes-content">
        <SelectGroup>
          <SelectLabel>Options</SelectLabel>
          <SelectItem value="name" data-testid="sort-heroes-name">
            Name
          </SelectItem>
          <SelectItem value="modified" data-testid="sort-heroes-modified">
            Modification
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
