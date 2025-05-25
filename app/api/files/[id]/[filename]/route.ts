import { NextRequest, NextResponse } from 'next/server'
import { getGlobalShare } from '../../../../../lib/global-storage'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string; filename: string } }
) {
  try {
    const { id, filename } = params
    
    // 从全局存储获取分享数据
    const shareData = getGlobalShare(id)
    
    if (!shareData) {
      return NextResponse.json({ error: '文件不存在' }, { status: 404 })
    }

    // 检查是否是文件分享
    if (shareData.type !== 'file') {
      return NextResponse.json({ error: '不是文件分享' }, { status: 400 })
    }

    // 检查是否过期
    const expiresAt = new Date(shareData.expiresAt)
    if (expiresAt < new Date()) {
      return NextResponse.json({ error: '文件已过期' }, { status: 410 })
    }

    // 检查文件名是否匹配
    if (decodeURIComponent(filename) !== shareData.fileName) {
      return NextResponse.json({ error: '文件名不匹配' }, { status: 400 })
    }

    // 在生产环境中，这里应该从 Firebase Storage 或其他存储服务获取文件
    // 目前我们返回一个提示，因为文件只存在于内存中
    return NextResponse.json({ 
      error: '文件下载功能需要配置云存储服务',
      message: '请联系管理员配置文件存储功能',
      shareData: {
        fileName: shareData.fileName,
        fileSize: shareData.fileSize,
        fileType: shareData.fileType
      }
    }, { status: 503 })

  } catch (error) {
    console.error('File download error:', error)
    return NextResponse.json(
      { error: '文件下载失败' },
      { status: 500 }
    )
  }
} 