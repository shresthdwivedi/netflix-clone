import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  exports: {
    output: 'standalone',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
