import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRulerVertical, FaRulerHorizontal, FaRulerCombined, FaPhone, FaArrowRight } from 'react-icons/fa';

const CustomOrder = ({ openModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    garmentType: 'dress',
    style: '',
    fabric: '',
    color: '',
    measurements: {
      bust: '',
      waist: '',
      hip: '',
      shoulder: '',
      length: '',
      sleeve: '',
      inseam: '',
    },
    notes: '',
    reference: '',
  });

  const [activeStep, setActiveStep] = useState(1);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      // Handle nested fields (measurements)
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateStep = (step) => {
    const errors = {};
    
    if (step === 1) {
      if (!formData.name.trim()) errors.name = 'Nama harus diisi';
      if (!formData.phone.trim()) errors.phone = 'Nomor WhatsApp harus diisi';
      if (!/^[0-9+ -]+$/.test(formData.phone)) errors.phone = 'Format nomor tidak valid';
    }
    
    if (step === 2) {
      if (!formData.garmentType) errors.garmentType = 'Pilih jenis pakaian';
      if (!formData.style) errors.style = 'Deskripsi gaya harus diisi';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(activeStep)) {
      setActiveStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setActiveStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(activeStep)) {
      openModal(formData);
    }
  };

  const garmentOptions = [
    { value: 'dress', label: 'Gaun' },
    { value: 'blouse', label: 'Blus/Atasan' },
    { value: 'skirt', label: 'Rok' },
    { value: 'pants', label: 'Celana' },
    { value: 'suit', label: 'Jas' },
    { value: 'kebaya', label: 'Kebaya' },
    { value: 'traditional', label: 'Busana Tradisional' },
    { value: 'wedding', label: 'Gaun Pengantin' },
    { value: 'other', label: 'Lainnya (sebutkan di catatan)' },
  ];

  const fabricOptions = [
    { value: 'cotton', label: 'Katun' },
    { value: 'silk', label: 'Sutra' },
    { value: 'linen', label: 'Linen' },
    { value: 'chiffon', label: 'Sifon' },
    { value: 'satin', label: 'Satin' },
    { value: 'lace', label: 'Renda' },
    { value: 'batik', label: 'Batik' },
    { value: 'other', label: 'Lainnya (sebutkan di catatan)' },
  ];

  const colorOptions = [
    { value: 'black', label: 'Hitam', class: 'bg-black' },
    { value: 'white', label: 'Putih', class: 'bg-white border border-gray-300' },
    { value: 'red', label: 'Merah', class: 'bg-red-600' },
    { value: 'blue', label: 'Biru', class: 'bg-blue-600' },
    { value: 'green', label: 'Hijau', class: 'bg-green-600' },
    { value: 'purple', label: 'Ungu', class: 'bg-purple-600' },
    { value: 'pink', label: 'Pink', class: 'bg-pink-500' },
    { value: 'burgundy', label: 'Burgundy', class: 'bg-burgundy-800' },
    { value: 'other', label: 'Lainnya', class: 'bg-gradient-to-r from-blue-500 via-pink-500 to-red-500' },
  ];

  const renderFormStep = () => {
    switch (activeStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700 border-b pb-2">Informasi Pribadi</h3>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Nama Anda*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`input-field ${formErrors.name ? 'border-red-500' : ''}`}
                placeholder="Nama lengkap Anda"
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Nomor WhatsApp*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`input-field ${formErrors.phone ? 'border-red-500' : ''}`}
                placeholder="Contoh: 08123456789"
              />
              {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
            </div>
            
            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-burgundy-800 text-white rounded-md hover:bg-burgundy-700 transition-colors duration-300"
              >
                <span>Langkah Berikutnya</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700 border-b pb-2">Detail Pakaian</h3>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Jenis Pakaian*</label>
              <select
                name="garmentType"
                value={formData.garmentType}
                onChange={handleChange}
                className={`input-field text-gray-800 ${formErrors.garmentType ? 'border-red-500' : ''}`}
              >
                {garmentOptions.map((option) => (
                  <option key={option.value} value={option.value} className="text-gray-800">
                    {option.label}
                  </option>
                ))}
              </select>
              {formErrors.garmentType && <p className="text-red-500 text-sm mt-1">{formErrors.garmentType}</p>}
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Deskripsi Gaya*</label>
              <input
                type="text"
                name="style"
                value={formData.style}
                onChange={handleChange}
                className={`input-field text-gray-800 ${formErrors.style ? 'border-red-500' : ''}`}
                placeholder="Contoh: Formal, Kasual, Tradisional, dll."
              />
              {formErrors.style && <p className="text-red-500 text-sm mt-1">{formErrors.style}</p>}
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Jenis Kain</label>
              <select
                name="fabric"
                value={formData.fabric}
                onChange={handleChange}
                className="input-field text-gray-800"
              >
                <option value="" className="text-gray-800">-- Pilih Jenis Kain --</option>
                {fabricOptions.map((option) => (
                  <option key={option.value} value={option.value} className="text-gray-800">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Warna Utama</label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mt-2">
                {colorOptions.map((color) => (
                  <div key={color.value} className="relative">
                    <input
                      type="radio"
                      id={`color-${color.value}`}
                      name="color"
                      value={color.value}
                      checked={formData.color === color.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <label
                      htmlFor={`color-${color.value}`}
                      className={`
                        flex flex-col items-center justify-center p-2 rounded-md cursor-pointer
                        ${formData.color === color.value ? 'ring-2 ring-burgundy-800' : 'ring-1 ring-gray-200'}
                      `}
                    >
                      <span className={`w-6 h-6 rounded-full mb-1 ${color.class}`}></span>
                      <span className="text-xs text-gray-600">{color.label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Referensi (Opsional)</label>
              <input
                type="text"
                name="reference"
                value={formData.reference}
                onChange={handleChange}
                className="input-field"
                placeholder="Link referensi desain (Pinterest, Instagram, dll.)"
              />
            </div>
            
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-300 text-gray-700"
              >
                Kembali
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-burgundy-800 text-white rounded-md hover:bg-burgundy-700 transition-colors duration-300"
              >
                <span>Langkah Berikutnya</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700 border-b pb-2">Ukuran (dalam cm)</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Dada</label>
                <input
                  type="number"
                  name="measurements.bust"
                  value={formData.measurements.bust}
                  onChange={handleChange}
                  className="input-field text-gray-800"
                  placeholder="cm"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Pinggang</label>
                <input
                  type="number"
                  name="measurements.waist"
                  value={formData.measurements.waist}
                  onChange={handleChange}
                  className="input-field text-gray-800"
                  placeholder="cm"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Pinggul</label>
                <input
                  type="number"
                  name="measurements.hip"
                  value={formData.measurements.hip}
                  onChange={handleChange}
                  className="input-field text-gray-800"
                  placeholder="cm"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Bahu</label>
                <input
                  type="number"
                  name="measurements.shoulder"
                  value={formData.measurements.shoulder}
                  onChange={handleChange}
                  className="input-field text-gray-800"
                  placeholder="cm"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Panjang Lengan</label>
                <input
                  type="number"
                  name="measurements.sleeve"
                  value={formData.measurements.sleeve}
                  onChange={handleChange}
                  className="input-field text-gray-800"
                  placeholder="cm"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Panjang Dalam (Celana)</label>
                <input
                  type="number"
                  name="measurements.inseam"
                  value={formData.measurements.inseam}
                  onChange={handleChange}
                  className="input-field text-gray-800"
                  placeholder="cm"
                />
              </div>
              
              <div className="col-span-2">
                <label className="block text-gray-700 mb-2">Panjang Pakaian</label>
                <input
                  type="number"
                  name="measurements.length"
                  value={formData.measurements.length}
                  onChange={handleChange}
                  className="input-field text-gray-800"
                  placeholder="cm"
                />
              </div>
            </div>
            
            <p className="text-sm text-gray-500 italic mt-2">
              Jika Anda tidak yakin dengan ukuran, kami dapat membantu mengukur saat konsultasi WhatsApp.
            </p>
            
            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Catatan Tambahan</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="input-field h-24 text-gray-800"
                placeholder="Detail desain, preferensi kain, instruksi khusus, dll."
              ></textarea>
            </div>
            
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-300 text-gray-700"
              >
                Kembali
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-6 py-3 gradient-bg text-white rounded-md hover:opacity-90 transition-opacity duration-300 font-medium"
              >
                Kirim Permintaan Pesanan
              </button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <section id="custom-order" className="py-20 gradient-bg text-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Text column */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dibuat Khusus Untuk Anda
            </h2>
            
            <p className="text-lg mb-6">
              Layanan penjahitan kustom kami dirancang untuk menciptakan pakaian sempurna yang sesuai dengan tubuh dan gaya Anda persis seperti yang Anda bayangkan.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <FaRulerVertical className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ukuran Sempurna</h3>
                  <p>Setiap pakaian dibuat sesuai dengan ukuran tubuh Anda untuk kenyamanan yang sempurna.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <FaRulerHorizontal className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pemilihan Kain</h3>
                  <p>Pilih dari koleksi kain premium kami atau sediakan sendiri untuk mendapatkan pakaian yang benar-benar unik.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <FaRulerCombined className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Konsultasi Desain</h3>
                  <p>Bekerja sama dengan desainer kami untuk mewujudkan visi Anda dengan detail kustomisasi.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <FaPhone className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Konsultasi WhatsApp</h3>
                  <p>Setelah mengirimkan pesanan Anda, kami akan melanjutkan diskusi melalui WhatsApp untuk pengalaman yang lebih personal.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Form column */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
          <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-burgundy-800">Pesan Pakaian Kustom</h3>
                
                <div className="flex items-center space-x-1">
                  {[1, 2, 3].map((step) => (
                    <div 
                      key={step}
                      className={`w-8 h-1 rounded-full ${
                        step === activeStep 
                          ? 'bg-burgundy-800' 
                          : step < activeStep 
                            ? 'bg-burgundy-500' 
                            : 'bg-gray-300'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              
              <form>
                {renderFormStep()}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrder;