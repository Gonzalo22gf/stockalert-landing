import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Problem from './components/Problem'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import ForWho from './components/ForWho'
import Showcase from './components/Showcase'
import AppBanner from './components/AppBanner'
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
        <Stats />
        <Problem />
        <Features />
        <HowItWorks />
        <ForWho />
        <Showcase />
        <AppBanner />
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
