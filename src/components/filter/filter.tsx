'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

import { FilterValues } from './filter.types';

export const filterSchema = z.object({
  characterName: z.string().optional(),
  onlyFavorites: z.boolean().optional(),
});

export function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      characterName: searchParams?.get('characterName') || '',
      onlyFavorites: searchParams?.get('onlyFavorites') === 'true',
    },
  });

  useEffect(() => {
    if (!searchParams) return;

    const characterName = getValues('characterName');
    const onlyFavorites = getValues('onlyFavorites');

    const newCharacterName = searchParams.get('characterName') || '';
    const newOnlyFavorites = searchParams.get('onlyFavorites') === 'true';

    if (characterName !== newCharacterName) {
      setValue('characterName', newCharacterName);
    }

    if (onlyFavorites !== newOnlyFavorites) {
      setValue('onlyFavorites', newOnlyFavorites);
    }
  }, [searchParams]);

  function onSubmit(data: FilterValues) {
    const params = new URLSearchParams();

    if (data.characterName) params.set('characterName', data.characterName);
    if (data.onlyFavorites)
      params.set('onlyFavorites', String(data.onlyFavorites));

    router.push(`?${params.toString()}`, { scroll: false });
  }

  function resetFilters() {
    setValue('characterName', '');
    setValue('onlyFavorites', false);

    router.push(`?`, { scroll: false });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-start space-y-2 mt-8">
        <Label htmlFor="character-name" className="text-white font-bold">
          Character Name:
        </Label>
        <Input
          id="character-name"
          type="text"
          placeholder="Tell me the character name..."
          {...register('characterName')}
        />
        {errors.characterName && (
          <span className="text-red-500 text-sm">
            {errors.characterName.message}
          </span>
        )}
      </div>

      <div className="flex flex-col items-start space-y-2 mt-8">
        <Label htmlFor="only-favorites" className="text-white font-bold">
          Show only favorites?
        </Label>
        <Switch
          id="only-favorites"
          checked={watch('onlyFavorites')}
          onCheckedChange={(checked) => setValue('onlyFavorites', checked)}
        />
      </div>

      <div className="flex flex-row items-start gap-2">
        <button
          type="submit"
          className="mt-6 bg-emerald-500 text-white font-bold py-2 px-4 rounded"
        >
          Apply Filters
        </button>
        <button
          type="button"
          onClick={() => resetFilters()}
          className="mt-6 bg-rose-500 text-white font-bold py-2 px-4 rounded"
        >
          Reset Filters
        </button>
      </div>
    </form>
  );
}
