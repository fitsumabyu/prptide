/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is enabled by default in Next.js 13.4+, no need for experimental.appDir
  typescript: {
    // Allow production builds to successfully complete even if there are type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Allow production builds to successfully complete even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
  // Ensure Next.js only looks in the app directory for routes
  pageExtensions: ['tsx', 'ts'],
}

module.exports = nextConfig
