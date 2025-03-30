/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['bookface-images.s3.amazonaws.com'],
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};

export default nextConfig; 