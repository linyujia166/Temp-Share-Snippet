/** @type {import('next').NextConfig} */
const nextConfig = {
  // 确保支持 src 目录
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  // 图片域名配置
  images: {
    domains: ['firebasestorage.googleapis.com'],
    unoptimized: true, // 对于 Vercel 部署优化
  },
  
  // 确保构建输出正确
  output: 'standalone',
  
  // 确保静态文件正确处理
  trailingSlash: false,
  
  // ESLint 配置
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // TypeScript 配置
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig; 