import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [new URL('https://placehold.co/600x400/png')],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: 's3.amazonaws.com', // for grabbing image from trusted sources only 
        hostname: '**', // this allows images from, all sources 
        // port: '',
        // pathname: '/my-bucket/**',
        // search: '',
      },
    ],
  },
};

export default nextConfig;
