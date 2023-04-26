/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'encrypted-tbn0.gstatic.com',
      'www.chick-fil-a.com',
      'sparinc.com',
      'www.lifetime.life',
      'www.halliburton.com',
      'via.placeholder.com',
    ],
  },
};

module.exports = nextConfig;
