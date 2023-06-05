module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: '/app/:path*',
        destination: '/:path*',
      },
    ];
  },
};
