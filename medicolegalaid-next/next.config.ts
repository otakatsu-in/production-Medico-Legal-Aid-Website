import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Configure pageExtensions to include MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Enable standalone mode for easy Hostinger / Node.js deployment
  output: "standalone",
  // We can add other Next.js config here if needed
  images: {
    unoptimized: true, // Useful for simple VPS hosting
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
