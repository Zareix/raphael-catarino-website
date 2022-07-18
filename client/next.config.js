const path = require('path');
const { withPlaiceholder } = require('@plaiceholder/next');

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    loader: 'default',
    domains: [new URL(process.env.NEXT_PUBLIC_STRAPI_PUBLIC_URL).hostname],
  },
  webpack(config) {
    config.resolve.alias['@helpers'] = path.resolve(__dirname, 'helpers');
    config.resolve.alias['@components'] = path.resolve(__dirname, 'components');
    config.resolve.alias['@models'] = path.resolve(__dirname, 'models');
    config.resolve.alias['@hooks'] = path.resolve(__dirname, 'hooks');
    return config;
  },
};

module.exports = withPlaiceholder(nextConfig);
