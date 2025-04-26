import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 gradient-bg opacity-90"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://api.placeholder.com/2000/1200')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      
      <div className="section-container relative z-10 text-white">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tingkatkan Gaya Anda dengan <br />
            <span className="text-pink-500">Lafita Collection</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Penjahitan mewah yang merayakan gaya unik Anda. Pakaian yang dibuat khusus untuk pas sempurna dengan tubuh Anda, dibuat dengan penuh gairah dan presisi.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#custom-order" className="btn-primary text-center">
              Pesan Desain Kustom
            </a>
            <a href="#gallery" className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-burgundy-800 text-center">
              Jelajahi Galeri
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero