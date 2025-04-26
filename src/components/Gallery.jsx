import { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Semua Desain' },
    { id: 'dresses', name: 'Gaun' },
    { id: 'tops', name: 'Atasan & Blus' },
    { id: 'formal', name: 'Pakaian Formal' },
    { id: 'cultural', name: 'Busana Tradisional' },
  ];
  
  const galleryItems = [
    { 
      id: 1, 
      image: '/api/placeholder/600/750', 
      title: 'Gaun Malam', 
      category: 'dresses formal',
      description: 'Gaun malam burgundy elegan dengan hiasan manik-manik halus.' 
    },
    { 
      id: 2, 
      image: '/api/placeholder/600/750', 
      title: 'Blus Kasual', 
      category: 'tops',
      description: 'Blus katun ringan dengan detail bordir.' 
    },
    { 
      id: 3, 
      image: '/api/placeholder/600/750', 
      title: 'Kebaya Modern', 
      category: 'cultural formal',
      description: 'Interpretasi modern dari kebaya tradisional Indonesia.' 
    },
    { 
      id: 4, 
      image: '/api/placeholder/600/750', 
      title: 'Dress Kantor', 
      category: 'dresses',
      description: 'Dress profesional namun feminin untuk pakaian kerja.' 
    },
    { 
      id: 5, 
      image: '/api/placeholder/600/750', 
      title: 'Gaun Pengantin', 
      category: 'dresses formal',
      description: 'Gaun pengantin kustom dengan detail renda buatan tangan.' 
    },
    { 
      id: 6, 
      image: '/api/placeholder/600/750', 
      title: 'Atasan Kasual', 
      category: 'tops',
      description: 'Atasan serbaguna yang cocok untuk kegiatan siang hingga malam.' 
    },
    { 
      id: 7, 
      image: '/api/placeholder/600/750', 
      title: 'Fusi Budaya', 
      category: 'cultural',
      description: 'Dress modern dengan elemen batik tradisional.' 
    },
    { 
      id: 8, 
      image: '/api/placeholder/600/750', 
      title: 'Jas Formal', 
      category: 'formal',
      description: 'Jas formal wanita dengan detail sempurna.' 
    },
  ];
  
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category.includes(activeCategory));
  
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Galeri <span className="text-burgundy-800">Kami</span>
            </h2>
            <div className="w-24 h-1 bg-burgundy-800 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Jelajahi koleksi desain kustom kami. Setiap karya menceritakan kisah unik dan menampilkan dedikasi kami terhadap keahlian menjahit yang berkualitas.
            </p>
          </motion.div>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-burgundy-800 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          layout
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              className="card overflow-hidden group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Tidak ada item yang ditemukan dalam kategori ini.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;