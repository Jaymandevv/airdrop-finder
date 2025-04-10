const nextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "freeairdrop.io",
      },
    ],
  },
};

export default nextConfig;
