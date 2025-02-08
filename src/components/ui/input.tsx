import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `
          flex h-14 w-full rounded-2xl border border-blue-400 bg-blue-400
          px-3 py-2 text-white font-bold ring-offset-blue-400
          file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground
          placeholder:text-gray-200 placeholder:font-bold
          focus-visible:outline-none focus-visible:ring-2 focus-visible:border-white
          focus-visible:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
          `,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
