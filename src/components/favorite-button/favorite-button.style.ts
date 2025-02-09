import { tv } from '@/lib/tv';

export const FavoriteButtonVariants = tv({
  base: `
   absolute bottom-0 left-1/2
   flex items-center justify-center
   h-11 w-11
   transform -translate-x-1/2 p-2
   rounded-xl
   max-[1440px]:w-8 max-[1440px]:h-8
   max-[1440px]:bottom-2
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
  },
});
