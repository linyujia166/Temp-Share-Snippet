# 部署指南

## 前置要求

1. **Firebase 项目设置**
   - 在 [Firebase Console](https://console.firebase.google.com/) 创建新项目
   - 启用 Firestore Database
   - 启用 Storage
   - 获取项目配置信息

2. **Vercel 账户**
   - 注册 [Vercel](https://vercel.com/) 账户
   - 连接 GitHub 仓库

## Firebase 设置

### 1. 创建 Firebase 项目
```bash
# 访问 Firebase Console
https://console.firebase.google.com/

# 创建新项目，项目名称建议：temp-share-snippet
```

### 2. 配置 Firestore
```bash
# 在 Firebase Console 中：
1. 进入 "Firestore Database"
2. 点击 "创建数据库"
3. 选择 "测试模式" 开始
4. 选择就近的服务器位置
```

### 3. 配置 Storage
```bash
# 在 Firebase Console 中：
1. 进入 "Storage"
2. 点击 "开始使用"
3. 选择测试模式
4. 确认服务器位置
```

### 4. 获取配置信息
```bash
# 在 Firebase Console 中：
1. 进入项目设置 (齿轮图标)
2. 滚动到 "您的应用" 部分
3. 点击 "</>" 图标创建 Web 应用
4. 复制配置对象中的值
```

### 5. 设置安全规则

#### Firestore 规则
```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /shares/{document} {
      allow read, write: if true;
    }
  }
}
```

#### Storage 规则
```javascript
// storage.rules
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /shares/{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

## 环境变量配置

### 本地开发
创建 `.env.local` 文件：
```bash
# Firebase 配置
NEXT_PUBLIC_FIREBASE_API_KEY=你的API密钥
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=你的项目.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=你的项目ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=你的项目.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=你的发送者ID
NEXT_PUBLIC_FIREBASE_APP_ID=你的应用ID

# 应用配置
NEXT_PUBLIC_APP_URL=http://localhost:3000

# 清理任务密钥
CLEANUP_SECRET_KEY=temp-share-cleanup-2024
```

### Vercel 部署配置
在 Vercel 项目设置中添加环境变量：
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=你的API密钥
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=你的项目.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=你的项目ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=你的项目.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=你的发送者ID
NEXT_PUBLIC_FIREBASE_APP_ID=你的应用ID
NEXT_PUBLIC_APP_URL=https://你的域名.vercel.app
CLEANUP_SECRET_KEY=temp-share-cleanup-2024
```

## 部署步骤

### 1. 推送代码到 GitHub
```bash
git add .
git commit -m "完成临时分享应用开发"
git push origin main
```

### 2. 在 Vercel 部署
```bash
1. 登录 Vercel Dashboard
2. 点击 "New Project"
3. 选择你的 GitHub 仓库
4. 配置项目设置：
   - Framework Preset: Next.js
   - Build and Output Settings: 保持默认
5. 添加环境变量
6. 点击 "Deploy"
```

### 3. 设置自定义域名（可选）
```bash
1. 在 Vercel 项目设置中进入 "Domains"
2. 添加你的自定义域名
3. 按照提示配置 DNS 记录
4. 更新 NEXT_PUBLIC_APP_URL 环境变量
```

## 定时清理设置

### 使用 Vercel Cron Jobs（推荐）
1. 创建 `vercel.json`：
```json
{
  "crons": [
    {
      "path": "/api/cleanup",
      "schedule": "0 2 * * *"
    }
  ]
}
```

2. 创建清理端点调用：
```bash
curl -X POST https://你的域名.vercel.app/api/cleanup \
  -H "Content-Type: application/json" \
  -d '{"cleanupKey": "temp-share-cleanup-2024"}'
```

### 使用外部定时服务
可以使用 GitHub Actions、cron-job.org 等服务定时调用清理接口。

## 测试部署

### 1. 基本功能测试
- [ ] 文本分享创建和访问
- [ ] 文件上传和下载
- [ ] 密码保护功能
- [ ] QR码生成
- [ ] 过期时间设置

### 2. 压力测试
```bash
# 测试大文件上传（接近100MB）
# 测试长文本（接近10000字符）
# 测试并发访问
```

### 3. 安全测试
- [ ] 恶意文件上传阻止
- [ ] 密码验证
- [ ] 过期内容无法访问

## 监控和维护

### 1. Firebase 使用量监控
```bash
# 定期检查 Firebase Console 中的使用量：
- Firestore 读写次数
- Storage 存储空间和流量
- 每月免费额度使用情况
```

### 2. 清理任务监控
```bash
# 检查清理统计：
GET https://你的域名.vercel.app/api/cleanup

# 手动执行清理：
POST https://你的域名.vercel.app/api/cleanup
{
  "cleanupKey": "temp-share-cleanup-2024"
}
```

### 3. 错误监控
建议集成错误监控服务如 Sentry 来追踪生产环境中的错误。

## 成本估算

### Firebase 免费套餐限制
- Firestore: 50,000 读取/天，20,000 写入/天
- Storage: 5GB 存储空间，1GB/天 下载流量
- 对于小到中等规模使用完全免费

### Vercel 免费套餐
- 100GB 带宽/月
- 无限制静态网站
- 每月6000分钟构建时间

## 故障排除

### 常见问题
1. **Firebase 连接失败**: 检查环境变量配置
2. **文件上传失败**: 检查 Storage 规则和配额
3. **分享链接无法访问**: 检查 Firestore 规则
4. **QR码不显示**: 检查网络连接和CORS设置

### 调试模式
```bash
# 本地调试
npm run dev

# 查看构建日志
vercel logs 项目名称

# 检查环境变量
vercel env ls
``` 