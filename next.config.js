/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextTranslate = require("next-translate-plugin");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withBundleAnalyzer(nextTranslate(withPWA(nextConfig)));
