import { tv } from '@/lib/tv';

export const FavoriteButtonVariants = tv({
  base: `
   absolute bottom-0 left-1/2
   flex items-center justify-center
   h-11 w-11
   transform -translate-x-1/2 p-2
   rounded-xl
  `,
  variants: {
    isFavorite: {
      true: `
        bg-rose-300
      `,
      false: `
        bg-gray-300
        hover:bg-rose-300
      `,
    },
  },
});
