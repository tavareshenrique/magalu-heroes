import { Label } from '@/components/ui/label';

import { LayoutStatisticTextProps } from './layout-statistic-text.types';

export function LayoutStatisticText({
  title,
  value,
}: LayoutStatisticTextProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <Label id={title} className="text-white font-bold text-lg">
        {title}
      </Label>

      <span
        className="text-white font-extrabold text-xl"
        id={title}
        data-testid={title}
      >
        {value}
      </span>
    </div>
  );
}
