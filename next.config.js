/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com']
  },
  experimental: {
    appDir: true
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  // Disable caching during builds
  generateBuildId: async () => {
    return `build-${new Date().getTime()}`;
  }
};

module.exports = nextConfig;
