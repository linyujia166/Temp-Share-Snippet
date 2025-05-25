'use client'

import React, { useState, useEffect, useCallback } from 'react'

interface ShareData {
  id: string
  type: 'text' | 'file'
  content?: string
  fileName?: string
  fileSize?: number
  fileType?: string
  fileUrl?: string
  expiresAt: string
  accessCount: number
}

interface ShareViewerProps {
  shareId: string
}

export default function ShareViewer({ shareId }: ShareViewerProps) {
  const [shareData, setShareData] = useState<ShareData | null>(null)
  const [requiresPassword, setRequiresPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isVerifying, setIsVerifying] = useState(false)

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const formatExpiryTime = (expiresAt: string) => {
    const expiry = new Date(expiresAt)
    const now = new Date()
    const diffMs = expiry.getTime() - now.getTime()
    
    if (diffMs <= 0) return '已过期'
    
    const diffMinutes = Math.floor(diffMs / (1000 * 60))
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    
    if (diffDays > 0) return `${diffDays} 天后过期`
    if (diffHours > 0) return `${diffHours} 小时后过期`
    if (diffMinutes > 0) return `${diffMinutes} 分钟后过期`
    return '即将过期'
  }

  const loadShareData = useCallback(async (passwordParam?: string) => {
    try {
      setError('')
      const url = passwordParam 
        ? `/api/shares/${shareId}?password=${encodeURIComponent(passwordParam)}`
        : `/api/shares/${shareId}`
      
      const response = await fetch(url)
      const data = await response.json()
      
      if (response.ok) {
        setShareData(data)
        setRequiresPassword(false)
      } else if (response.status === 401 && data.requiresPassword) {
        setRequiresPassword(true)
      } else {
        setError(data.error || '获取分享内容失败')
      }
    } catch (err) {
      setError('网络错误，请重试')
    } finally {
      setIsLoading(false)
    }
  }, [shareId])

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!password.trim()) return
    
    setIsVerifying(true)
    await loadShareData(password.trim())
    setIsVerifying(false)
  }

  useEffect(() => {
    loadShareData()
  }, [loadShareData])

  if (isLoading) {
    return (
      <div className="card text-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-gray-600">加载中...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="card text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">无法访问分享</h1>
        <p className="text-gray-600 mb-6">{error}</p>
        <a href="/" className="btn-primary inline-block">
          返回首页
        </a>
      </div>
    )
  }

  if (requiresPassword) {
    return (
      <div className="card text-center max-w-md mx-auto">
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 0h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">需要访问密码</h1>
        <p className="text-gray-600 mb-6">该分享受密码保护，请输入正确的访问密码</p>
        
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="请输入访问密码"
            className="input-field"
            autoFocus
          />
          <button
            type="submit"
            disabled={isVerifying || !password.trim()}
            className="w-full btn-primary disabled:opacity-50"
          >
            {isVerifying ? '验证中...' : '访问分享'}
          </button>
        </form>
      </div>
    )
  }

  if (!shareData) {
    return null
  }

  return (
    <div className="card">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">分享内容</h1>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
          <span>访问次数: {shareData.accessCount}</span>
          <span>•</span>
          <span>{formatExpiryTime(shareData.expiresAt)}</span>
        </div>
      </div>

      {shareData.type === 'text' ? (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">文本内容</h2>
          <div className="bg-gray-50 rounded-xl p-6 border">
            <pre className="whitespace-pre-wrap text-gray-800 font-mono text-sm leading-relaxed">
              {shareData.content}
            </pre>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => navigator.clipboard.writeText(shareData.content || '')}
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>复制文本</span>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">文件下载</h2>
          <div className="bg-gray-50 rounded-xl p-6 border text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{shareData.fileName}</h3>
            <p className="text-gray-600 mb-4">
              {shareData.fileSize && formatFileSize(shareData.fileSize)} • {shareData.fileType}
            </p>
            <a
              href={shareData.fileUrl}
              download={shareData.fileName}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>下载文件</span>
            </a>
          </div>
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <a href="/" className="btn-secondary inline-flex items-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>创建新分享</span>
        </a>
      </div>
    </div>
  )
} 