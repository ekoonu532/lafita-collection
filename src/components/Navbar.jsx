import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Beranda', href: '#home', id: 'home' },
    { name: 'Tentang Kami', href: '#about', id: 'about' },
    { name: 'Layanan', href: '#services', id: 'services' },
    { name: 'Pesanan Kustom', href: '#custom-order', id: 'custom-order' },
    { name: 'Galeri', href: '#gallery', id: 'gallery' },
    { name: 'Testimoni', href: '#testimonials', id: 'testimonials' },
    { name: 'Kontak', href: '#contact', id: 'contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.id)
      const sectionElements = sections.map(id => document.getElementById(id))
      
      const currentPosition = window.scrollY + 100

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i]
        if (section) {
          const sectionTop = section.offsetTop
          if (currentPosition >= sectionTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navLinks])

  // Handle click on nav link
  const handleNavLinkClick = (e, id) => {
    e.preventDefault()
    setActiveSection(id)
    setIsOpen(false)
    
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Account for navbar height
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="flex items-center"
              onClick={(e) => handleNavLinkClick(e, 'home')}
            >
              <span className={`text-2xl font-primary font-bold ${scrolled ? 'text-burgundy-800' : 'text-white'}`}>
                Lafita Collection
              </span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 nav-link ${
                    activeSection === link.id 
                      ? scrolled 
                        ? 'text-burgundy-800 font-semibold active' 
                        : 'text-white font-semibold active'
                      : scrolled 
                        ? 'text-gray-700 hover:text-burgundy-800' 
                        : 'text-white hover:text-pink-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled 
                  ? 'text-gray-700 hover:text-burgundy-800 hover:bg-gray-100' 
                  : 'text-white hover:text-pink-500 hover:bg-burgundy-900'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-burgundy-800 bg-pink-50 font-semibold border-l-4 border-burgundy-800'
                  : 'text-gray-700 hover:text-burgundy-800 hover:bg-gray-100 hover:border-l-4 hover:border-pink-300'
              }`}
              onClick={(e) => handleNavLinkClick(e, link.id)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar