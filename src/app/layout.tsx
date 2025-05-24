import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Temp Share Snippet - 临时文件/文本分享器',
  description: '快速分享临时的文本片段或小型文件，具有有效期的安全分享平台',
  keywords: ['文件分享', '文本分享', '临时分享', 'temp share', 'file sharing'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
} 