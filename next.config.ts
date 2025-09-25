/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  // 👇 Ajuste para o GitHub Pages
  //basePath: isProd ? '/my-portfolio' : '',
  //assetPrefix: isProd ? '/my-portfolio/' : '',
};

module.exports = nextConfig;
