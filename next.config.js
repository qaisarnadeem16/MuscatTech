/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  // assetPrefix: isProd ? 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' : undefined,
}

