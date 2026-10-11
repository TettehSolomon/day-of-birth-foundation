import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Impact from './components/Impact'
import Donate from './components/Donate'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Impact />
        <Donate />
      </main>
      <Footer />
    </>
  )
}
