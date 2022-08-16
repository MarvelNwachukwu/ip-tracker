/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  ...nextConfig,
  reactStrictMode: true,
  env: {
    GEO_IPIFY_API_KEY: process.env.GEO_IPIFY_API_KEY,
  }
}