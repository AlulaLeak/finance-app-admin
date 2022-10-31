/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  webpack: true,
  images: {
    domains: ["dummyjson.com"],
  },
};

module.exports = nextConfig;
