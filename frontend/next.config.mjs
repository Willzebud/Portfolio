/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  env: {
    domaine: "http://localhost:1337",
  },
};

export default nextConfig;
