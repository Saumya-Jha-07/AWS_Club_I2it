import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Events from './pages/Events'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-stretch bg-[#0f1b29] text-white">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
