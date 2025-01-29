/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "api.microlink.io", // Microlink Image Preview
        ],
      },
      typescript: {
        ignoreBuildErrors: "true",
      },
      eslint: {
        ignoreDuringBuilds: "true",
      },
};

export default nextConfig;
