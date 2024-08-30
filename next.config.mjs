/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
  crossOrigin: "anonymous",
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
};

export default nextConfig;
