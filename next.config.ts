/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  images: {
    unoptimized: true,
  },

  basePath: isProd ? '/m-portfolio' : '',
  assetPrefix: isProd ? '/m-portfolio' : '',
};

module.exports = nextConfig;
