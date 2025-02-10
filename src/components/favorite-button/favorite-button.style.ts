import { tv } from '@/lib/tv';

export const FavoriteButtonVariants = tv({
  base: `
   flex items-center justify-center
   h-11 w-11
   p-2
   rounded-xl
   max-[1440px]:w-8 max-[1440px]:h-8
  `,
  variants: {
    isFavorite: {
      true: `
        bg-rose-300
        hover:bg-gray-300
      `,
      false: `
        bg-gray-300
        hover:bg-rose-300
      `,
    },
    reset: {
      true: `
        static
      `,
      false: `
        absolute left-1/2
        transform -translate-x-1/2
      `,
    },
  },
});
