/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['https://variety.com'],
    formats: ['image/avif', 'image/webp', 'image/jpeg'],
  },
}
