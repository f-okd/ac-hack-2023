/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        // allow all domains and subdomains
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
