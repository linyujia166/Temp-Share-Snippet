import { Timestamp } from 'firebase/firestore'

export interface ShareContent {
  id: string
  type: 'text' | 'file'
  content?: string // 文本内容
  fileName?: string // 文件名
  fileSize?: number // 文件大小
  fileType?: string // 文件类型
  fileUrl?: string // 文件下载链接
  hasPassword: boolean
  passwordHash?: string // 密码哈希
  expiresAt: Timestamp | Date // 支持Firebase Timestamp和Date
  createdAt: Timestamp | Date // 支持Firebase Timestamp和Date
  accessCount: number
  maxAccess?: number // 最大访问次数 (可选功能)
}

export interface CreateShareRequest {
  type: 'text' | 'file'
  content?: string
  file?: File
  expiryMinutes: number
  password?: string
  maxAccess?: number
}

export interface CreateShareResponse {
  id: string
  url: string
  qrCode: string
  expiresAt: string
} 