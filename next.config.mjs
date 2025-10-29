/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // jer koristiš static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'udruzenjeart.me',
      },
      {
        protocol: 'https',
        hostname: 'www.udruzenjeart.me',
      },
    ],
  },
  optimizeFonts: false,
};

export default nextConfig;