/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the output: 'export' configuration
  images: {
    domains: ['live.staticflickr.com']
  }
}

module.exports = nextConfig