import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleField from './components/ParticleField'
import PageTransitionOverlay from './components/PageTransitionOverlay'

// Pages
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Events from './pages/Events'

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-stretch bg-transparent text-white relative">
      <ParticleField />
      <Navbar />

      <main className="flex-grow z-10 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransitionOverlay><Home /></PageTransitionOverlay>} />
            <Route path="/about" element={<PageTransitionOverlay><About /></PageTransitionOverlay>} />
            <Route path="/gallery" element={<PageTransitionOverlay><Gallery /></PageTransitionOverlay>} />
            <Route path="/events" element={<PageTransitionOverlay><Events /></PageTransitionOverlay>} />
            <Route path="/faq" element={<PageTransitionOverlay><FAQ /></PageTransitionOverlay>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}


export default App
