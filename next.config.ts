import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  output: 'export', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
