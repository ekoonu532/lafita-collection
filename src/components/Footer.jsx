import { FaWhatsapp, FaInstagram, FaFacebook, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Tautan Cepat',
      items: [
        { name: 'Beranda', href: '#home' },
        { name: 'Tentang Kami', href: '#about' },
        { name: 'Layanan', href: '#services' },
        { name: 'Pesanan Kustom', href: '#custom-order' },
        { name: 'Galeri', href: '#gallery' },
        { name: 'Kontak', href: '#contact' },
      ],
    },
    {
      title: 'Layanan',
      items: [
        { name: 'Penjahitan Kustom', href: '#services' },
        { name: 'Konsultasi Gaya', href: '#services' },
        { name: 'Alterasi & Perbaikan', href: '#services' },
        { name: 'Pernikahan & Acara Khusus', href: '#services' },
      ],
    },
    {
      title: 'Legal',
      items: [
        { name: 'Kebijakan Privasi', href: '#' },
        { name: 'Syarat Layanan', href: '#' },
        { name: 'Kebijakan Pengiriman', href: '#' },
        { name: 'Kebijakan Pengembalian', href: '#' },
      ],
    },
  ];
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-primary font-bold mb-4">Lafita Collection</h3>
            <p className="text-gray-400 mb-6">
              Penjahitan eksklusif yang merayakan gaya unik Anda. Dirancang dan dibuat dengan penuh gairah dan presisi.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={22} />
              </a>
              <a 
                href="https://instagram.com/lafitacollection" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
              <a 
                href="https://facebook.com/lafitacollection" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={22} />
              </a>
            </div>
          </div>
          
          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.items.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="section-container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Lafita Collection. Hak Cipta Dilindungi.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Dibuat dengan <FaHeart className="text-pink-500 mx-1" /> oleh Tim Desain Lafita
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;