import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001'
      }
    ],
  },
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: '/api/payload', // The Payload API route
      },
    ];
  },
};

export default nextConfig;
