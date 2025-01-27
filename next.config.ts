import type { NextConfig } from "next";

const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {


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
};

export default withNextIntl(nextConfig);
