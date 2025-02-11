/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'api.slingacademy.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: ''
      }
    ]
  },
  transpilePackages: ['geist', 'react-map-gl', 'mapbox-gl'],
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  optimizeFonts: false,
  compiler: {
    styledComponents: true
  },
  // Development-specific settings
  ...(process.env.NODE_ENV === 'development' && {
    eslint: {
      dirs: ['app', 'components', 'lib', 'types'] // Directories to lint
    },
    typescript: {
      ignoreBuildErrors: false // Enforce type checking in development
    },
    devIndicators: {
      buildActivity: true,
      buildActivityPosition: 'bottom-right'
    }
  }),
  // Production-specific settings
  ...(process.env.NODE_ENV === 'production' && {
    eslint: {
      ignoreDuringBuilds: true
    },
    typescript: {
      ignoreBuildErrors: true
    }
  })
};

module.exports = nextConfig;
