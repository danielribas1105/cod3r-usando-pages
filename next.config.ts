import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
   /* config options here */
   reactStrictMode: true,
   i18n: {
      locales: ['pt', 'en'],
      defaultLocale: 'pt',
   },
   images: {
      domains: ['dummyimage.com'],
   },
}

export default nextConfig
