import { useState, useCallback } from 'react'
import IntroAnimation from './components/IntroAnimation'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Services from './components/Services'
import WhatToExpect from './components/WhatToExpect'
import Fees from './components/Fees'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)
  const handleIntroComplete = useCallback(() => setIntroComplete(true), [])

  return (
    <>
      {!introComplete && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}

      <div className="min-h-screen bg-cream font-sans text-ink">
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <About />
          <Services />
          <WhatToExpect />
          <Fees />
          <Location />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
