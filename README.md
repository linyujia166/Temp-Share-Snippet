# 临时文件/文本分享器 (Temp Share Snippet)

一个现代化的临时文件和文本分享平台，支持自定义有效期、密码保护和多语言界面。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC)

## ✨ 功能特性

### 核心功能
- 📝 **文本分享** - 快速分享文本片段，最大10,000字符
- 📁 **文件分享** - 支持最大100MB的文件上传和分享
- ⏰ **自定义有效期** - 支持10分钟到30天的灵活有效期设置
- 🔐 **密码保护** - 可选的访问密码保护功能
- 📱 **二维码分享** - 自动生成二维码，方便移动端扫描访问

### 用户体验
- 🌍 **多语言支持** - 中文、英文、日文界面
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🎨 **现代化UI** - 参考Apple设计语言和lovart.ai的视觉风格
- ⚡ **快速响应** - 优化的用户交互和加载体验
- 🎯 **拖拽上传** - 直观的文件拖拽上传体验

### 安全特性
- 🔒 **自动过期** - 内容到期后自动删除，保护隐私
- 🛡️ **安全传输** - HTTPS加密传输
- 🔑 **密码哈希** - 密码使用加密哈希存储
- 🚫 **访问限制** - 防止恶意访问和滥用

## 🛠️ 技术栈

### 前端
- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: TailwindCSS
- **UI组件**: 自定义组件库
- **国际化**: next-i18next
- **文件上传**: react-dropzone
- **二维码**: react-qr-code

### 后端 (推荐)
- **云服务**: Firebase
- **数据库**: Firestore
- **文件存储**: Firebase Storage
- **服务端函数**: Firebase Functions
- **身份验证**: Firebase Auth (未来扩展)

### 开发工具
- **包管理**: npm
- **代码规范**: ESLint + Prettier
- **类型检查**: TypeScript
- **构建工具**: Next.js内置

## 📋 项目结构

```
temp-share-snippet/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # 根布局
│   │   ├── page.tsx            # 首页
│   │   ├── terms/              # 服务条款页面
│   │   └── privacy/            # 隐私政策页面
│   ├── components/             # React组件
│   │   ├── Header.tsx          # 头部组件
│   │   ├── ContentInput.tsx    # 内容输入组件
│   │   ├── ShareResult.tsx     # 分享结果组件
│   │   └── Footer.tsx          # 页脚组件
│   └── lib/                    # 工具函数和配置
├── public/                     # 静态资源
├── next.config.js              # Next.js配置
├── tailwind.config.ts          # TailwindCSS配置
├── tsconfig.json               # TypeScript配置
└── package.json                # 项目依赖
```

## 🚀 快速开始

### 环境要求
- Node.js 18+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
npm start
```

## 🔧 配置说明

### Firebase配置 (推荐后端)

1. 创建Firebase项目
2. 获取项目配置
3. 创建 `.env.local` 文件：

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 环境变量

| 变量名 | 描述 | 必需 |
|--------|------|------|
| `NEXT_PUBLIC_FIREBASE_*` | Firebase配置 | 是 |
| `NEXT_PUBLIC_APP_URL` | 应用域名 | 是 |

## 📖 使用指南

### 创建分享

1. 选择分享类型（文本或文件）
2. 输入内容或上传文件
3. 设置有效期（10分钟-30天）
4. 可选设置访问密码
5. 生成分享链接

### 访问分享

1. 点击分享链接
2. 输入密码（如果设置）
3. 查看或下载内容

### 多语言切换

点击页面右上角的语言选择器，支持：
- 🇨🇳 中文
- 🇺🇸 English  
- 🇯🇵 日本語

## 🔒 隐私与安全

- ✅ 所有数据传输使用HTTPS加密
- ✅ 内容严格按照设定时间自动过期删除
- ✅ 密码使用安全哈希算法存储
- ✅ 不收集不必要的用户信息
- ✅ 符合GDPR和CCPA隐私规范

## 📝 法律条款

- [服务条款](/terms)
- [隐私政策](/privacy)

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

### 开发流程

1. Fork项目
2. 创建特性分支
3. 提交变更
4. 发起Pull Request

### 代码规范

```bash
# 检查代码风格
npm run lint

# 自动修复
npm run lint:fix
```

## 📧 联系方式

- **开发者**: 林雨佳
- **邮箱**: linyujia66@gmail.com
- **微信**: 扫描页面底部二维码

## 📄 许可证

本项目采用 MIT 许可证。详情请参阅 [LICENSE](LICENSE) 文件。

## 🔮 未来计划

- [ ] 用户账户系统
- [ ] API接口
- [ ] 阅后即焚模式
- [ ] 代码片段语法高亮
- [ ] 访问统计
- [ ] 自定义短链接
- [ ] 批量文件分享
- [ ] 更多语言支持

---

© 2025 Temp Share Snippet. All Rights Reserved. 