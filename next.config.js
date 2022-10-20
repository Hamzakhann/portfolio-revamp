/** @type {import('next').NextConfig} */

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  nextConfig: {
    reactStrictMode: true,
  },
  images: {
    loader: "akamai",
    path: "",
  },
};
