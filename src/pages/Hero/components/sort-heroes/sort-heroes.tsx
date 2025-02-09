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
  );
}
