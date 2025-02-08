import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
