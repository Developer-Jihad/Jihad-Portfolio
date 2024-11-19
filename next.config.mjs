/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        port: '',
        pathname: '/icons/**',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/fluency/**',
      },
    ],
    domains: ['skillicons.dev', 'img.icons8.com'],
  },
};

export default nextConfig;
