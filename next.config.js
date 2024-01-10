/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github.com',
          port: '',
          pathname: '/joannaotmianowska/portfolio-nextjs/assets/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  