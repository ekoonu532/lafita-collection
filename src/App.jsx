import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import CustomOrder from './components/CustomOrder'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import OrderModal from './components/OrderModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [orderData, setOrderData] = useState(null)

  const openModal = (data) => {
    setOrderData(data)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CustomOrder openModal={openModal} />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      {isModalOpen && <OrderModal onClose={closeModal} orderData={orderData} />}
    </div>
  )
}

export default App
