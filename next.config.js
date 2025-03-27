/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['live.staticflickr.com']
  },
  trailingSlash: true,
}

module.exports = nextConfig