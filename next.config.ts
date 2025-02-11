import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.annihil.us',
      },
      {
        protocol: 'https',
        hostname: 'i.annihil.us',
      },
    ],
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
