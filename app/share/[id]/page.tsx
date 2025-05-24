import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

interface SharePageProps {
  params: {
    id: string
  }
}

export default function SharePage({ params }: SharePageProps) {
  const { id } = params

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="card text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">分享内容预览</h1>
          <p className="text-gray-600 mb-8">分享ID: {id}</p>
          
          <div className="bg-gray-50 rounded-xl p-8 text-left mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">演示内容</h2>
            <p className="text-gray-700 leading-relaxed">
              这是一个演示页面。在完整版本中，这里会显示用户分享的实际内容。
              <br /><br />
              目前这个应用的前端界面已经完成，包括：
              <br />
              ✅ 漂亮的用户界面设计
              <br />
              ✅ 文本和文件分享功能界面
              <br />
              ✅ 响应式设计
              <br />
              ✅ 多语言支持
              <br />
              ✅ QR码生成
              <br />
              <br />
              要使此应用完全功能化，需要集成Firebase后端服务来处理：
              <br />
              • 文件存储
              <br />
              • 数据库存储
              <br />
              • 用户认证
              <br />
              • 自动过期功能
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="btn-primary inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>创建新分享</span>
            </a>
            <a
              href="/"
              className="btn-secondary inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>返回首页</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 