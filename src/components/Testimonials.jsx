import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonialsData = [
  {
    id: 1,
    name: 'Dewi Andriani',
    role: 'Perencana Acara',
    image: '/api/placeholder/100/100',
    rating: 5,
    quote: 'Gaun pernikahan saya benar-benar sempurna! Lafita Collection memahami visi saya dan menciptakan gaun yang melebihi semua harapan saya. Perhatian terhadap detail sangat luar biasa.'
  },
  {
    id: 2,
    name: 'Rahma Amelia',
    role: 'Profesional Bisnis',
    image: '/api/placeholder/100/100',
    rating: 5,
    quote: 'Saya sudah menjadi pelanggan selama lebih dari 3 tahun. Setiap jas yang saya pesan pas dengan sempurna dan kualitasnya luar biasa. Tim sangat profesional dan selalu menepati waktu.'
  },
  {
    id: 3,
    name: 'Siti Nurbani',
    role: 'Guru',
    image: '/api/placeholder/100/100',
    rating: 5,
    quote: 'Gaun kustom yang saya pesan untuk wisuda putri saya sangat memukau. Kualitas kainnya sangat baik dan keahlian menjahitnya sempurna. Pasti akan memesan lagi!'
  },
  {
    id: 4,
    name: 'Eti Suketi',
    role: 'Kreator Konten',
    image: '/api/placeholder/100/100',
    rating: 4,
    quote: 'Lafita Collection merancang gaun fusi tradisional-modern yang indah untuk acara khusus saya. Pujian yang saya terima tak ada habisnya. Layanan dan komunikasi yang hebat!'
  },
  {
    id: 5,
    name: 'Fajar Pradana',
    role: 'Pengusaha',
    image: '/api/placeholder/100/100',
    rating: 5,
    quote: 'Saya sudah mencoba banyak penjahit sebelumnya, tapi tak ada yang sebanding dengan Lafita Collection. Ketepatan dalam pengukuran dan eksekusi mereka tidak tertandingi. Benar-benar sepadan dengan setiap rupiah.'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + direction) % testimonialsData.length;
        return newIndex < 0 ? testimonialsData.length - 1 : newIndex;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [direction]);
  
  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => 
      (prevIndex + 1) % testimonialsData.length
    );
  };
  
  const handleDotClick = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };
  
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Testimoni <span className="text-burgundy-800">Pelanggan</span>
            </h2>
            <div className="w-24 h-1 bg-burgundy-800 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Dengarkan apa yang klien kami katakan tentang pengalaman mereka dengan Lafita Collection. Kami bangga dengan kepuasan pelanggan dan kualitas layanan kami.
            </p>
          </motion.div>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                    <div className="flex items-center justify-center mb-6">
                      <FaQuoteLeft className="text-burgundy-500 text-4xl opacity-50" />
                    </div>
                    
                    <p className="text-gray-600 text-center text-lg italic mb-8">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`mx-1 ${
                            i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-burgundy-800">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-burgundy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-full bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-burgundy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-burgundy-800 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;