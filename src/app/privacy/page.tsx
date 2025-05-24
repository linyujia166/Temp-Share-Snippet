import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="card">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">隐私政策</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-gray-600 mb-8">
              最后更新时间：2025年1月1日
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 引言</h2>
              <p className="text-gray-700 mb-4">
                我们非常重视您的隐私权，并致力于保护您的个人信息。本隐私政策说明了我们如何收集、使用、存储和保护您在使用临时文件/文本分享器（以下简称&ldquo;本服务&rdquo;）时提供的信息。
              </p>
              <p className="text-gray-700 mb-4">
                通过使用本服务，您同意本隐私政策中描述的信息收集和使用做法。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 我们收集的信息</h2>
              
              <h3 className="text-lg font-medium text-gray-900 mb-3">2.1 您直接提供的信息</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>您上传的文本内容（临时存储，到期后删除）</li>
                <li>您上传的文件及其元数据（文件名、大小、类型）</li>
                <li>您设置的访问密码（加密存储）</li>
                <li>您选择的有效期设置</li>
                <li>您的语言偏好设置</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-3">2.2 自动收集的信息</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>IP地址和地理位置信息（用于安全和统计目的）</li>
                <li>浏览器类型和版本</li>
                <li>操作系统信息</li>
                <li>访问时间和日期</li>
                <li>设备信息（屏幕分辨率、设备类型）</li>
                <li>使用统计信息（访问次数、使用功能等）</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-3">2.3 Cookies和本地存储</h3>
              <p className="text-gray-700 mb-4">
                我们使用浏览器的本地存储功能来保存您的偏好设置，如语言选择和界面主题。这些信息仅存储在您的设备上，不会传输给我们的服务器。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 我们如何使用信息</h2>
              <p className="text-gray-700 mb-4">
                我们收集的信息用于以下目的：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>提供和维护本服务的基本功能</li>
                <li>确保服务的安全性和防止滥用</li>
                <li>改进服务质量和用户体验</li>
                <li>生成匿名使用统计报告</li>
                <li>响应用户的技术支持请求</li>
                <li>遵守法律法规要求</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 信息共享与披露</h2>
              
              <h3 className="text-lg font-medium text-gray-900 mb-3">4.1 一般原则</h3>
              <p className="text-gray-700 mb-4">
                我们不会向第三方出售、交易或出租您的个人信息。我们仅在以下情况下共享您的信息：
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-3">4.2 服务提供商</h3>
              <p className="text-gray-700 mb-4">
                我们可能与帮助我们运营服务的第三方服务提供商共享必要信息，包括：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>云存储服务提供商（如Firebase）</li>
                <li>内容分发网络（CDN）提供商</li>
                <li>安全服务提供商</li>
              </ul>
              <p className="text-gray-700 mb-4">
                这些提供商有义务保护您的信息安全，并仅能将信息用于向我们提供服务的目的。
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-3">4.3 法律要求</h3>
              <p className="text-gray-700 mb-4">
                在以下情况下，我们可能需要披露您的信息：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>法律法规要求</li>
                <li>法院命令或政府部门的合法要求</li>
                <li>保护我们的权利、财产或安全</li>
                <li>保护其他用户或公众的权利、财产或安全</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 数据存储与安全</h2>
              
              <h3 className="text-lg font-medium text-gray-900 mb-3">5.1 存储位置</h3>
              <p className="text-gray-700 mb-4">
                您的数据主要存储在可靠的云服务提供商的服务器上，这些服务器可能位于不同的地理位置。我们选择符合国际安全标准的服务提供商。
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-3">5.2 安全措施</h3>
              <p className="text-gray-700 mb-4">
                我们采取以下安全措施来保护您的信息：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>HTTPS加密传输保护数据在传输过程中的安全</li>
                <li>密码使用加密哈希存储，绝不明文保存</li>
                <li>定期安全审计和漏洞扫描</li>
                <li>访问控制和权限管理</li>
                <li>数据备份和灾难恢复机制</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-3">5.3 数据保留</h3>
              <p className="text-gray-700 mb-4">
                我们根据以下原则保留您的数据：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>分享内容：严格按照您设定的有效期自动删除</li>
                <li>访问日志：通常保留30天，用于安全分析</li>
                <li>匿名统计数据：可能长期保留用于服务改进</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 您的权利</h2>
              <p className="text-gray-700 mb-4">
                根据适用的隐私法律，您拥有以下权利：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>知情权：了解我们如何收集和使用您的信息</li>
                <li>访问权：要求查看我们持有的关于您的信息</li>
                <li>更正权：要求更正不准确的个人信息</li>
                <li>删除权：要求删除您的个人信息（在法律允许的范围内）</li>
                <li>限制处理权：要求限制对您信息的处理</li>
                <li>数据可携权：要求以结构化格式获取您的数据</li>
              </ul>
              <p className="text-gray-700 mb-4">
                如需行使这些权利，请通过邮箱 linyujia66@gmail.com 联系我们。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. 儿童隐私</h2>
              <p className="text-gray-700 mb-4">
                本服务不面向13岁以下的儿童。我们不会故意收集13岁以下儿童的个人信息。如果我们发现无意中收集了此类信息，我们将尽快删除。
              </p>
              <p className="text-gray-700 mb-4">
                如果您是父母或监护人，发现您的孩子向我们提供了个人信息，请联系我们，我们将采取措施删除该信息。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. 第三方链接</h2>
              <p className="text-gray-700 mb-4">
                本服务可能包含指向第三方网站的链接。我们不对这些外部网站的隐私做法负责。我们鼓励您在访问任何第三方网站时阅读其隐私政策。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. 隐私政策的变更</h2>
              <p className="text-gray-700 mb-4">
                我们可能会不时更新本隐私政策。任何重大变更将通过在本页面发布新的隐私政策来通知您。我们建议您定期查看本页面以了解最新的隐私做法。
              </p>
              <p className="text-gray-700 mb-4">
                本隐私政策的任何变更在发布后即生效。您在变更后继续使用服务即表示接受更新后的隐私政策。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. 联系我们</h2>
              <p className="text-gray-700 mb-4">
                如果您对本隐私政策有任何疑问、意见或投诉，请通过以下方式联系我们：
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>邮箱：</strong>
                  <a href="mailto:linyujia66@gmail.com" className="text-primary-600 hover:text-primary-700 ml-2">
                    linyujia66@gmail.com
                  </a>
                </p>
                <p className="text-gray-700">
                  我们将在收到您的询问后尽快回复，通常在5个工作日内。
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 