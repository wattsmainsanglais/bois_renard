import type { NextConfig } from "next";

const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();

const cspHeader = `
    default-src 'self' http://localhost:3000 https://localhost:3000 https://bois-renard.vercel.app/ https://giteduboisrenard.fr https://www.giteduboisrenard.fr;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://maps.googleapis.com https://maps.gstatic.com http://localhost:3000 https://www.googleapis.com https://bois-renard.vercel.app/ https://giteduboisrenard.fr https://www.giteduboisrenard.fr;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://bois-renard.vercel.app/ https://giteduboisrenard.fr https://www.giteduboisrenard.fr;
    connect-src data: https://maps.googleapis.com https://www.googleapis.com https://maps.gstatic.com https://www.gstatic.com http://localhost:3000 https://localhost:3000 ws://localhost:3000 https://bois-renard.vercel.app/ https://giteduboisrenard.fr https://www.giteduboisrenard.fr;
    img-src 'self' 'unsafe-inline' blob: data: https://maps.googleapis.com  https://maps.gstatic.com https://giteduboisrenard.fr https://www.giteduboisrenard.fr;
    font-src 'self' https://fonts.gstatic.com data:application;
    worker-src blob:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

const nextConfig: NextConfig = {
  
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  

  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yavuzceliker.github.io',
        port: '',
        pathname: '/sample-images/**',
        search: '',
      },
    ],
  },

  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ]
  },


};

export default withNextIntl(nextConfig);
