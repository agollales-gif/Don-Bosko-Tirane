import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, FileText, Gavel, Users, AlertTriangle } from 'lucide-react';

const TermsOfUse: React.FC = () => {
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
      {/* --- Hero Section --- */}
      <section className="relative w-full min-h-[100svh] lg:min-h-[85vh] bg-gradient-to-br from-red-900 via-red-800 to-red-900 overflow-hidden flex items-center pt-20 lg:pt-0">
        
        {/* Animated Silhouette Background Layer */}
        {/* z-0 keeps it in the background, absolute inset-0 fills the screen */}
        <div className="absolute inset-0 lg:left-1/2 lg:w-1/2 h-full flex items-center justify-center p-6 lg:p-24 pointer-events-none z-0">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className="w-full h-full max-h-[40vh] lg:max-h-full text-white/20 opacity-[0.25]" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Document Outline */}
            <motion.path d="M4 2L4 22L20 22L20 8L14 2L4 2" stroke="currentColor" strokeWidth="0.3" variants={drawVariants(0)} initial="hidden" animate="visible" fill="none" />
            <motion.path d="M14 2L14 8L20 8" stroke="currentColor" strokeWidth="0.3" variants={drawVariants(0.5)} initial="hidden" animate="visible" fill="none" />
            
            {/* Document Lines */}
            <motion.path d="M6 10L18 10" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(1)} initial="hidden" animate="visible" />
            <motion.path d="M6 13L14 13" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(1.3)} initial="hidden" animate="visible" />
            <motion.path d="M6 16L16 16" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(1.6)} initial="hidden" animate="visible" />
            
            {/* Seal/Circle */}
            <motion.circle cx="16" cy="18" r="2" stroke="currentColor" strokeWidth="0.3" fill="none" variants={drawVariants(2)} initial="hidden" animate="visible" />
            <motion.circle cx="16" cy="18" r="1.5" stroke="currentColor" strokeWidth="0.2" fill="currentColor" opacity="0.3" variants={drawVariants(2.3)} initial="hidden" animate="visible" />
            
            {/* Signature Lines */}
            <motion.path d="M8 19L12 19" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(3)} initial="hidden" animate="visible" />
            <motion.path d="M8 20.5L11 20.5" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(3.3)} initial="hidden" animate="visible" />
            
            {/* Decorative Elements - Hidden on small mobile to reduce clutter */}
            <motion.path className="hidden sm:block" d="M16 16.5L16 17.5" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(4)} initial="hidden" animate="visible" />
            <motion.path className="hidden sm:block" d="M17 18L18 18" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(4.3)} initial="hidden" animate="visible" />
            <motion.path className="hidden sm:block" d="M16 18.5L16 19.5" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(4.6)} initial="hidden" animate="visible" />
            <motion.path className="hidden sm:block" d="M14 18L15 18" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(5)} initial="hidden" animate="visible" />
          </svg>
        </div>

        {/* Content Layer */}
        {/* z-10 ensures text is always on top of the SVG silhouette */}
        <div className="relative z-10 w-full px-6 lg:px-16 container mx-auto lg:w-1/2">
          <div className="max-w-3xl text-left space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              
              <div className="inline-flex items-center space-x-4 mb-8">
                <div className="p-3 bg-red-600/20 backdrop-blur-md rounded-full border border-red-600/30">
                  <Gavel className="w-6 h-6 text-red-100" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                    KUSHTET E <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">PËRDORIMIT</span>
                  </h1>
                  <div className="w-16 h-1 bg-white/20 rounded-full mt-4 lg:mt-6"></div>
                </div>
              </div>
              <p className="text-lg lg:text-xl text-white max-w-2xl font-medium leading-snug lg:leading-relaxed drop-shadow-sm">
                Përdorimi i platformës sonë nënshtrohet këtyre kushteve. Ju lutemi lexoni me kujdes.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative Bottom Transition Fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32 z-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent"></div>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <div className="flex-1 bg-white">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative -mt-20 z-30 border border-gray-100"
          >
            <div className="prose max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                
                {/* Section 1: User Responsibility */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Shield className="w-6 h-6 text-slate-600 mr-3" />
                    Përgjegjësia e Përdoruesit
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-gray-800">2.1 Përdorimi i përmbajtjes</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                          <h4 className="font-bold mb-1 text-green-800 text-xs uppercase tracking-wider">Lejuar</h4>
                          <p className="text-sm">Përdorim personal, mësim</p>
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                          <h4 className="font-bold mb-1 text-red-800 text-xs uppercase tracking-wider">I ndaluar</h4>
                          <p className="text-sm">Kopjim, shpërndarje komerciale</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-gray-800">2.2 Kufizimet</h3>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Përmbajtje offensive</li>
                        <li>Violim të drejtash autorësie</li>
                        <li>Ndërhyrje në sistem</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 2: Legal Limits */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-slate-600 mr-3" />
                    Kufizimet Ligjore
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-sm leading-relaxed">
                      Platforma operon sipas ligjeve të Republikës së Shqipërisë. Ne rezervojmë të drejtën të modifikojmë këto kushte në çdo kohë.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2"></div>
                        <p className="text-sm">Mbrojtja e të dhënave personale (GDPR compliant)</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2"></div>
                        <p className="text-sm">Ligji për të drejtat e autorit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Info & Contact */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mt-8">
                <h3 className="text-lg font-medium mb-3 flex items-center text-gray-800">
                  <FileText className="w-5 h-5 text-slate-600 mr-2" />
                  Ligji i Zbatueshëm
                </h3>
                <p className="text-sm text-gray-600">
                  Këto kushte rregullohen dhe interpretohen sipas legjislacionit në fuqi të Republikës së Shqipërisë. Çdo mosmarrëveshje do të zgjidhet në Gjykatën e Rrethit Gjyqësor Tiranë.
                </p>
              </div>

              <div className="mt-12 text-center">
                <Link
                  to="/"
                  className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all hover:shadow-lg active:scale-95"
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

export default TermsOfUse;