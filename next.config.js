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
    dirs: ['app', 'components', 'lib'],
  },
  
  // TypeScript 配置
  typescript: {
    ignoreBuildErrors: false,
  },

  experimental: {
    serverComponentsExternalPackages: ['undici']
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      }
    }
    return config
  },

  env: {
    customKey: 'my-value',
  },

  redirects: async () => {
    return [
      {
        source: '/terms-of-service',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/privacy-policy', 
        destination: '/privacy',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig; 