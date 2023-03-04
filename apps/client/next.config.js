const path = require("path");
const { withPlaiceholder } = require("@plaiceholder/next");

const { withPlausibleProxy } = require("next-plausible");

const withPlausible = withPlausibleProxy({
  subdirectory: "events",
  scriptName: "script",
  customDomain: "https://plausible.raphael-catarino.fr",
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: [
      new URL(process.env.NEXT_PUBLIC_STRAPI_PUBLIC_URL).hostname,
      process.env.NEXT_PUBLIC_S3_BUCKET_HOST,
    ],
  },
  webpack(config) {
    config.resolve.alias["@helpers"] = path.resolve(__dirname, "helpers");
    config.resolve.alias["@components"] = path.resolve(__dirname, "components");
    config.resolve.alias["@models"] = path.resolve(__dirname, "models");
    config.resolve.alias["@hooks"] = path.resolve(__dirname, "hooks");
    config.resolve.alias["@styles"] = path.resolve(__dirname, "styles");
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = withBundleAnalyzer(
  withPlausible(withPlaiceholder(nextConfig))
);
