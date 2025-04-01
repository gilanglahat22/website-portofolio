/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Set Node.js specific modules to false on the client to prevent build errors
      config.resolve.fallback = {
        ...config.resolve.fallback,
        tls: false,
        fs: false,
        child_process: false,
        http2: false,
      };
    }

    return config;
  },
};

export default nextConfig;
