import { NextRequest, NextResponse } from 'next/server'
import { verifyPassword } from '../../../../lib/utils'
import { ShareContent } from '../../../../lib/types'

// 模拟演示数据
const demoShares: { [key: string]: ShareContent } = {
  'demo123': {
    id: 'demo123',
    type: 'text',
    content: '这是一个演示文本分享',
    hasPassword: false,
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
    createdAt: new Date(),
    accessCount: 0
  }
}

// 获取全局存储的函数
async function getGlobalShares(): Promise<Map<string, any> | null> {
  try {
    const { globalShares } = await import('../route')
    return globalShares
  } catch {
    return null
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const url = new URL(request.url)
    const password = url.searchParams.get('password')

    let shareData: ShareContent | null = null
    const globalShares = await getGlobalShares()

    // 1. 首先从内存存储中查找
    if (globalShares && globalShares.has(id)) {
      shareData = globalShares.get(id) as ShareContent
      console.log('✅ 从内存存储获取分享数据:', id)
    }
    // 2. 如果内存中没有，尝试演示数据
    else if (demoShares[id]) {
      shareData = demoShares[id]
      console.log('✅ 从演示数据获取分享:', id)
    }
    // 3. 最后尝试Firebase（有超时机制）
    else {
      shareData = await getFromFirebaseWithTimeout(id)
    }

    if (!shareData) {
      return NextResponse.json({ error: '分享不存在' }, { status: 404 })
    }

    // 检查是否过期
    let expiresAt: Date
    if (shareData.expiresAt instanceof Date) {
      expiresAt = shareData.expiresAt
    } else if (typeof shareData.expiresAt === 'object' && shareData.expiresAt && 'toDate' in shareData.expiresAt) {
      expiresAt = (shareData.expiresAt as any).toDate()
    } else {
      expiresAt = new Date(shareData.expiresAt as any)
    }
      
    if (expiresAt < new Date()) {
      return NextResponse.json({ error: '分享已过期' }, { status: 410 })
    }

    // 验证密码
    if (shareData.hasPassword) {
      if (!password) {
        return NextResponse.json({ error: '需要密码' }, { status: 401 })
      }

      if (!verifyPassword(password, shareData.passwordHash!)) {
        return NextResponse.json({ error: '密码错误' }, { status: 403 })
      }
    }

    // 增加访问次数（内存中）
    if (globalShares && globalShares.has(id)) {
      const updatedData = { ...shareData, accessCount: shareData.accessCount + 1 }
      globalShares.set(id, updatedData)
      shareData = updatedData
    }

    // 返回数据
    const responseData = {
      id: shareData.id,
      type: shareData.type,
      content: shareData.content,
      fileName: shareData.fileName,
      fileSize: shareData.fileSize,
      fileType: shareData.fileType,
      fileUrl: shareData.fileUrl,
      createdAt: shareData.createdAt,
      expiresAt: shareData.expiresAt,
      accessCount: shareData.accessCount
    }

    return NextResponse.json(responseData)
  } catch (error: any) {
    console.error('Get share error:', error)
    return NextResponse.json(
      { error: '获取分享失败' },
      { status: 500 }
    )
  }
}

// 带超时的Firebase查询
async function getFromFirebaseWithTimeout(id: string): Promise<ShareContent | null> {
  try {
    console.log('🔍 尝试从Firebase获取数据:', id)
    
    // 3秒超时
    const timeoutPromise = new Promise<null>((_, reject) => 
      setTimeout(() => reject(new Error('Firebase查询超时')), 3000)
    )

    const firebasePromise = (async () => {
      const { doc, getDoc } = await import('firebase/firestore')
      const { db } = await import('../../../../lib/firebase')
      
      const shareDoc = await getDoc(doc(db, 'shares', id))
      if (shareDoc.exists()) {
        return { id, ...shareDoc.data() } as ShareContent
      }
      return null
    })()

    const result = await Promise.race([firebasePromise, timeoutPromise])
    if (result) {
      console.log('✅ 从Firebase获取数据成功')
    }
    return result
  } catch (error: any) {
    console.warn('Firebase查询失败:', error.message)
    return null
  }
} 