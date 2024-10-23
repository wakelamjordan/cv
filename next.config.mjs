/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "wakelamjordan.github.io" },
    ],
  },
};

export default nextConfig;
