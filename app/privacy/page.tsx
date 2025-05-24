import Header from '../../components/Header'
import Footer from '../../components/Footer'

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
                临时文件/文本分享器（以下简称&ldquo;我们&rdquo;或&ldquo;本服务&rdquo;）重视用户的隐私保护。本隐私政策说明了我们如何收集、使用、存储和保护您的个人信息。
              </p>
              <p className="text-gray-700 mb-4">
                使用本服务即表示您同意本隐私政策的条款。如果您不同意本政策，请不要使用我们的服务。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 信息收集</h2>
              
              <h3 className="text-lg font-medium text-gray-900 mb-3">2.1 您主动提供的信息</h3>
              <p className="text-gray-700 mb-4">
                当您使用本服务时，我们可能收集以下信息：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>您上传的文本内容</li>
                <li>您上传的文件</li>
                <li>您设置的分享参数（有效期、密码等）</li>
                <li>您的语言偏好设置</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-3">2.2 自动收集的信息</h3>
              <p className="text-gray-700 mb-4">
                为了提供和改进服务，我们可能自动收集以下技术信息：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>IP地址（仅用于基本的地理位置识别和安全防护）</li>
                <li>浏览器类型和版本</li>
                <li>操作系统信息</li>
                <li>访问时间和页面使用情况</li>
                <li>设备标识符（用于技术统计）</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-3">2.3 Cookie和类似技术</h3>
              <p className="text-gray-700 mb-4">
                我们使用Cookie和类似技术来：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>记住您的语言偏好</li>
                <li>提供更好的用户体验</li>
                <li>分析网站使用情况</li>
                <li>防止滥用和欺诈行为</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 信息使用</h2>
              <p className="text-gray-700 mb-4">
                我们收集的信息仅用于以下目的：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>提供临时文件和文本分享服务</li>
                <li>维护服务的安全性和稳定性</li>
                <li>改进用户体验和服务质量</li>
                <li>防止滥用、欺诈和违法行为</li>
                <li>遵守法律法规要求</li>
                <li>响应用户询问和技术支持</li>
              </ul>
              <p className="text-gray-700 mb-4">
                我们不会将您的个人信息用于任何其他商业目的，包括但不限于营销推广、广告投放或出售给第三方。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 信息存储与安全</h2>
              
              <h3 className="text-lg font-medium text-gray-900 mb-3">4.1 存储位置</h3>
              <p className="text-gray-700 mb-4">
                您的数据存储在安全的云服务器上，我们采用行业标准的安全措施来保护您的信息。
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-3">4.2 存储期限</h3>
              <p className="text-gray-700 mb-4">
                我们按照以下原则存储您的信息：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>分享内容：按您设定的有效期自动删除</li>
                <li>技术日志：保留不超过30天</li>
                <li>匿名统计数据：可能长期保留用于服务改进</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-3">4.3 安全措施</h3>
              <p className="text-gray-700 mb-4">
                我们实施多层安全措施来保护您的信息：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>数据传输加密（HTTPS/TLS）</li>
                <li>服务器端数据加密存储</li>
                <li>访问控制和身份验证</li>
                <li>定期安全审计和漏洞扫描</li>
                <li>员工数据处理培训和保密协议</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 信息分享</h2>
              <p className="text-gray-700 mb-4">
                我们承诺不会出售、交易或以其他方式转让您的个人信息给第三方，除非：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>获得您的明确同意</li>
                <li>法律法规要求或政府机关依法调取</li>
                <li>为保护我们的合法权益免受欺诈或滥用</li>
                <li>紧急情况下为保护用户或公众的人身安全</li>
              </ul>
              <p className="text-gray-700 mb-4">
                我们可能会与以下类型的第三方分享必要的技术信息：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>云服务提供商（为提供基础设施支持）</li>
                <li>安全服务提供商（为防范网络攻击）</li>
              </ul>
              <p className="text-gray-700 mb-4">
                这些第三方均签署了严格的数据保护协议，仅能在提供服务的范围内处理数据。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 您的权利</h2>
              <p className="text-gray-700 mb-4">
                根据适用的数据保护法律，您享有以下权利：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>访问权</strong>：了解我们处理您个人信息的情况</li>
                <li><strong>更正权</strong>：要求我们更正不准确的个人信息</li>
                <li><strong>删除权</strong>：要求我们删除您的个人信息</li>
                <li><strong>限制处理权</strong>：要求我们限制对您个人信息的处理</li>
                <li><strong>数据可携权</strong>：要求我们将您的数据转移给其他服务提供商</li>
                <li><strong>反对权</strong>：反对我们处理您的个人信息</li>
              </ul>
              <p className="text-gray-700 mb-4">
                如需行使上述权利，请通过本政策末尾提供的联系方式与我们联系。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. 未成年人保护</h2>
              <p className="text-gray-700 mb-4">
                我们的服务主要面向成年用户。我们不会故意收集16岁以下未成年人的个人信息。如果我们发现无意中收集了未成年人的信息，我们会尽快删除相关数据。
              </p>
              <p className="text-gray-700 mb-4">
                如果您是未成年人的父母或监护人，且发现您的孩子向我们提供了个人信息，请及时联系我们。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. 跨境数据传输</h2>
              <p className="text-gray-700 mb-4">
                我们可能会将您的信息传输到您所在国家/地区以外的地方进行处理和存储。我们会确保此类传输符合适用的数据保护法律，并采取适当措施保护您的信息安全。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. 政策变更</h2>
              <p className="text-gray-700 mb-4">
                我们可能会不时更新本隐私政策。重大变更时，我们会在网站上发布显著通知。建议您定期查看本政策以了解最新信息。
              </p>
              <p className="text-gray-700 mb-4">
                政策变更后继续使用服务即表示您接受修订后的政策。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. 联系我们</h2>
              <p className="text-gray-700 mb-4">
                如果您对本隐私政策有任何疑问、意见或建议，或需要行使您的权利，请通过以下方式联系我们：
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>邮箱：</strong>
                  <a href="mailto:linyujia66@gmail.com" className="text-primary-600 hover:text-primary-700">linyujia66@gmail.com</a>
                </p>
                <p className="text-gray-700">
                  <strong>主题请注明：</strong>隐私政策咨询
                </p>
              </div>
              <p className="text-gray-700 mt-4 text-sm">
                我们会在收到您的询问后尽快回复，通常不超过30个工作日。
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 