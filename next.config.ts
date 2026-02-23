import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-ba89044168544435870d953548f2dc07.r2.dev",
      },
    ],
  },
};

export default nextConfig;
