import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import Home from './pages/Home'
import Visionary from './pages/Visionary'
import Gallery from './pages/Gallery'
import Videos from './pages/Videos'
import Team from './pages/Team'
import FAQ from './pages/FAQ'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet-our-visionary" element={<Visionary />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
      <ChatWidget />
    </>
  )
}
