'use client';

import Image from 'next/image';

import { DialogTrigger } from '@/components/ui/dialog';

import { ComicCardProps } from './comic-card.types';

export function ComicCard({ comic, onSetSelectedComic }: ComicCardProps) {
  const { description, thumbnail, title } = comic;

  return (
    <DialogTrigger asChild>
      <button
        className="transition-transform duration-300 hover:scale-105 appearance-none border-none bg-transparent p-0 m-0 w-full text-left"
        onClick={() => onSetSelectedComic(comic)}
      >
        <div className="max-[1440px]:h-[112px] cursor-pointer bg-gray-200 rounded-2xl h-[160px] w-full">
          <div className="flex flex-row items-start justify-between h-full">
            <div className="relative p-4 flex-shrink-0">
              <Image
                src={thumbnail}
                alt={title}
                width={121}
                height={121}
                quality={100}
                className="rounded-2xl w-[100px] h-[100px] max-[1440px]:w-[80px] max-[1440px]:h-[80px]"
              />
            </div>

            <div className="flex flex-col py-4 flex-1">
              <h2 className="max-[1440px]:text-sm text-sm md:text-base font-bold line-clamp-2">
                {title}
              </h2>
              <p className="max-[1440px]:text-xs max-[1440px]:line-clamp-1 text-xs md:text-sm line-clamp-3">
                {description}
              </p>
            </div>
          </div>
        </div>
      </button>
    </DialogTrigger>
  );
}
