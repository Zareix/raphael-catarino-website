const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    domains: ['localhost'],
  },
  webpack(config) {
    config.resolve.alias['@helpers'] = path.resolve(__dirname, 'helpers');
    config.resolve.alias['@components'] = path.resolve(__dirname, 'components');
    config.resolve.alias['@models'] = path.resolve(__dirname, 'models');
    config.resolve.alias['@'] = path.resolve(__dirname, '.');
    return config;
  },
};

module.exports = nextConfig;
