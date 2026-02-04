import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },

  outputFileTracingRoot: path.resolve(__dirname, "../../"),

  allowedDevOrigins: [
    '*.appopen.app',
    'nx-*.appopen.app', 
    '.appopen.app'
  ] as unknown as undefined,


  // ✅ 2. Turbopack Loader (if using experimental Turbopack)

};

export default nextConfig;
