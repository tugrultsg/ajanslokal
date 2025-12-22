import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Disabled to allow API routes for Contact Form
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
