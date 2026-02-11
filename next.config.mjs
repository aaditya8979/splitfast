import createNextIntlPlugin from 'next-intl/plugin';

// 🟢 Point this to your specific file path
const withNextIntl = createNextIntlPlugin(
  './src/i18n/requests.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing "ignore errors" settings
  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  
};

export default withNextIntl(nextConfig);