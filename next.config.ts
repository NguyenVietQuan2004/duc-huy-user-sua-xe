import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["nhatphatauto.vn", "res.cloudinary.com"], // ✅ thêm domain Cloudinary vào đây
  },
};

export default nextConfig;
