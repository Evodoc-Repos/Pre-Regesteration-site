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
        // Security headers for all app routes
        source: "/((?!heart-embed\\.html).*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options",         value: "SAMEORIGIN" },
          { key: "X-XSS-Protection",        value: "1; mode=block" },
          { key: "Referrer-Policy",         value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",      value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // heart-embed.html must be iframe-able from the same origin
        // — no X-Frame-Options header so the browser allows it
        source: "/heart-embed.html",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection",       value: "1; mode=block" },
          // Deliberately omit X-Frame-Options so the iframe loads freely
        ],
      },
    ];
  },
};

export default nextConfig;
