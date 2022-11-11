/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  webpack: true,
  images: {
    domains: ["lh3.googleusercontent.com", "via.placeholder.com", "cdn.sstatic.net"],
  },
};

module.exports = nextConfig;
