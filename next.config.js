const withPWA = require("next-pwa")({
  dest: "public",
});
/** @type {import('next').NextConfig} */
const settings = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // domains is an array of comma-separated strings
    // ['cdn.sanity.io', 'cdn.not-sanity.io', 'another domain']
    domains: ["cdn.sanity.io"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
};
module.exports =
  process.env.NODE_ENV === "development" ? settings : withPWA(settings);
