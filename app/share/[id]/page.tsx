import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import ShareViewer from '../../../components/ShareViewer'

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
        <ShareViewer shareId={id} />
      </main>
      <Footer />
    </>
  )
} 