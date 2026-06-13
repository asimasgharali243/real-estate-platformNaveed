// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {   
    // ❌ REMOVE this entire 'domains' array - it's deprecated
    // domains: ['localhost', 'your-image-domain.com'],
    
    // ✅ Use only 'remotePatterns' (already correct)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // ❌ REMOVE the entire 'eslint' block - not supported in next.config.ts
  // eslint: {
  //   ignoreDuringBuilds: false,
  // },
  
  // ✅ Keep this - it's still valid
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;