/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "media.beehiiv.com",
        },
        {
          hostname: "img.clerk.com",
        },
        {
          hostname: "th.bing.com",
        },
      ],
    },
  };
  
  export default nextConfig;
  