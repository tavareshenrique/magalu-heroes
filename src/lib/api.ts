'use client';

import axios from 'axios';
import CryptoJS from 'crypto-js';

import { env } from '@/env';

const BASE_URL = 'https://gateway.marvel.com/v1/public';

function authenticated() {
  const ts = new Date().getTime();
  const publicKey = env.NEXT_PUBLIC_PB_API_KEY!;
  const privateKey = env.NEXT_PUBLIC_PV_API_KEY!;

  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

  return {
    ts,
    hash,
  };
}

const { ts, hash } = authenticated();

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    ts,
    hash,
    apikey: env.NEXT_PUBLIC_PB_API_KEY,
  },
});
