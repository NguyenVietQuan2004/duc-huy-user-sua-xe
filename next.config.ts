/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "nhatphatauto.vn",
        port: "",
        pathname: "/wp-content/uploads/**", // hoặc '/**' nếu bạn muốn rộng hơn
      },
    ],
  },
};

module.exports = nextConfig;
