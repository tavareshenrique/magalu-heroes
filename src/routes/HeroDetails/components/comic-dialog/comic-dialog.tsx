import Image from 'next/image';

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { ComicDialogProps } from './comic-dialog.types';

export function ComicDialog({ comic }: ComicDialogProps) {
  const { description, thumbnail, title } = comic;

  return (
    <DialogPortal>
      <DialogOverlay />

      <DialogContent className="bg-blue-200 rounded-2xl p-4 max-w-[800px] w-9/12 ">
        <DialogHeader>
          <div className="flex flex-col items-center mt-10 md:mt-0 md:flex-row md:items-start justify-between h-full">
            <Image
              src={thumbnail}
              alt={title}
              width={200}
              height={200}
              quality={100}
              className="rounded-2xl object-cover"
            />

            <div className="flex flex-col py-4 flex-1 md:ml-4">
              <DialogTitle className="text-lg font-bold line-clamp-4 md:line-clamp-none">
                {title}
              </DialogTitle>
              <DialogDescription className="mt-4 text-base text-gray-800 line-clamp-6 md:line-clamp-none">
                {description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <DialogFooter>
          <DialogTrigger asChild>
            <button
              type="button"
              className="bg-rose-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </DialogPortal>
  );
}
