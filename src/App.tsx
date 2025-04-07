import { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  const [navOpen, setNavOpen] = useState(true)

  return (
    <div className="flex flex-col h-screen bg-primary-dark text-gray-200">
      <Header setNavOpen={setNavOpen} />
      
      <div className="flex flex-1 mt-12 mb-12 overflow-hidden">
        <Navigation navOpen={navOpen} />
        <MainContent />
      </div>
      
      <Footer />
    </div>
  )
}

export default App