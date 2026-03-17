import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are consistent for static hosting
  trailingSlash: true,
};

export default nextConfig;
