import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Mockups served via the CMS proxy (default until S3_PUBLIC_URL is in effect).
      { protocol: "https", hostname: "cms.luloai.com", pathname: "/api/media/file/**" },
      // Mockups served directly from the public MinIO bucket.
      { protocol: "https", hostname: "media.luloai.com", pathname: "/payload-media/**" },
    ],
  },
};

export default nextConfig;
