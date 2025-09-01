import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.pexels.com"], // whitelist Pexels domain
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
};

export default nextConfig;
