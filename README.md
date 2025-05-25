# 🚀 临时文件/文本分享器

一个现代化的临时文件和文本分享应用，基于 Next.js 14 + TypeScript + Firebase 构建。

## ✨ 功能特色

- 📝 **文本分享**：支持最多10,000字符的文本内容分享
- 📁 **文件分享**：支持最大100MB的文件上传分享
- 🔐 **密码保护**：可选的访问密码保护
- ⏰ **自动过期**：灵活的过期时间设置（10分钟到30天）
- 📱 **二维码生成**：自动生成分享链接的二维码
- 🌐 **响应式设计**：完美适配手机、平板和桌面设备
- 🛡️ **智能Fallback**：Firebase连接失败时自动使用本地存储
- ⚡ **极速响应**：优化的网络策略，确保快速响应

## 🛠️ 技术栈

- **前端框架**：Next.js 14 (App Router)
- **开发语言**：TypeScript
- **样式方案**：Tailwind CSS
- **UI组件**：Shadcn/ui + Radix UI
- **数据存储**：Firebase Firestore
- **文件存储**：Firebase Storage
- **部署平台**：Vercel

## 🚀 快速开始

### 环境要求

- Node.js 18+ 
- npm 或 yarn

### 本地开发

1. **克隆项目**
```bash
git clone <your-repo-url>
cd temp-share-snippet
```

2. **安装依赖**
```bash
npm install
```

3. **环境配置**
创建 `.env.local` 文件：
```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **启动开发服务器**
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 📦 部署到 Vercel

### 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/temp-share-snippet)

### 手动部署

1. **推送代码到 GitHub**
```bash
git add .
git commit -m "feat: 初始版本"
git push origin main
```

2. **在 Vercel 控制台**
   - 导入 GitHub 仓库
   - 配置环境变量（复制 `.env.local` 的内容）
   - 点击 Deploy

3. **环境变量设置**
在 Vercel 项目设置中添加以下环境变量：
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_APP_URL` (设置为您的域名)

## 🔧 Firebase 配置

1. **创建 Firebase 项目**
   - 访问 [Firebase Console](https://console.firebase.google.com/)
   - 创建新项目

2. **启用服务**
   - Firestore Database
   - Storage

3. **获取配置信息**
   - 项目设置 → 常规 → 您的应用 → Firebase SDK 配置

## 📁 项目结构

```
├── app/                    # Next.js App Router
│   ├── api/               # API路由
│   ├── share/[id]/        # 分享页面
│   └── globals.css        # 全局样式
├── components/            # React组件
├── lib/                   # 工具函数和配置
├── public/               # 静态文件
└── ...配置文件
```

## 🌟 核心特性

### 智能存储策略
- **主存储**：内存存储（立即响应）
- **备份存储**：Firebase（后台同步）
- **演示模式**：内置演示数据

### 网络优化
- 自动超时保护（3-5秒）
- 优雅降级处理
- 非阻塞的后台同步

### 安全特性
- 密码哈希加密
- 文件类型验证
- 大小限制保护
- 自动过期清理

## 📝 使用说明

详细使用说明请查看 [USAGE.md](./USAGE.md)

## 🚀 部署说明

详细部署说明请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📋 License

MIT License - 详见 [LICENSE](./LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

⭐ 如果这个项目对您有帮助，请给个 Star！ 