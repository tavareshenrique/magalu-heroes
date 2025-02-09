'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams, useRouter } from 'next/navigation';
import * as z from 'zod';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

import { FilterValues } from './filter.types';

export const filterSchema = z.object({
  heroName: z.string().optional(),
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
    formState: { errors },
  } = useForm({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      heroName: searchParams?.get('heroName') || '',
      onlyFavorites: searchParams?.get('onlyFavorites') === 'true',
    },
  });

  useEffect(() => {
    if (searchParams) {
      setValue('heroName', searchParams.get('heroName') || '');
      setValue('onlyFavorites', searchParams.get('onlyFavorites') === 'true');
    }
  }, [searchParams, setValue]);

  const onSubmit = (data: FilterValues) => {
    const params = new URLSearchParams();

    if (data.heroName) params.set('heroName', data.heroName);
    if (data.onlyFavorites)
      params.set('onlyFavorites', String(data.onlyFavorites));

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-start space-y-2 mt-8">
        <Label htmlFor="hero-name" className="text-white font-bold">
          Hero Name:
        </Label>
        <Input
          id="hero-name"
          type="text"
          placeholder="Tell me the hero's name..."
          {...register('heroName')}
        />
        {errors.heroName && (
          <span className="text-red-500 text-sm">
            {errors.heroName.message}
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

      <button
        type="submit"
        className="mt-6 bg-emerald-500 text-white font-bold py-2 px-4 rounded"
      >
        Apply Filters
      </button>
    </form>
  );
}
