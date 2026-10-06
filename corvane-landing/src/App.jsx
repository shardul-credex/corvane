import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ConnectedWorkflow from './components/ConnectedWorkflow'
import Demo from './components/Demo'
import Pricing from './components/Pricing'
import Research from './components/Research'
import Founder from './components/Founder'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main>
        <Hero />
        <ConnectedWorkflow />
        <Demo />
        <Pricing />
        <Research />
        <Founder />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}