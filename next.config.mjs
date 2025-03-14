/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add image configuration to handle GIFs better
  images: {
    // Disable image optimization for GIFs since it can cause issues
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
    unoptimized: true,
  },
  // Ensure all assets are properly handled in production
  output: 'standalone',
};

export default nextConfig;
