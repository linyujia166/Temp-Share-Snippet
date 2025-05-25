import { NextRequest, NextResponse } from 'next/server'
import { collection, query, where, getDocs, deleteDoc, Timestamp } from 'firebase/firestore'
import { ref, deleteObject } from 'firebase/storage'
import { db, storage } from '../../../lib/firebase'

export async function POST(request: NextRequest) {
  try {
    // 验证清理密钥（防止恶意调用）
    const { cleanupKey } = await request.json()
    const expectedKey = process.env.CLEANUP_SECRET_KEY || 'default-cleanup-key'
    
    if (cleanupKey !== expectedKey) {
      return NextResponse.json({ error: '无效的清理密钥' }, { status: 401 })
    }

    const now = Timestamp.now()
    let deletedCount = 0
    let errorCount = 0

    // 查询过期的分享
    const sharesRef = collection(db, 'shares')
    const expiredQuery = query(sharesRef, where('expiresAt', '<=', now))
    const expiredSnapshot = await getDocs(expiredQuery)

    for (const doc of expiredSnapshot.docs) {
      try {
        const shareData = doc.data()
        
        // 如果是文件分享，删除Storage中的文件
        if (shareData.type === 'file' && shareData.fileUrl) {
          try {
            // 从URL提取文件路径
            const url = new URL(shareData.fileUrl)
            const pathMatch = url.pathname.match(/o\/(.+?)\?/)
            if (pathMatch) {
              const filePath = decodeURIComponent(pathMatch[1])
              const fileRef = ref(storage, filePath)
              await deleteObject(fileRef)
            }
          } catch (fileError) {
            console.warn('Failed to delete file from storage:', fileError)
            // 继续执行，不因文件删除失败而停止整个流程
          }
        }

        // 删除Firestore文档
        await deleteDoc(doc.ref)
        deletedCount++
      } catch (docError) {
        console.error('Failed to delete share:', doc.id, docError)
        errorCount++
      }
    }

    const result = {
      success: true,
      deletedCount,
      errorCount,
      timestamp: new Date().toISOString()
    }

    console.log('Cleanup completed:', result)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Cleanup error:', error)
    return NextResponse.json(
      { error: '清理任务执行失败' },
      { status: 500 }
    )
  }
}

// GET 方法用于查看过期分享的统计信息（不执行删除）
export async function GET() {
  try {
    const now = Timestamp.now()
    
    const sharesRef = collection(db, 'shares')
    const expiredQuery = query(sharesRef, where('expiresAt', '<=', now))
    const expiredSnapshot = await getDocs(expiredQuery)

    const stats = {
      expiredCount: expiredSnapshot.size,
      checkTime: new Date().toISOString()
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('Cleanup stats error:', error)
    return NextResponse.json(
      { error: '获取统计信息失败' },
      { status: 500 }
    )
  }
} 