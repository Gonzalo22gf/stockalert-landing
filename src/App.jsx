import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'

function App() {
  return (
    <div className="min-h-screen bg-[#05050a]">
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}

export default App
