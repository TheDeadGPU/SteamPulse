import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "store.steampowered.com",
      },
      {
        protocol: "https",
        hostname: "shared.akamai.steamstatic.com",
      },
    ],
  }
};

export default nextConfig;
