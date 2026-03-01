import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText, Users, Database } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const drawVariants = (delay: number): Variants => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        delay, 
        duration: 3, 
        ease: "easeInOut", 
        repeat: Infinity, 
        repeatType: "loop", 
        repeatDelay: 0.8 
      }
    }
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[100svh] lg:min-h-[85vh] bg-gradient-to-br from-red-900 via-red-800 to-red-900 overflow-hidden flex flex-col lg:flex-row pt-28 lg:pt-0">
        
        {/* Silueta e Animuar */}
        <div className="absolute inset-0 lg:left-1/2 lg:w-1/2 h-full flex items-center justify-center p-6 lg:p-24 pointer-events-none z-0">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full max-h-[40vh] lg:max-h-full text-white/20 opacity-[0.25]" xmlns="http://www.w3.org/2000/svg">
            {/* Shield me Lock */}
            <motion.path d="M12 1L3 9L9 1V7" stroke="currentColor" strokeWidth="0.3" variants={drawVariants(0)} initial="hidden" animate="visible" />
            <motion.path d="M9 1L12 1L16 7V9" stroke="currentColor" strokeWidth="0.3" variants={drawVariants(0.5)} initial="hidden" animate="visible" />
            <motion.path d="M16 7L12 1L21 7V9" stroke="currentColor" strokeWidth="0.3" variants={drawVariants(1)} initial="hidden" animate="visible" />
            <motion.path d="M12 1L21 7V16" stroke="currentColor" strokeWidth="0.3" variants={drawVariants(1.5)} initial="hidden" animate="visible" />
            
            {/* Data Protection Icons */}
            <motion.circle cx="6" cy="12" r="1" stroke="currentColor" strokeWidth="0.2" fill="currentColor" variants={drawVariants(2)} initial="hidden" animate="visible" />
            <motion.path d="M6 8L6 12V16" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(2.3)} initial="hidden" animate="visible" />
            <motion.path d="M6 16L6 12V8" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(2.6)} initial="hidden" animate="visible" />
            
            {/* Key Icon */}
            <motion.path d="M8 21L16 21M4" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(3)} initial="hidden" animate="visible" />
            <motion.path d="M13 17L8 17H18" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(3.3)} initial="hidden" animate="visible" />
            <motion.path d="M13 17L8 17V18" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(3.6)} initial="hidden" animate="visible" />
            
            {/* Database Lines */}
            <motion.path d="M3 12H3V21" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(4)} initial="hidden" animate="visible" />
            <motion.path d="M7 12H21V3" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(4.3)} initial="hidden" animate="visible" />
            <motion.path d="M21 12H3V21" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(4.6)} initial="hidden" animate="visible" />
            
            {/* Eye Icon */}
            <motion.circle cx="12" cy="12" r="1" stroke="currentColor" strokeWidth="0.2" fill="none" variants={drawVariants(5)} initial="hidden" animate="visible" />
            <motion.path d="M9 12C9 17 15.17 12 9" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(5.3)} initial="hidden" animate="visible" />
            <motion.path d="M15 12C15.17 12 9 20.17 12 15" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(5.6)} initial="hidden" animate="visible" />
          </svg>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 container mx-auto relative z-10 lg:w-1/2">
          <div className="max-w-3xl text-left space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              
              <div className="inline-flex items-center space-x-4 mb-8">
                <div className="p-3 bg-red-600/10 backdrop-blur-md rounded-full border border-red-600/20">
                  <Shield className="w-6 h-6 text-red-100" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                    POLITIKA E <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">PRIVATËSISË</span>
                  </h1>
                  <div className="w-16 h-1 bg-white/20 rounded-full mt-4 lg:mt-6"></div>
                </div>
              </div>
              <p className="text-lg lg:text-xl text-white/95 max-w-2xl font-medium leading-snug lg:leading-relaxed">
                Mbrojtja e të dhënave tuaja është prioritet ynë. Ne kemi zbatuar masat më të avansuara të sigurisë.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32 z-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1 bg-white">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="prose max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Section 1 */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Lock className="w-6 h-6 text-slate-600 mr-3" />
                    Të dhënat që mbledhim
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <div>
                      <h3 className="text-lg font-medium mb-2">1.1 Informacionet</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-1 text-gray-800">Identitet</h4>
                          <p className="text-sm">Emri, mbiemri, email, telefon</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-1 text-gray-800">Arsimore</h4>
                          <p className="text-sm">Historiku akademik, aftësi</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">1.2 Përdorimi</h3>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Përmirësimi i shërbimeve</li>
                        <li>Komunikimi për aktivitete</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">1.3 Ndarja</h3>
                      <p className="text-sm">Nuk ndajmë të dhëna me palë të treta pa autorizim.</p>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Eye className="w-6 h-6 text-slate-600 mr-3" />
                    Cookies
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-sm">Përdorim cookies për të përmirësuar përvojën tuaj në faqe.</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Funksione thelbësike</li>
                      <li>Analizë trafiku</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Rights & Contact */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 mt-8">
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <FileText className="w-5 h-5 text-slate-600 mr-2" />
                  Ligji i Zbatueshëm
                </h3>
                <p className="text-sm text-gray-600">
                  Këto kushte rregullohen sipas ligjeve të Republikës së Shqipërisë.
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link
                  to="/"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                >
                  Kthehu në Faqen Kryesore
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
