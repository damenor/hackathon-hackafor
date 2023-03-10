/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['unavatar.io']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@import "imports.scss";`
  },
}

module.exports = nextConfig
