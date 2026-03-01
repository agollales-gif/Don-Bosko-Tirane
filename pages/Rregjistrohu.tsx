import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { User, Mail, Phone, Calendar, MapPin, GraduationCap, Edit3, CheckCircle, Users, Upload } from 'lucide-react';

// --- KOMPONENTI HERO I PERSONALIZUAR PËR REGJISTRIM ---
const RregjistrohuHero: React.FC = () => {
  const drawVariants = (delay: number): Variants => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { delay, duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 0.8 }
    }
  });

  return (
    <section className="relative w-full min-h-[100svh] lg:min-h-[85vh] bg-primary-red overflow-hidden flex flex-col lg:flex-row pt-28 lg:pt-0">
      
      {/* 1. TEKSTI */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 container mx-auto relative z-10 lg:w-1/2">
        <div className="max-w-2xl text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            
            <span className="inline-block py-1.5 px-4 mb-4 lg:mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-semibold uppercase tracking-widest text-[10px] sm:text-xs">
              Regjistrim 2026/27
            </span>
            
            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl font-extrabold text-white font-plus-jakarta tracking-tight mb-4 lg:mb-6">
              RREGJISTROHU <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">TANI</span>
            </h1>
            
            <p className="text-lg lg:text-2xl text-white/95 max-w-xl font-medium leading-snug lg:leading-relaxed mb-3 lg:mb-4">
              Hapi i parë drejt suksesit
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg font-normal leading-relaxed">
              Bëhu pjesë e familjes sonë edukative dhe fillon një udhëtim të plotë sfida dhe arritje në një mjedis modern dhe të frytshëm.
            </p>
            
          </motion.div>
        </div>
      </div>

      {/* 2. SILUETA E ANIMUAR */}
      <div className="relative w-full h-[38vh] min-h-[250px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-center p-6 lg:p-16 pointer-events-none z-0 mt-auto lg:mt-0">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full max-h-[260px] lg:max-h-[60vh] max-w-[85%] lg:max-w-full text-white opacity-[0.35] lg:opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          {/* Forma e dokumentit/regjistrimit */}
          <motion.path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0)} initial="hidden" animate="visible" />
          <motion.path d="M14 2V8H20" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0.3)} initial="hidden" animate="visible" />
          <motion.path d="M16 13H8" stroke="currentColor" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0.6)} initial="hidden" animate="visible" />
          <motion.path d="M16 17H8" stroke="currentColor" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0.9)} initial="hidden" animate="visible" />
          <motion.path d="M10 9H9H8" stroke="currentColor" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(1.2)} initial="hidden" animate="visible" />
          
          {/* Peneli për shkrim */}
          <motion.path d="M3 17.25V21H6.75L17.81 9.94C18.2 9.55 18.2 8.92 17.81 8.53L15.47 6.19C15.08 5.8 14.45 5.8 14.06 6.19L3 17.25Z" stroke="currentColor" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(1.5)} initial="hidden" animate="visible" />
          
          {/* Checkmark */}
          <motion.path d="M9 11L12 14L20 6" stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(1.8)} initial="hidden" animate="visible" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
      </div>
    </section>
  );
};

const Rregjistrohu: React.FC = () => {
  const [formData, setFormData] = useState({
    emri: '',
    mbiemri: '',
    email: '',
    telefon: '',
    datelindja: '',
    adresa: '',
    shkolla: '',
    niveli: '',
    mesazh: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowFallback(false);
    setSubmissionError('');

    try {
      // Try to send via FormSubmit.co (free service)
      const formDataToSend = new FormData();
      formDataToSend.append('name', `${formData.emri} ${formData.mbiemri}`);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.telefon);
      formDataToSend.append('birth_date', formData.datelindja);
      formDataToSend.append('address', formData.adresa);
      formDataToSend.append('school', formData.shkolla);
      formDataToSend.append('message', formData.mesazh);
      formDataToSend.append('submission_date', new Date().toLocaleString('sq-AL'));

      const response = await fetch('https://formsubmit.co/ajax/qfp_donbosko@yahoo.it', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Email sent successfully:', result);
        alert('Faleminderit! Kërkesa juaj për regjistrim u dërgua me sukses. Do të kontaktohemi shpejt.');
        
        // Reset form
        setFormData({
          emri: '',
          mbiemri: '',
          email: '',
          telefon: '',
          datelindja: '',
          adresa: '',
          shkolla: '',
          niveli: '',
          mesazh: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
      
    } catch (error) {
      console.error('Gabim gjatë dërgimit:', error);
      setSubmissionError('Dërgimi automatik dështoi. Ju lutemi provoni metodën alternative.');
      setShowFallback(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailFallback = () => {
    const subject = encodeURIComponent(`Kërkesë Regjistrimi - ${formData.emri} ${formData.mbiemri}`);
    const body = encodeURIComponent(`
KËRKESË PËR REGJISTRIM
=====================

TË DHËNA PERSONALE:
Emri: ${formData.emri}
Mbiemri: ${formData.mbiemri}
Email: ${formData.email}
Telefon: ${formData.telefon}
Datëlindja: ${formData.datelindja}
Adresa: ${formData.adresa || 'Nuk është specifikuar'}

SHKOLLA E INTERESUAR:
${formData.shkolla}

MESAZH:
${formData.mesazh || 'Nuk ka mesazh shtesë'}

Data e dërgimit: ${new Date().toLocaleString('sq-AL')}
    `);
    
    window.open(`mailto:qfp_donbosko@yahoo.it?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="flex flex-col">
      <RregjistrohuHero />

        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
            
                {/* Informata Personale */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <User className="mr-3 text-red-600" size={28} />
                    Informata Personale
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="emri" className="block text-sm font-medium text-gray-700 mb-2">
                        Emri *
                      </label>
                      <input
                        type="text"
                        id="emri"
                        name="emri"
                        required
                        value={formData.emri}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="Shkruaj emrin tënd"
                      />
                    </div>
                    <div>
                      <label htmlFor="mbiemri" className="block text-sm font-medium text-gray-700 mb-2">
                        Mbiemri *
                      </label>
                      <input
                        type="text"
                        id="mbiemri"
                        name="mbiemri"
                        required
                        value={formData.mbiemri}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="Shkruaj mbiemrin tënd"
                      />
                    </div>
                  </div>
                </div>

                {/* Kontakti */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Mail className="mr-3 text-red-600" size={28} />
                    Informata Kontakti
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="email@shembull.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        required
                        value={formData.telefon}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="+355 XX XXX XXXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Detaje Shtesë */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <GraduationCap className="mr-3 text-red-600" size={28} />
                    Detaje Shtesë
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="datelindja" className="block text-sm font-medium text-gray-700 mb-2">
                        Datëlindja *
                      </label>
                      <input
                        type="date"
                        id="datelindja"
                        name="datelindja"
                        required
                        value={formData.datelindja}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="shkolla" className="block text-sm font-medium text-gray-700 mb-2">
                        Shkolla e interesuar *
                      </label>
                      <select
                        id="shkolla"
                        name="shkolla"
                        required
                        value={formData.shkolla}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      >
                        <option value="">Zgjidh shkollën</option>
                        <option value="9-vjecare">Shkolla 9-vjecare</option>
                        <option value="e-mesme">Shkolla e Mesme</option>
                        <option value="profesionale">Shkolla Profesionale</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="adresa" className="block text-sm font-medium text-gray-700 mb-2">
                      Adresa
                    </label>
                    <input
                      type="text"
                      id="adresa"
                      name="adresa"
                      value={formData.adresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Rruga, Qyteti"
                    />
                  </div>
                </div>

                {/* Mesazh */}
                <div>
                  <label htmlFor="mesazh" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesazh (Opsionale)
                  </label>
                  <textarea
                    id="mesazh"
                    name="mesazh"
                    rows={4}
                    value={formData.mesazh}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Pyetje shtesë ose komente..."
                  />
                </div>

                {/* Fallback Error Message */}
                {showFallback && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                          {submissionError}
                        </h3>
                        <div className="mt-2">
                          <div className="text-sm text-red-700">
                            <p>Ju lutemi përdorni butonin më poshtë për të dërguar regjistrimin përmes email client.</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <button
                            type="button"
                            onClick={handleEmailFallback}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                          >
                            <Mail className="mr-2" size={16} />
                            Dërgo përmes Email
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Butoni Submit */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full max-w-md py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-sm transition-all duration-300 rounded-xl shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Duke dërguar...' : 'Kërko Regjistrimin'}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Keni pyetje?
                </h3>
                <p className="text-gray-600 mb-4">
                  Na kontaktoni dhe do të ju ndihmojmë me çdo informacion të nevojshëm
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+35542225000"
                    className="flex items-center justify-center text-red-600 hover:text-red-700 font-medium"
                  >
                    <Phone className="mr-2" size={18} />
                   +355 69 405 4009
                  </a>
                  <a
                    href="mailto:qfp_donbosko@yahoo.it"
                    className="flex items-center justify-center text-red-600 hover:text-red-700 font-medium"
                  >
                    <Mail className="mr-2" size={18} />
                    qfp_donbosko@yahoo.it
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
    </div>
  );
};

export default Rregjistrohu;