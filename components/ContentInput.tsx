'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

interface ContentInputProps {
  onShareCreated: (result: {
    url: string
    qrCode: string
    expiresAt: Date
  }) => void
}

const EXPIRY_OPTIONS = [
  { label: '10分钟', value: 10, unit: 'minutes' },
  { label: '1小时', value: 60, unit: 'minutes' },
  { label: '24小时', value: 1440, unit: 'minutes' },
  { label: '7天', value: 10080, unit: 'minutes' },
  { label: '30天', value: 43200, unit: 'minutes' },
]

export default function ContentInput({ onShareCreated }: ContentInputProps) {
  const [activeTab, setActiveTab] = useState<'text' | 'file'>('text')
  const [textContent, setTextContent] = useState('')
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [expiryOption, setExpiryOption] = useState(EXPIRY_OPTIONS[1])
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      if (file.size > 100 * 1024 * 1024) { // 100MB limit
        alert('文件大小不能超过 100MB')
        return
      }
      setUploadedFile(file)
      setActiveTab('file')
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: 100 * 1024 * 1024, // 100MB
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (activeTab === 'text' && !textContent.trim()) {
      alert('请输入文本内容')
      return
    }
    
    if (activeTab === 'file' && !uploadedFile) {
      alert('请选择要上传的文件')
      return
    }

    setIsLoading(true)

    try {
      const formData = new FormData()
      formData.append('type', activeTab)
      formData.append('expiryMinutes', expiryOption.value.toString())
      
      if (activeTab === 'text') {
        formData.append('content', textContent)
      } else if (uploadedFile) {
        formData.append('file', uploadedFile)
      }
      
      if (password.trim()) {
        formData.append('password', password.trim())
      }

      const response = await fetch('/api/shares', {
        method: 'POST',
        body: formData
      })

      let result
      try {
        result = await response.json()
      } catch (parseError) {
        // 如果无法解析JSON，可能是收到了HTML错误页面
        const text = await response.text()
        console.error('非JSON响应:', text)
        throw new Error('服务器返回了无效的响应格式，请刷新页面重试')
      }

      if (!response.ok) {
        // 处理业务错误（如文件上传限制等）
        if (result.message && result.suggestion) {
          throw new Error(`${result.error}\n\n${result.message}\n建议：${result.suggestion}`)
        }
        throw new Error(result.error || '创建分享失败')
      }
      
      onShareCreated({
        url: result.url,
        qrCode: result.qrCode,
        expiresAt: new Date(result.expiresAt)
      })

      // 重置表单
      setTextContent('')
      setUploadedFile(null)
      setPassword('')
      setActiveTab('text')
    } catch (error) {
      console.error('创建分享失败:', error)
      let errorMessage = '创建分享失败，请重试'
      
      if (error instanceof Error) {
        errorMessage = error.message
      } else if (typeof error === 'string') {
        errorMessage = error
      }
      
      // 使用更友好的错误提示
      alert(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card animate-slide-up">
        {/* Tab 切换 */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('text')}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
              activeTab === 'text'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <span className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>文本分享</span>
            </span>
          </button>
          <button
            onClick={() => setActiveTab('file')}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
              activeTab === 'file'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <span className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span>文件分享</span>
            </span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 内容输入区域 */}
          {activeTab === 'text' ? (
            <div>
              <label htmlFor="text-content" className="block text-sm font-medium text-gray-700 mb-2">
                文本内容
              </label>
              <textarea
                id="text-content"
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
                placeholder="在此粘贴或输入您要分享的文本内容..."
                className="input-field h-32 resize-none"
                maxLength={10000}
              />
              <div className="mt-2 text-sm text-gray-500 text-right">
                {textContent.length}/10,000
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                文件上传
              </label>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? 'border-primary-400 bg-primary-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <input {...getInputProps()} />
                {uploadedFile ? (
                  <div className="space-y-2">
                    <div className="w-12 h-12 mx-auto bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{uploadedFile.name}</p>
                      <p className="text-sm text-gray-500">{formatFileSize(uploadedFile.size)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setUploadedFile(null)
                      }}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      移除文件
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="w-12 h-12 mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        {isDragActive ? '松开以上传文件' : '拖拽文件到此处或点击选择'}
                      </p>
                      <p className="text-sm text-gray-500">支持最大 100MB 的文件</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 有效期选择 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              有效期
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {EXPIRY_OPTIONS.map((option) => (
                <button
                  key={`${option.value}-${option.unit}`}
                  type="button"
                  onClick={() => setExpiryOption(option)}
                  className={`py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${
                    expiryOption === option
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-300 hover:border-gray-400 text-gray-700'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* 密码设置 */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              访问密码 (可选)
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="设置访问密码以增强安全性"
              className="input-field"
              maxLength={50}
            />
          </div>

          {/* 提交按钮 */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center space-x-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>生成分享链接中...</span>
              </span>
            ) : (
              '生成分享链接'
            )}
          </button>
        </form>
      </div>
    </div>
  )
} 