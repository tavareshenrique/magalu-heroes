import Image from 'next/image';

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
  DialogPortal,
  DialogFooter,
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
          <div className="flex flex-row items-start justify-between h-full">
            <Image
              src={thumbnail}
              alt={title}
              width={200}
              height={200}
              className="rounded-2xl"
            />

            <div className="flex flex-col py-4 flex-1 ml-4">
              <DialogTitle className="text-lg font-bold">{title}</DialogTitle>
              <DialogDescription className="mt-4 text-base text-gray-800">
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
