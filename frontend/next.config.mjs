/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
  logging: {
    fetches: {
      fullUrl: true,
    }
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
