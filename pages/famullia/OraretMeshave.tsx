import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Clock, Phone, Mail, MapPin } from 'lucide-react';

// --- KOMPONENTI HERO I PERSONALIZUAR PËR ORARET E MESHAVE ---
const OraretHero: React.FC = () => {
  const drawVariants = (delay: number): Variants => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { delay, duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 0.8 }
    }
  });

  return (
    <section className="relative w-full min-h-[60vh] lg:min-h-[70vh] bg-[#9c252d] overflow-hidden flex flex-col lg:flex-row pt-20 lg:pt-0">
      
      {/* 1. TEKSTI */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-16 container mx-auto relative z-10 lg:w-1/2 py-12 lg:py-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <span className="inline-block py-1.5 px-4 mb-3 lg:mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-semibold uppercase tracking-widest text-[9px] sm:text-xs">
            Bashkohuni me ne
          </span>
          <h1 className="text-[2rem] sm:text-[2.75rem] leading-[1.05] lg:text-6xl xl:text-7xl font-extrabold text-white font-plus-jakarta tracking-tight mb-3 lg:mb-6">
            ORARET E <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">MESHAVE</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/95 max-w-xl font-medium leading-snug lg:leading-relaxed mb-2 lg:mb-4">
            Koha e Zotit
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg font-normal leading-relaxed">
            Kisha thirret komunitetin në takimin e rregullt
          </p>
        </motion.div>
      </div>

      {/* 2. SILUETA E ANIMUAR - Ora e Animuar */}
      <div className="relative w-full h-[30vh] min-h-[200px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-center p-4 sm:p-6 lg:p-16 pointer-events-none z-0 mt-auto lg:mt-0">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full max-h-[200px] sm:max-h-[260px] lg:max-h-[60vh] max-w-[90%] sm:max-w-[85%] lg:max-w-full text-white opacity-[0.4] lg:opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          {/* Ora e Madhe - Struktura bazë */}
          <motion.g variants={drawVariants(0)} initial="hidden" animate="visible">
            {/* Rrethi i jashtëm */}
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="0.4" fill="none" />
            {/* Rrethi i mesëm */}
            <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="0.3" fill="none" />
            {/* Rrethi i brendshëm */}
            <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="0.2" fill="none" />
          </motion.g>
          
          {/* Numrat e orës */}
          <motion.g variants={drawVariants(0.5)} initial="hidden" animate="visible">
            <text x="12" y="6" textAnchor="middle" fill="currentColor" fontSize="1.5" opacity="0.9">12</text>
            <text x="18" y="12.5" textAnchor="middle" fill="currentColor" fontSize="1.5" opacity="0.9">3</text>
            <text x="12" y="19" textAnchor="middle" fill="currentColor" fontSize="1.5" opacity="0.9">6</text>
            <text x="6" y="12.5" textAnchor="middle" fill="currentColor" fontSize="1.5" opacity="0.9">9</text>
          </motion.g>
          
          {/* Vija e minutave - të detajuara */}
          <motion.g variants={drawVariants(1)} initial="hidden" animate="visible">
            {/* Orët kryesorë */}
            <line x1="12" y1="4" x2="12" y2="5" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" />
            <line x1="20" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" />
            <line x1="12" y1="20" x2="12" y2="19" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" />
            <line x1="4" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" />
            
            {/* Minuta */}
            <line x1="16.97" y1="7.03" x2="16.27" y2="7.73" stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" />
            <line x1="16.97" y1="16.97" x2="16.27" y2="16.27" stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" />
            <line x1="7.03" y1="16.97" x2="7.73" y2="16.27" stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" />
            <line x1="7.03" y1="7.03" x2="7.73" y2="7.73" stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" />
          </motion.g>
          
          {/* Akrepat e orës - në lëvizje */}
          <motion.g variants={drawVariants(1.5)} initial="hidden" animate="visible">
            {/* Akrepa e orës - më e shkurtër */}
            <path d="M12 12L12 8" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" />
            {/* Akrepa e minutave - më e gjatë */}
            <path d="M12 12L16 14" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" />
            {/* Akrepa e sekondave - më e hollë */}
            <path d="M12 12L14 10" stroke="currentColor" strokeWidth="0.15" strokeLinecap="round" />
            {/* Pika qendrore */}
            <circle cx="12" cy="12" r="0.4" fill="currentColor" />
            {/* Rrethi qendror */}
            <circle cx="12" cy="12" r="0.6" stroke="currentColor" strokeWidth="0.2" fill="none" />
          </motion.g>
          
          {/* Rreze drite nga qendra */}
          <motion.g variants={drawVariants(2)} initial="hidden" animate="visible">
            {/* Rreze kryesore */}
            <path d="M12 12L12 3" stroke="currentColor" strokeWidth="0.15" strokeLinecap="round" />
            <path d="M12 12L21 12" stroke="currentColor" strokeWidth="0.15" strokeLinecap="round" />
            <path d="M12 12L12 21" stroke="currentColor" strokeWidth="0.15" strokeLinecap="round" />
            <path d="M12 12L3 12" stroke="currentColor" strokeWidth="0.15" strokeLinecap="round" />
            
            {/* Rreze diagonale */}
            <path d="M12 12L17 7" stroke="currentColor" strokeWidth="0.12" strokeLinecap="round" />
            <path d="M12 12L17 17" stroke="currentColor" strokeWidth="0.12" strokeLinecap="round" />
            <path d="M12 12L7 17" stroke="currentColor" strokeWidth="0.12" strokeLinecap="round" />
            <path d="M12 12L7 7" stroke="currentColor" strokeWidth="0.12" strokeLinecap="round" />
          </motion.g>
          
          {/* Rrethet e kohës - animuara */}
          <motion.g variants={drawVariants(2.5)} initial="hidden" animate="visible">
            {/* Rrethet koncentrike */}
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="0.08" fill="none" opacity="0.6" />
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.06" fill="none" opacity="0.4" />
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="0.04" fill="none" opacity="0.2" />
          </motion.g>
          
          {/* Pika kohore - rreth orës */}
          <motion.g variants={drawVariants(3)} initial="hidden" animate="visible">
            {/* Pika në pozicione kyçe */}
            <circle cx="12" cy="2" r="0.3" fill="currentColor" opacity="0.8" />
            <circle cx="22" cy="12" r="0.3" fill="currentColor" opacity="0.8" />
            <circle cx="12" cy="22" r="0.3" fill="currentColor" opacity="0.8" />
            <circle cx="2" cy="12" r="0.3" fill="currentColor" opacity="0.8" />
            
            {/* Pika diagonale */}
            <circle cx="19" cy="5" r="0.2" fill="currentColor" opacity="0.6" />
            <circle cx="19" cy="19" r="0.2" fill="currentColor" opacity="0.6" />
            <circle cx="5" cy="19" r="0.2" fill="currentColor" opacity="0.6" />
            <circle cx="5" cy="5" r="0.2" fill="currentColor" opacity="0.6" />
          </motion.g>
          
          {/* Valët e kohës - animuara */}
          <motion.g variants={drawVariants(3.5)} initial="hidden" animate="visible">
            {/* Valët e rritjes */}
            <circle cx="12" cy="12" r="0.5" fill="currentColor" opacity="0.9">
              <animate attributeName="r" values="0.5;2;0.5" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0.3;0.9" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="12" cy="12" r="0.5" fill="currentColor" opacity="0.7">
              <animate attributeName="r" values="0.5;2.5;0.5" dur="3s" begin="0.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="12" cy="12" r="0.5" fill="currentColor" opacity="0.5">
              <animate attributeName="r" values="0.5;3;0.5" dur="3s" begin="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3s" begin="1s" repeatCount="indefinite" />
            </circle>
          </motion.g>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 lg:h-32 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
      </div>
    </section>
  );
};

const OraretMeshave: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <OraretHero />
            <section className="py-16 lg:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta">
                        Oraret e <span className="text-[#9c252d]">Meshave</span>
                    </h1>
                    <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs">Bashkohuni me ne në lutje</p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    <div className="bg-slate-50 p-8 md:p-12 rounded-[64px] border border-slate-100 space-y-8">
                        <h3 className="text-2xl font-black uppercase text-gray-900 border-b border-[#9c252d]/20 pb-4 inline-block">Oraret e Meshave</h3>
                        <div className="space-y-6">
                            <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm">
                                <span className="font-black uppercase tracking-widest text-xs text-gray-500">E Hënë - E Shtunë</span>
                                <div className="flex items-center space-x-2 text-[#9c252d] font-black">
                                    <Clock size={16} />
                                    <span>18:00</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center bg-[#9c252d] p-6 rounded-3xl shadow-lg text-white">
                                <span className="font-black uppercase tracking-widest text-xs opacity-80">E Dielë</span>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2 font-black">
                                        <Clock size={16} />
                                        <span>09:00</span>
                                    </div>
                                    <div className="flex items-center space-x-2 font-black">
                                        <Clock size={16} />
                                        <span>11:00</span>
                                    </div>
                                    <div className="flex items-center space-x-2 font-black">
                                        <Clock size={16} />
                                        <span>18:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OraretMeshave;
