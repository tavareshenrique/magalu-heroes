import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['i.annihil.us'],
  },
  rewrites: async () => {
    return [
      {
        source: '/',
        destination: '/hero',
      },
    ];
  },
};

export default nextConfig;
