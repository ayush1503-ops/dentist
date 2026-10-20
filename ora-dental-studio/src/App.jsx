import { useState, useCallback } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Statement from './components/Statement'
import Treatments from './components/Treatments'
import Dentist from './components/Dentist'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Faq from './components/Faq'
import Booking from './components/Booking'
import Footer from './components/Footer'
import { useMounted } from './hooks/useReveal'

export default function App() {
  const mounted = useMounted()
  const [pickedCategory, setPickedCategory] = useState('')

  const handlePick = useCallback((id) => setPickedCategory(id), [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero mounted={mounted} />
        <Statement />
        <Treatments onPick={handlePick} />
        <Dentist />
        <Experience />
        <Gallery />
        <Faq />
        <Booking category={pickedCategory} />
      </main>
      <Footer />
    </>
  )
}
