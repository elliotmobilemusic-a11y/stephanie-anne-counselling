import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Services from './components/Services'
import Fees from './components/Fees'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream-100 font-sans text-plum-900">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Fees />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
