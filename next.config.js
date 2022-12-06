const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // assuming you were using the Sanity.io image CDN
    // domains is an array of comma-separated strings
    // ['cdn.sanity.io', 'cdn.not-sanity.io', 'another domain']
    domains: ["cdn.sanity.io"],
  },
});

module.exports = nextConfig;
