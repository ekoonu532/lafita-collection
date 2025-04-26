import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-burgundy-800" />,
      title: 'Kunjungi Toko Kami',
      details: 'Belik, 03/04, Kabupaten Pemalang, Jawa Tengah 52356',
    },
    {
      icon: <FaClock className="text-2xl text-burgundy-800" />,
      title: 'Jam Operasional',
      details: 'Senin - Sabtu: 07.30 - 17.00 WIB',
    },
    {
      icon: <FaEnvelope className="text-2xl text-burgundy-800" />,
      title: 'Email Kami',
      details: 'info@lafitacollection.com',
    },
  ];

  const socialMedia = [
    {
      icon: <FaWhatsapp className="text-2xl" />,
      name: 'WhatsApp',
      link: 'https://wa.me/6285225598558',
      color: 'bg-green-600',
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      name: 'Instagram',
      link: 'https://instagram.com/lafitacollection',
      color: 'bg-pink-600',
    },
    {
      icon: <FaFacebook className="text-2xl" />,
      name: 'Facebook',
      link: 'https://facebook.com/lafitacollection',
      color: 'bg-blue-600',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Hubungi <span className="text-burgundy-800">Kami</span>
            </h2>
            <div className="w-24 h-1 bg-burgundy-800 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Punya pertanyaan tentang layanan kami atau ingin mulai pesanan khusus? Hubungi kami melalui saluran berikut.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form Kontak */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan ke Kami</h3>
              
              
                <form action="https://getform.io/f/bmdkvyka" method="POST">
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Nama Anda</label>
                    <input
                      type="text"
                      name="name"
                     
                      className="input-field"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Alamat Email</label>
                    <input
                      type="email"
                      name="email"
                    
                      className="input-field"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Pesan</label>
                    <textarea
                      name="message"
                      
                      className="input-field h-32"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Kirim Pesan
                  </button>
                </form>
              
            </div>
          </motion.div>
          
          {/* Info Kontak */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-pink-50 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-4">Ikuti Kami</h4>
                <div className="flex space-x-3">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-3 rounded-full hover:opacity-90 transition-opacity duration-300`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
