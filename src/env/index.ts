import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_PB_API_KEY: z.string(),
  NEXT_PUBLIC_PV_API_KEY: z.string(),
});

const _env = envSchema.safeParse({
  NEXT_PUBLIC_PB_API_KEY: process.env.NEXT_PUBLIC_PB_API_KEY,
  NEXT_PUBLIC_PV_API_KEY: process.env.NEXT_PUBLIC_PV_API_KEY,
});

if (!_env.success) {
  console.error('❌ Invalid environment variables: ', _env.error.format());
  throw new Error('Invalid environment variables.');
}

export const env = _env.data;
