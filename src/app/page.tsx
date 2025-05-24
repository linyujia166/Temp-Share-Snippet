'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import ContentInput from '@/components/ContentInput'
import ShareResult from '@/components/ShareResult'
import Footer from '@/components/Footer'

export default function Home() {
  const [shareResult, setShareResult] = useState<{
    url: string
    qrCode: string
    expiresAt: Date
  } | null>(null)

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            临时文件/文本分享器
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            快速分享临时的文本片段或小型文件，安全、便捷、自动过期
          </p>
        </div>

        {!shareResult ? (
          <ContentInput onShareCreated={setShareResult} />
        ) : (
          <ShareResult 
            result={shareResult} 
            onCreateNew={() => setShareResult(null)} 
          />
        )}
      </main>
      <Footer />
    </>
  )
} 