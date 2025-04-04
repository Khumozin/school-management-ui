"use client";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
        { hostname: 'images.pexels.com' },
        { hostname: 'avatars.githubusercontent.com' }
    ],
  }
};

export default nextConfig;
