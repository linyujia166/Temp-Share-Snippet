import CryptoJS from 'crypto-js'
import QRCode from 'qrcode'
import { v4 as uuidv4 } from 'uuid'

export function generateId(): string {
  return uuidv4().replace(/-/g, '').substring(0, 12)
}

export function hashPassword(password: string): string {
  return CryptoJS.SHA256(password).toString()
}

export function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash
}

export async function generateQRCode(url: string): Promise<string> {
  try {
    return await QRCode.toDataURL(url, {
      width: 200,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    })
  } catch (error) {
    console.error('QR Code generation error:', error)
    throw new Error('Failed to generate QR code')
  }
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export function isValidFileType(fileType: string): boolean {
  // 允许大部分常见文件类型，但排除一些可能有安全风险的
  const blockedTypes = [
    'application/x-executable',
    'application/x-msdownload',
    'application/x-msdos-program'
  ]
  return !blockedTypes.includes(fileType)
}

export function calculateExpiryDate(minutes: number): Date {
  const now = new Date()
  return new Date(now.getTime() + minutes * 60 * 1000)
} 