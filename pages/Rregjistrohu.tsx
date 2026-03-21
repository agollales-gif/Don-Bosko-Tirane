import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { User, Mail, Phone, Calendar, MapPin, GraduationCap, Edit3, CheckCircle, Users, Upload, Users2, Baby } from 'lucide-react';

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
    // Të dhënat e prindit
    emriPrindit: '',
    mbiemriPrindit: '',
    emailPrindit: '',
    telefonPrindit: '',
    adresaPrindit: '',
    
    // Të dhënat e fëmijës
    emriFemijes: '',
    mbiemriFemijes: '',
    datelindjaFemijes: '',
    gjiniaFemijes: '',
    
    // Shkolla e interesuar
    shkolla: '',
    niveli: '',
    
    // Mesazh shtesë
    mesazh: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setSubmissionError('');

    try {
      // Validate form data
      if (!formData.emriPrindit || !formData.mbiemriPrindit || !formData.emailPrindit || !formData.telefonPrindit || !formData.emriFemijes || !formData.mbiemriFemijes || !formData.datelindjaFemijes || !formData.shkolla) {
        setSubmissionError('Ju lutemi plotësoni të gjitha fushat e kërkuara.');
        return;
      }

      // Create email content using user's email client
      const subject = encodeURIComponent(`Kërkesë për Regjistrim - ${formData.emriFemijes} ${formData.mbiemriFemijes}`);
      const body = encodeURIComponent(`
Të nderuar stafi i Shkollës Don Bosko,

Ju dërgohet kjo kërkesë për regjistrim nga sistemi online i shkollës.

Të dhënat e prindit:
--------------------
Emri dhe Mbiemri: ${formData.emriPrindit} ${formData.mbiemriPrindit}
Email: ${formData.emailPrindit}
Telefon: ${formData.telefonPrindit}
Adresa: ${formData.adresaPrindit || 'Nuk është specifikuar'}

Të dhënat e fëmijës:
--------------------
Emri dhe Mbiemri: ${formData.emriFemijes} ${formData.mbiemriFemijes}
Datelindja: ${formData.datelindjaFemijes}
Gjinia: ${formData.gjiniaFemijes === 'mashkull' ? 'Mashkull' : formData.gjiniaFemijes === 'femër' ? 'Femër' : 'Nuk është specifikuar'}

Interesi akademik:
------------------
Lloji i Shkollës: ${formData.shkolla === '9-vjecare' ? 'Shkollë 9-vjecare' : formData.shkolla === 'e-mesme' ? 'Shkollë e Mesme' : formData.shkolla === 'profesionale' ? 'Shkollë Profesionale' : formData.shkolla}

Data e dërgimit: ${new Date().toLocaleDateString('sq-AL', { day: '2-digit', month: '2-digit', year: 'numeric' })}

Mesazhi shtesë:
---------------
${formData.mesazh || 'Nuk ka mesazh shtesë'}

Ju lutemi të konsideroni kërkesën dhe të na kontaktoni për hapa të mëtejshëm.

Me respekt,
${formData.emriPrindit} ${formData.mbiemriPrindit}
Email: ${formData.emailPrindit}
Telefon: ${formData.telefonPrindit}
      `);
      
      // Open user's email client with pre-filled content
      window.open(`mailto:qfp_donbosko@yahoo.it?subject=${subject}&body=${body}`, '_blank');
      
      // Show success message and reset form
      setTimeout(() => {
        alert('Faleminderit! Email client u hap. Ju lutemi dërgoni emailin për të përfunduar regjistrimin.');
        
        // Reset form
        setFormData({
          emriPrindit: '',
          mbiemriPrindit: '',
          emailPrindit: '',
          telefonPrindit: '',
          adresaPrindit: '',
          emriFemijes: '',
          mbiemriFemijes: '',
          datelindjaFemijes: '',
          gjiniaFemijes: '',
          shkolla: '',
          niveli: '',
          mesazh: ''
        });
        setIsSubmitting(false);
      }, 500);
      
    } catch (error) {
      console.error('Gabim gjatë përgatitjes së emailit:', error);
      setSubmissionError('Gabim gjatë përgatitjes së emailit. Ju lutemi provoni përsëri.');
      setIsSubmitting(false);
    }
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
            
                {/* Të dhënat e prindit */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Users className="mr-3 text-red-600" size={28} />
                    Të dhënat e prindit
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="emriPrindit" className="block text-sm font-medium text-gray-700 mb-2">
                        Emri i prindit *
                      </label>
                      <input
                        type="text"
                        id="emriPrindit"
                        name="emriPrindit"
                        required
                        value={formData.emriPrindit}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="Shkruaj emrin e prindit"
                      />
                    </div>
                    <div>
                      <label htmlFor="mbiemriPrindit" className="block text-sm font-medium text-gray-700 mb-2">
                        Mbiemri i prindit *
                      </label>
                      <input
                        type="text"
                        id="mbiemriPrindit"
                        name="mbiemriPrindit"
                        required
                        value={formData.mbiemriPrindit}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="Shkruaj mbiemrin e prindit"
                      />
                    </div>
                  </div>
                </div>

                {/* Informata kontakti të prindit */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Mail className="mr-3 text-red-600" size={28} />
                    Informata kontakti të prindit
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="emailPrindit" className="block text-sm font-medium text-gray-700 mb-2">
                        Email i prindit *
                      </label>
                      <input
                        type="email"
                        id="emailPrindit"
                        name="emailPrindit"
                        required
                        value={formData.emailPrindit}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="email@shembull.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefonPrindit" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon i prindit *
                      </label>
                      <input
                        type="tel"
                        id="telefonPrindit"
                        name="telefonPrindit"
                        required
                        value={formData.telefonPrindit}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="+355 XX XXX XXXX"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="adresaPrindit" className="block text-sm font-medium text-gray-700 mb-2">
                      Adresa e prindit
                    </label>
                    <input
                      type="text"
                      id="adresaPrindit"
                      name="adresaPrindit"
                      value={formData.adresaPrindit}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Rruga, Qyteti"
                    />
                  </div>
                </div>

                {/* Të dhënat e fëmijës */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Baby className="mr-3 text-red-600" size={28} />
                    Të dhënat e fëmijës
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="emriFemijes" className="block text-sm font-medium text-gray-700 mb-2">
                        Emri i fëmijës *
                      </label>
                      <input
                        type="text"
                        id="emriFemijes"
                        name="emriFemijes"
                        required
                        value={formData.emriFemijes}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="Shkruaj emrin e fëmijës"
                      />
                    </div>
                    <div>
                      <label htmlFor="mbiemriFemijes" className="block text-sm font-medium text-gray-700 mb-2">
                        Mbiemri i fëmijës *
                      </label>
                      <input
                        type="text"
                        id="mbiemriFemijes"
                        name="mbiemriFemijes"
                        required
                        value={formData.mbiemriFemijes}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="Shkruaj mbiemrin e fëmijës"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label htmlFor="datelindjaFemijes" className="block text-sm font-medium text-gray-700 mb-2">
                        Datëlindja e fëmijës *
                      </label>
                      <input
                        type="date"
                        id="datelindjaFemijes"
                        name="datelindjaFemijes"
                        required
                        value={formData.datelindjaFemijes}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="gjiniaFemijes" className="block text-sm font-medium text-gray-700 mb-2">
                        Gjinia e fëmijës
                      </label>
                      <select
                        id="gjiniaFemijes"
                        name="gjiniaFemijes"
                        value={formData.gjiniaFemijes}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      >
                        <option value="">Zgjidhni gjininë</option>
                        <option value="mashkull">Mashkull</option>
                        <option value="femër">Femër</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Shkolla e interesuar */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <GraduationCap className="mr-3 text-red-600" size={28} />
                    Shkolla e interesuar
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <option value="9-vjecare">Shkollë 9-vjecare</option>
                        <option value="e-mesme">Shkolla e Mesme</option>
                        <option value="profesionale">Shkollë Profesionale</option>
                      </select>
                    </div>
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

                {/* Error Message */}
                {submissionError && (
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
                    {isSubmitting ? 'Duke dërguar...' : 'KËRKO REGJISTRIM'}
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