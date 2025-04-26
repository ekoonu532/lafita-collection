import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-96 md:h-auto rounded-lg overflow-hidden">
              <img 
                src="/api/placeholder/600/800" 
                alt="Lafita Collection Tailoring" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 gradient-bg rounded-lg hidden md:block"></div>
          </motion.div>
          
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
                          <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-burgundy-800 mr-4"></div>
              <h2 className="text-burgundy-800 text-lg font-medium">Tentang Kami</h2>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Menciptakan Keunggulan Sejak 2010
            </h3>
            
            <p className="text-gray-600 mb-4">
              Lafita Collection lahir dari hasrat untuk menciptakan busana yang benar-benar merayakan individualitas. Pendiri kami, memulai perjalanan ini dengan keyakinan sederhana: setiap orang berhak mendapatkan pakaian yang pas sempurna dan mengekspresikan kepribadian unik mereka.
            </p>
            
            <p className="text-gray-600 mb-8">
              Dengan pengalaman lebih dari satu dekade dalam desain fashion dan penjahitan, tim kami menggabungkan keahlian tradisional dengan gaya kontemporer. Setiap jahitan adalah bukti komitmen kami terhadap kualitas dan cinta kami terhadap seni menjahit.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-burgundy-800 font-bold text-xl mb-2">Misi Kami</h4>
                <p className="text-gray-600">Menciptakan pakaian khusus yang memberdayakan klien kami dengan kepercayaan diri dan gaya</p>
              </div>
              
              <div>
                <h4 className="text-burgundy-800 font-bold text-xl mb-2">Visi Kami</h4>
                <p className="text-gray-600">Mendefinisikan ulang fashion kustom melalui aksesibilitas, kualitas, dan ekspresi pribadi</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;