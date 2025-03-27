/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This enables static exports
  images: {
    unoptimized: true, // Required for static export
    domains: ['live.staticflickr.com']
  },
  trailingSlash: true, // This helps with static exports
}

module.exports = nextConfig