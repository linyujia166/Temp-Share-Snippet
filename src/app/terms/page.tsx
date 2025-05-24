import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="card">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">服务条款</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-gray-600 mb-8">
              最后更新时间：2025年1月1日
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 接受条款</h2>
              <p className="text-gray-700 mb-4">
                欢迎使用临时文件/文本分享器（以下简称&ldquo;本服务&rdquo;）。通过访问或使用本服务，您表示同意受本服务条款（以下简称&ldquo;条款&rdquo;）的约束。如果您不同意这些条款，请不要使用本服务。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 服务描述</h2>
              <p className="text-gray-700 mb-4">
                本服务提供临时性文本和文件分享功能。用户可以上传文本内容或文件，并为其设置有效期。内容将在到达设定的有效期后自动删除或失效，无法再次访问。
              </p>
              <p className="text-gray-700 mb-4">
                本服务支持以下功能：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>文本内容的临时分享</li>
                <li>文件的临时分享（最大100MB）</li>
                <li>自定义有效期设置</li>
                <li>可选的密码保护</li>
                <li>多语言界面支持</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 用户行为准则</h2>
              <p className="text-gray-700 mb-4">
                使用本服务时，您同意不会：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>上传、分享任何非法、有害、威胁性、滥用性、骚扰性、诽谤性、粗俗、淫秽或其他令人反感的内容</li>
                <li>上传包含病毒、恶意软件或其他有害代码的文件</li>
                <li>侵犯他人的知识产权、隐私权或其他权利</li>
                <li>进行任何可能干扰或中断服务的行为</li>
                <li>尝试未经授权访问系统或其他用户的内容</li>
                <li>使用自动化工具批量创建分享链接</li>
                <li>将服务用于商业垃圾邮件或其他商业用途</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 内容所有权与责任</h2>
              <p className="text-gray-700 mb-4">
                您对通过本服务上传、分享的所有内容保留完全的所有权和责任。您确认并保证：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>您拥有分享该内容的合法权利</li>
                <li>您的内容不侵犯任何第三方的权利</li>
                <li>您的内容符合所有适用的法律法规</li>
              </ul>
              <p className="text-gray-700 mb-4">
                通过使用本服务，您授予我们在提供服务期间存储、传输和展示您内容的必要技术许可。此许可仅限于提供服务的目的，在内容过期删除后即告终止。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 内容的有效期与删除</h2>
              <p className="text-gray-700 mb-4">
                所有通过本服务分享的内容都具有用户设定的有效期。内容将在以下情况下被删除：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>到达用户设定的有效期</li>
                <li>违反本服务条款被管理员删除</li>
                <li>服务维护或技术原因需要清理数据</li>
              </ul>
              <p className="text-gray-700 mb-4">
                我们不承诺永久存储任何内容，也不对内容的意外丢失承担责任。建议用户自行备份重要内容。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 隐私与数据保护</h2>
              <p className="text-gray-700 mb-4">
                我们重视您的隐私。有关我们如何收集、使用和保护您信息的详细信息，请参阅我们的隐私政策。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. 免责声明</h2>
              <p className="text-gray-700 mb-4">
                本服务按&ldquo;现状&rdquo;提供，不提供任何明示或暗示的保证，包括但不限于：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>服务的可用性、可靠性或及时性</li>
                <li>服务不会中断或无错误</li>
                <li>通过服务获得的结果的准确性或可靠性</li>
                <li>服务器或软件中缺陷的纠正</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. 责任限制</h2>
              <p className="text-gray-700 mb-4">
                在法律允许的最大范围内，我们不对以下情况承担责任：
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>因使用或无法使用服务导致的任何直接、间接、偶然、特殊或后果性损害</li>
                <li>数据丢失或损坏</li>
                <li>业务中断或利润损失</li>
                <li>第三方的行为或内容</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. 服务变更与终止</h2>
              <p className="text-gray-700 mb-4">
                我们保留在任何时候修改、暂停或终止服务的权利，恕不另行通知。我们也可能随时更新本条款，更新后的条款将在本页面发布。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. 适用法律</h2>
              <p className="text-gray-700 mb-4">
                本条款受中华人民共和国法律管辖。任何争议应通过友好协商解决，协商不成的，应提交有管辖权的人民法院解决。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">11. 联系我们</h2>
              <p className="text-gray-700 mb-4">
                如果您对本服务条款有任何疑问，请通过以下方式联系我们：
              </p>
              <p className="text-gray-700">
                邮箱：<a href="mailto:linyujia66@gmail.com" className="text-primary-600 hover:text-primary-700">linyujia66@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 