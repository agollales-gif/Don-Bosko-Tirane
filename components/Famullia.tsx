import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TRANSLATIONS } from '../constants';

// --- KOMPONENTI HERO I PERSONALIZUAR PËR FAMULLINË ---
const FamulliaHero: React.FC = () => {
  const drawVariants = (delay: number): Variants => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { delay, duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 0.8 }
    }
  });

  return (
    <section className="relative w-full min-h-[100svh] lg:min-h-[85vh] bg-[#9c252d] overflow-hidden flex flex-col lg:flex-row pt-20 lg:pt-0">
      
      {/* 1. TEKSTI */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-16 container mx-auto relative z-10 lg:w-1/2 py-12 lg:py-0">
        <div className="max-w-2xl text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            
            <span className="inline-block py-1.5 px-4 mb-3 lg:mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-semibold uppercase tracking-widest text-[9px] sm:text-xs">
              Shtëpia e Lutjes
            </span>
            
            <h1 className="text-[2rem] sm:text-[2.75rem] leading-[1.05] lg:text-6xl xl:text-7xl font-extrabold text-white font-plus-jakarta tracking-tight mb-3 lg:mb-6">
              FAMULLIA <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">ZOJA NDIHMËTARE</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/95 max-w-xl font-medium leading-snug lg:leading-relaxed mb-2 lg:mb-4">
              Ku besimi takon bashkësinë
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg font-normal leading-relaxed">
              Një hapësirë e shenjtë ku besimtarët mblidhen për të lutur, për të rritur shpirtërisht dhe për të ndërtuar një komunitet të fortë të bazuar në vlerat e krishtera.
            </p>
            
          </motion.div>
        </div>
      </div>

      {/* 2. SILUETA E ANIMUAR - Church Theme */}
      <div className="relative w-full h-[30vh] min-h-[200px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-center p-4 sm:p-6 lg:p-16 pointer-events-none z-0 mt-auto lg:mt-0">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full max-h-[200px] sm:max-h-[260px] lg:max-h-[60vh] max-w-[90%] sm:max-w-[85%] lg:max-w-full text-white opacity-[0.4] lg:opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          {/* Church Cross */}
          <motion.path d="M12 2L12 6M10 4L14 4" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" variants={drawVariants(0)} initial="hidden" animate="visible" />
          
          {/* Church Roof */}
          <motion.path d="M6 8L12 4L18 8" stroke="currentColor" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0.3)} initial="hidden" animate="visible" />
          
          {/* Church Walls */}
          <motion.path d="M7 8L7 16L17 16L17 8" stroke="currentColor" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0.6)} initial="hidden" animate="visible" />
          
          {/* Church Door */}
          <motion.path d="M10 12L10 16M14 12L14 16" stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" variants={drawVariants(0.9)} initial="hidden" animate="visible" />
          <motion.path d="M10 12L14 12" stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" variants={drawVariants(1.1)} initial="hidden" animate="visible" />
          
          {/* Church Windows */}
          <motion.circle cx="12" cy="10" r="1" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(1.3)} initial="hidden" animate="visible" />
          <motion.circle cx="8.5" cy="10" r="0.8" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(1.5)} initial="hidden" animate="visible" />
          <motion.circle cx="15.5" cy="10" r="0.8" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(1.7)} initial="hidden" animate="visible" />
          
          {/* Foundation */}
          <motion.path d="M5 16L19 16" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" variants={drawVariants(1.9)} initial="hidden" animate="visible" />
          
          {/* Ground/Earth */}
          <motion.path d="M3 18L21 18" stroke="currentColor" strokeWidth="0.25" strokeLinecap="round" variants={drawVariants(2.1)} initial="hidden" animate="visible" />
          
          {/* Rays of Light */}
          <motion.path d="M12 6L11 8M12 6L13 8" stroke="currentColor" strokeWidth="0.15" strokeLinecap="round" variants={drawVariants(2.3)} initial="hidden" animate="visible" />
          <motion.path d="M8 10L6 11M16 10L18 11" stroke="currentColor" strokeWidth="0.15" strokeLinecap="round" variants={drawVariants(2.5)} initial="hidden" animate="visible" />
          
          {/* Community dots around church */}
          <motion.circle cx="4" cy="14" r="0.5" stroke="currentColor" strokeWidth="0.15" variants={drawVariants(2.7)} initial="hidden" animate="visible" />
          <motion.circle cx="20" cy="14" r="0.5" stroke="currentColor" strokeWidth="0.15" variants={drawVariants(2.9)} initial="hidden" animate="visible" />
          <motion.circle cx="6" cy="20" r="0.5" stroke="currentColor" strokeWidth="0.15" variants={drawVariants(3.1)} initial="hidden" animate="visible" />
          <motion.circle cx="18" cy="20" r="0.5" stroke="currentColor" strokeWidth="0.15" variants={drawVariants(3.3)} initial="hidden" animate="visible" />
          <motion.circle cx="12" cy="22" r="0.5" stroke="currentColor" strokeWidth="0.15" variants={drawVariants(3.5)} initial="hidden" animate="visible" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 lg:h-32 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
      </div>
    </section>
  );
};

const Famullia: React.FC = () => {
    const language = 'AL';
    const t = TRANSLATIONS[language];

    return (
        <div className="flex flex-col">
            <FamulliaHero />
            
            {/* Content Section */}
            <section id="famullia" className="bg-[#fafaf5] py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8 lg:space-y-12"
                        >
                            <div className="space-y-4 sm:space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="w-16 h-16 sm:w-20 sm:h-20 bg-[#9c252d]/5 rounded-3xl flex items-center justify-center text-2xl sm:text-3xl"
                                >
                                    ⛪
                                </motion.div>
                                <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta leading-none">
                                    Bashkësia e <span className="text-[#9c252d]">Besimit</span>
                                </h2>
                                <p className="text-lg sm:text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
                                    Një shtëpi për të gjithë, ku lutja dhe bashkësia ndihmojnë në rritjen shpirtërore dhe njerëzore të çdo besimtari.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:gap-6">
                                <Link to="/famullia/historia" className="p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4 sm:space-x-6 group hover:translate-x-1 transition-all">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#9c252d] group-hover:bg-[#9c252d] group-hover:text-white transition-all">
                                        📜
                                    </div>
                                    <div>
                                        <p className="font-black text-gray-900 uppercase text-xs sm:text-xs tracking-widest">Historia</p>
                                        <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase">Zbuloni rrënjët tona</p>
                                    </div>
                                </Link>

                                <Link to="/famullia/rektori" className="p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4 sm:space-x-6 group hover:translate-x-1 transition-all">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#9c252d] group-hover:bg-[#9c252d] group-hover:text-white transition-all">
                                        👤
                                    </div>
                                    <div>
                                        <p className="font-black text-gray-900 uppercase text-xs sm:text-xs tracking-widest">Rektori</p>
                                        <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase">Përshëndetja e Rektorit</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <Link to="/famullia/oraret-meshes" className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#9c252d] text-white font-bold uppercase tracking-widest text-[10px] sm:text-[11px] rounded-xl hover:bg-black transition-all duration-300 shadow-xl shadow-[#9c252d]/20 text-center">
                                    Oraret e Meshave
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative hidden lg:block"
                        >
                            <div className="aspect-[4/5] rounded-[64px] overflow-hidden shadow-2xl">
                                <img
                                    src="/kisha/Bashkesia.webp"
                                    alt="Church Interior"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Mobile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="lg:hidden relative"
                        >
                            <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl">
                                <img
                                    src="/kisha/Bashkesia.webp"
                                    alt="Church Interior"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Famullia;
