module.exports = {
  reactStrictMode: true, // Enable React strict mode
  poweredByHeader: false, // Disable the powered by header in responses

  async rewrites() {
    return [
      {
        source: '/app/:path*', // Define the source URL pattern
        destination: '/:path*', // Define the destination URL pattern
      },
    ];
  },
};
