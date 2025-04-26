import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const OrderModal = ({ onClose, orderData }) => {
  const [sending, setSending] = useState(false);
  
  const getGarmentLabel = (value) => {
    const garmentOptions = {
      'dress': 'Gaun',
      'blouse': 'Blus/Atasan',
      'skirt': 'Rok',
      'pants': 'Celana',
      'suit': 'Jas',
      'kebaya': 'Kebaya',
      'traditional': 'Busana Tradisional',
      'wedding': 'Gaun Pengantin',
      'other': 'Lainnya'
    };
    
    return garmentOptions[value] || value;
  };
  
  const getFabricLabel = (value) => {
    const fabricOptions = {
      'cotton': 'Katun',
      'silk': 'Sutra',
      'linen': 'Linen',
      'chiffon': 'Sifon',
      'satin': 'Satin',
      'lace': 'Renda',
      'batik': 'Batik',
      'other': 'Lainnya'
    };
    
    return fabricOptions[value] || 'Tidak ditentukan';
  };
  
  const getColorLabel = (value) => {
    const colorOptions = {
      'black': 'Hitam',
      'white': 'Putih',
      'red': 'Merah',
      'blue': 'Biru',
      'green': 'Hijau',
      'purple': 'Ungu',
      'pink': 'Pink',
      'burgundy': 'Burgundy',
      'other': 'Lainnya'
    };
    
    return colorOptions[value] || 'Tidak ditentukan';
  };

  const formatWhatsAppMessage = () => {
    if (!orderData) return '';
    
    const measurements = Object.entries(orderData.measurements || {})
      .filter(([_, value]) => value)
      .map(([key, value]) => {
        const measurementLabels = {
          'bust': 'Dada',
          'waist': 'Pinggang',
          'hip': 'Pinggul',
          'shoulder': 'Bahu',
          'length': 'Panjang',
          'sleeve': 'Panjang Lengan',
          'inseam': 'Panjang Dalam'
        };
        
        return `- ${measurementLabels[key] || key}: ${value} cm`;
      })
      .join("\\n");
    
    const message = `
Halo Lafita Collection! 👋

Saya ingin melakukan pemesanan kustom:

*Nama:* ${orderData.name}
*Jenis Pakaian:* ${getGarmentLabel(orderData.garmentType)}
*Gaya:* ${orderData.style || 'Tidak disebutkan'}
*Kain:* ${getFabricLabel(orderData.fabric)}
*Warna:* ${getColorLabel(orderData.color)}
${orderData.reference ? `*Referensi:* ${orderData.reference}` : ''}

*Ukuran (cm):*
${measurements || '- Belum diisi, akan diukur saat konsultasi'}

*Catatan Tambahan:*
${orderData.notes || 'Tidak ada'}

Terima kasih, menunggu respons Anda!
    `.trim();
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppRedirect = () => {
    setSending(true);
    
    // Replace with the actual WhatsApp number
    const phoneNumber = '628522559855'; // Example: Indonesia code + number
    const messageText = formatWhatsAppMessage();
    
    // Simulate a slight delay to show the sending state
    setTimeout(() => {
      window.open(`https://wa.me/${phoneNumber}?text=${messageText}`, '_blank');
      onClose();
    }, 800);
  };

  if (!orderData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <motion.div 
        className="bg-white rounded-lg shadow-xl max-w-lg w-full relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="bg-burgundy-800 text-white p-4 relative">
          <h3 className="text-xl font-bold text-white">Selesaikan Pesanan Anda</h3>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200"
          >
            <FaTimes size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-600">
              Detail pesanan Anda sudah siap! Klik tombol di bawah untuk melanjutkan via WhatsApp.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6 space-y-4">
            <h4 className="font-medium text-gray-700">Ringkasan Pesanan:</h4>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div className="col-span-2 border-b pb-2 mb-1">
                <span className="font-medium text-gray-700">Informasi Pelanggan</span>
              </div>
              
              <div><span className="font-medium text-gray-700">Nama:</span></div>
              <div className="text-gray-800">{orderData.name}</div>
              
              <div><span className="font-medium text-gray-700">Telepon:</span></div>
              <div className="text-gray-800">{orderData.phone}</div>
              
              <div className="col-span-2 border-b pb-2 mb-1 mt-3">
                <span className="font-medium text-gray-700">Detail Pakaian</span>
              </div>
              
              <div><span className="font-medium text-gray-700">Jenis:</span></div>
              <div className="text-gray-800">{getGarmentLabel(orderData.garmentType)}</div>
              
              <div><span className="font-medium text-gray-700">Gaya:</span></div>
              <div className="text-gray-800">{orderData.style || '-'}</div>
              
              <div><span className="font-medium text-gray-700">Kain:</span></div>
              <div className="text-gray-800">{getFabricLabel(orderData.fabric)}</div>
              
              <div><span className="font-medium text-gray-700">Warna:</span></div>
              <div className="text-gray-800">{getColorLabel(orderData.color)}</div>
              
              <div className="col-span-2 border-b pb-2 mb-1 mt-3">
                <span className="font-medium text-gray-700">Ukuran</span>
              </div>
              
              <div className="col-span-2">
                {Object.values(orderData.measurements || {}).some(m => m) ? (
                  <ul className="space-y-1 text-xs text-gray-800">
                    {orderData.measurements.bust && (
                      <li>Dada: {orderData.measurements.bust} cm</li>
                    )}
                    {orderData.measurements.waist && (
                      <li>Pinggang: {orderData.measurements.waist} cm</li>
                    )}
                    {orderData.measurements.hip && (
                      <li>Pinggul: {orderData.measurements.hip} cm</li>
                    )}
                    {orderData.measurements.shoulder && (
                      <li>Bahu: {orderData.measurements.shoulder} cm</li>
                    )}
                    {orderData.measurements.length && (
                      <li>Panjang: {orderData.measurements.length} cm</li>
                    )}
                    {orderData.measurements.sleeve && (
                      <li>Panjang Lengan: {orderData.measurements.sleeve} cm</li>
                    )}
                    {orderData.measurements.inseam && (
                      <li>Panjang Dalam: {orderData.measurements.inseam} cm</li>
                    )}
                  </ul>
                ) : (
                  <span className="text-gray-500 text-xs italic">Ukuran belum diisi, akan diukur saat konsultasi</span>
                )}
              </div>
            </div>
          </div>
          
          <div className="mb-6 text-center">
            <p className="text-gray-600 text-sm">
              Dengan mengklik "Lanjutkan ke WhatsApp", Anda setuju untuk membagikan detail Anda dengan Lafita Collection untuk tujuan pemenuhan pesanan.
            </p>
          </div>
          
          <button
            onClick={handleWhatsAppRedirect}
            disabled={sending}
            className={`w-full py-3 flex items-center justify-center space-x-2 rounded-md transition-all duration-300 ${
              sending 
                ? 'bg-green-500 text-white cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {sending ? (
              <>
                <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
                <span>Mengirim...</span>
              </>
            ) : (
              <>
                <FaWhatsapp size={24} />
                <span>Lanjutkan ke WhatsApp</span>
              </>
            )}
          </button>
          
          <button
            onClick={onClose}
            disabled={sending}
            className="w-full mt-3 py-2 text-gray-600 hover:text-gray-800 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Batal
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderModal;