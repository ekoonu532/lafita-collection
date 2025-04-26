import { motion } from 'framer-motion';
import { FaTshirt, FaUserTie, FaGem, FaFeatherAlt } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaTshirt className="text-4xl text-burgundy-800" />,
    title: 'Penjahitan Kustom',
    description: 'Pakaian yang dibuat sesuai ukuran tubuh Anda untuk kenyamanan sempurna yang menonjolkan siluet alami Anda.',
  },
  {
    icon: <FaUserTie className="text-4xl text-burgundy-800" />,
    title: 'Konsultasi Gaya',
    description: 'Saran gaya pribadi untuk membantu Anda memilih desain, kain, dan detail yang paling baik mengekspresikan kepribadian Anda.',
  },
  {
    icon: <FaGem className="text-4xl text-burgundy-800" />,
    title: 'Alterasi & Perbaikan',
    description: 'Layanan alterasi profesional untuk merevitalisasi pakaian favorit Anda dengan presisi dan perhatian.',
  },
  {
    icon: <FaFeatherAlt className="text-4xl text-burgundy-800" />,
    title: 'Pernikahan & Acara Khusus',
    description: 'Busana memukau untuk momen terpenting Anda, dirancang untuk membuat Anda merasa istimewa.',
  },
];

const Services = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Layanan <span className="text-burgundy-800">Kami</span>
            </h2>
            <div className="w-24 h-1 bg-burgundy-800 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Di Lafita Collection, kami menawarkan berbagai layanan yang dirancang untuk mewujudkan visi fashion Anda. Setiap layanan dihadirkan dengan perhatian teliti terhadap detail dan hasrat untuk kesempurnaan.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="card p-8 flex flex-col items-center text-center hover:shadow-xl transform hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;