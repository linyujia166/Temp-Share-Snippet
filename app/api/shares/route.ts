import { NextRequest, NextResponse } from 'next/server'
import { generateId, hashPassword, generateQRCode, calculateExpiryDate, isValidFileType } from '../../../lib/utils'
import { CreateShareResponse } from '../../../lib/types'

// 全局存储，用于在Firebase不可用时存储数据
const globalShares = new Map<string, any>();

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const type = formData.get('type') as string
    const content = formData.get('content') as string
    const file = formData.get('file') as File | null
    const expiryMinutes = parseInt(formData.get('expiryMinutes') as string)
    const password = formData.get('password') as string | null

    // 验证输入
    if (!type || !['text', 'file'].includes(type)) {
      return NextResponse.json({ error: '无效的分享类型' }, { status: 400 })
    }

    if (type === 'text' && (!content || content.length > 10000)) {
      return NextResponse.json({ error: '文本内容无效或超出长度限制' }, { status: 400 })
    }

    if (type === 'file' && (!file || file.size > 100 * 1024 * 1024)) {
      return NextResponse.json({ error: '文件无效或超出大小限制' }, { status: 400 })
    }

    if (!expiryMinutes || expiryMinutes < 10 || expiryMinutes > 43200) {
      return NextResponse.json({ error: '无效的过期时间' }, { status: 400 })
    }

    const id = generateId()
    const expiresAt = calculateExpiryDate(expiryMinutes)
    const hasPassword = !!password
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3001'
    const shareUrl = `${baseUrl}/share/${id}`

    let shareData: any = {
      id,
      type,
      hasPassword,
      expiresAt,
      createdAt: new Date(),
      accessCount: 0
    }

    if (hasPassword) {
      shareData.passwordHash = hashPassword(password!)
    }

    if (type === 'text') {
      shareData.content = content
    } else if (type === 'file' && file) {
      // 验证文件类型
      if (!isValidFileType(file.type)) {
        return NextResponse.json({ error: '不支持的文件类型' }, { status: 400 })
      }

      // 文件分享 - 直接使用fallback模式
      shareData.fileName = file.name
      shareData.fileSize = file.size
      shareData.fileType = file.type
      shareData.fileUrl = `${baseUrl}/api/files/${id}/${encodeURIComponent(file.name)}`
      
      console.log('📁 文件分享（fallback模式）:', {
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type
      })
    }

    // 直接使用内存存储
    globalShares.set(id, shareData)
    console.log('📦 分享已保存到内存存储:', {
      id: shareData.id,
      type: shareData.type,
      hasPassword: shareData.hasPassword,
      expiresAt: shareData.expiresAt.toISOString()
    })

    // 尝试Firebase存储（不阻塞主流程）
    tryFirebaseStorage(shareData).catch(error => {
      console.warn('⚠️ Firebase存储失败（非阻塞）:', error.message)
    })

    // 生成QR码
    const qrCode = await generateQRCode(shareUrl)

    const response: CreateShareResponse = {
      id,
      url: shareUrl,
      qrCode,
      expiresAt: expiresAt.toISOString()
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Create share error:', error)
    return NextResponse.json(
      { error: '创建分享失败，请重试' },
      { status: 500 }
    )
  }
}

// 非阻塞的Firebase存储尝试
async function tryFirebaseStorage(shareData: any) {
  try {
    // 设置5秒超时
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Firebase连接超时')), 5000)
    )

    const firebasePromise = (async () => {
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore')
      const { db } = await import('../../../lib/firebase')
      
      await addDoc(collection(db, 'shares'), {
        ...shareData,
        createdAt: serverTimestamp(),
        expiresAt: shareData.expiresAt
      })
    })()

    await Promise.race([firebasePromise, timeoutPromise])
    console.log('✅ 数据已异步保存到Firebase')
  } catch (error: any) {
    console.warn('Firebase存储失败:', error.message)
    // 不抛出错误，让主流程继续
  }
}

// 获取全局存储的函数（供其他API使用）
export function getGlobalShares() {
  return globalShares
} 