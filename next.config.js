/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

// module.exports = nextConfig;
module.exports = {
  env: {
    BASE_URL: "http://localhost:3000",
  },
};
