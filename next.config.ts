import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Use remotePatterns to allow images from specific domains and paths
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.thesimpsonsapi.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  productionBrowserSourceMaps: false,
  turbopack: {},
};

export default nextConfig;
