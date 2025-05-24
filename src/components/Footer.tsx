'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 创作者信息 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">联系创作者</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:linyujia66@gmail.com"
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  linyujia66@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* 微信二维码 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">微信联系</h3>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                {/* 这里应该放置实际的微信二维码图片 */}
                <div className="text-center">
                  <svg className="w-8 h-8 text-gray-500 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.404c-.061.22.008.406.131.506a.374.374 0 0 0 .292.054l1.756-.754a.673.673 0 0 1 .677.054c.93.525 2.049.794 3.01.794 4.8 0 8.691-3.288 8.691-7.342 0-4.054-3.891-7.342-8.691-7.342zm-.357 3.56a.896.896 0 1 1-.002 1.792.896.896 0 0 1 .002-1.792zm4.180 0a.896.896 0 1 1-.002 1.792.896.896 0 0 1 .002-1.792z"/>
                  </svg>
                  <p className="text-xs text-gray-500">微信二维码</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                扫码添加微信
              </p>
            </div>
          </div>

          {/* 法律文件 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">法律条款</h3>
            <div className="space-y-2">
              <Link
                href="/terms"
                className="block text-gray-700 hover:text-primary-600 transition-colors"
              >
                服务条款
              </Link>
              <Link
                href="/privacy"
                className="block text-gray-700 hover:text-primary-600 transition-colors"
              >
                隐私政策
              </Link>
            </div>
          </div>
        </div>

        {/* 分割线 */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* 版权信息 */}
            <div className="text-center md:text-left">
              <p className="text-gray-600">
                © 2025 Temp Share Snippet. All Rights Reserved.
              </p>
            </div>

            {/* 品牌标识 */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">TS</span>
              </div>
              <span className="text-gray-700 font-medium">Temp Share</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 