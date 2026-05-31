import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel deploys Next.js natively — no special output needed
  // but these settings harden the deployment:

  // Strict React mode catches subtle bugs early
  reactStrictMode: true,

  // Compress assets on Vercel edge
  compress: true,

  // Security headers served on every response
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "X-Frame-Options",            value: "DENY" },
          { key: "X-XSS-Protection",           value: "1; mode=block" },
          { key: "Referrer-Policy",            value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",         value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
