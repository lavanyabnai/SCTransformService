/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint checks during builds
 
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
