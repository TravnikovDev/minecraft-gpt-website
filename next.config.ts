import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Using assetPrefix in addition to basePath for static assets
  assetPrefix: process.env.NODE_ENV === "production" ? "/minecraft-gpt-website" : "",
  basePath: process.env.NODE_ENV === "production" ? "/minecraft-gpt-website" : "",
  images: {
    unoptimized: true
  },
  // Add trailing slash to improve path handling
  trailingSlash: true
};

export default nextConfig;
