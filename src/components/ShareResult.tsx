'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ShareResultProps {
  result: {
    url: string
    qrCode: string
    expiresAt: Date
  }
  onCreateNew: () => void
}

export default function ShareResult({ result, onCreateNew }: ShareResultProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result.url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('复制失败:', err)
      // 降级方案
      const textArea = document.createElement('textarea')
      textArea.value = result.url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const formatExpiryTime = (date: Date) => {
    const now = new Date()
    const diff = date.getTime() - now.getTime()
    
    if (diff <= 0) return '已过期'
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    
    if (days > 0) return `${days}天${hours}小时后过期`
    if (hours > 0) return `${hours}小时${minutes}分钟后过期`
    return `${minutes}分钟后过期`
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card animate-fade-in-up">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">分享链接生成成功！</h2>
          <p className="text-gray-600">
            {formatExpiryTime(result.expiresAt)}
          </p>
        </div>

        {/* 分享链接 */}
        <div className="space-y-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              分享链接
            </label>
            <div className="flex rounded-xl border border-gray-300 overflow-hidden">
              <input
                type="text"
                value={result.url}
                readOnly
                className="flex-1 px-4 py-3 bg-gray-50 text-gray-800 focus:outline-none"
              />
              <button
                onClick={copyToClipboard}
                className={`px-6 py-3 font-medium transition-colors ${
                  copied
                    ? 'bg-green-600 text-white'
                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                }`}
              >
                {copied ? (
                  <span className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>已复制</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>复制</span>
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* 二维码 */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                二维码分享
              </label>
              <p className="text-sm text-gray-600">
                扫描二维码可直接访问分享内容，方便移动设备使用
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border-2 border-gray-200 shadow-sm">
              <Image
                src={result.qrCode}
                alt="分享链接二维码"
                width={128}
                height={128}
                className="w-32 h-32"
              />
            </div>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onCreateNew}
            className="flex-1 btn-primary"
          >
            <span className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>创建新分享</span>
            </span>
          </button>
          <button
            onClick={() => window.open(result.url, '_blank')}
            className="flex-1 btn-secondary"
          >
            <span className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>预览分享</span>
            </span>
          </button>
        </div>

        {/* 提示信息 */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <div className="flex">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                分享提示
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                <ul className="list-disc pl-5 space-y-1">
                  <li>请及时保存分享链接，链接到期后内容将无法访问</li>
                  <li>如果设置了密码，请将密码一并告知接收方</li>
                  <li>请谨慎分享包含敏感信息的内容</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 