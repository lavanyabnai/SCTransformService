/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint checks during builds
 
  },
  experimental: {
    ppr: true,
  },
};

export default nextConfig;
