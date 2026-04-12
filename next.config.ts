import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    // Expo web export uses absolute asset paths like /assets/... and /_expo/...
    // When hosted under /taibai-demo, we rewrite those to the correct subpath.
    return [
      {
        source: "/assets/:path*",
        destination: "/taibai-demo/assets/:path*",
      },
      {
        source: "/_expo/:path*",
        destination: "/taibai-demo/_expo/:path*",
      },
    ];
  },
};

export default nextConfig;
