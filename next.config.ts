import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for Cloudflare Pages static hosting
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
