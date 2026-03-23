import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- KOMPONENTI HERO I PERSONALIZUAR PËR FAMULLITARIN ---
const RektoriHero: React.FC = () => {
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
            Përshëndetje
          </span>
          <h1 className="text-[2rem] sm:text-[2.75rem] leading-[1.05] lg:text-6xl xl:text-7xl font-extrabold text-white font-plus-jakarta tracking-tight mb-3 lg:mb-6">
            FJALA E <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">FAMULLITARIT</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/95 max-w-xl font-medium leading-snug lg:leading-relaxed mb-2 lg:mb-4">
            Mesazhe nga udhëheqësi ynë
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg font-normal leading-relaxed">
            Udhëzime dhe fjalë frymëzuese për bashkësinë tonë
          </p>
        </motion.div>
      </div>

      {/* 2. SILUETA E ANIMUAR - Kryq nga Imazhi */}
      <div className="relative w-full h-[30vh] min-h-[200px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-center p-4 sm:p-6 lg:p-16 pointer-events-none z-0 mt-auto lg:mt-0">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full max-h-[200px] sm:max-h-[260px] lg:max-h-[60vh] max-w-[90%] sm:max-w-[85%] lg:max-w-full text-white opacity-[0.4] lg:opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          {/* Kryqi - vertikala dhe horizontala */}
          <path d="M11 2H13V8H18V10H13V22H11V10H6V8H11V2Z" />
          
          {/* Trupi i Krishtit */}
          <path d="M12 8.5C10.8954 8.5 10 9.39543 10 10.5V13.5C10 14.6046 10.8954 15.5 12 15.5C13.1046 15.5 14 14.6046 14 13.5V10.5C14 9.39543 13.1046 8.5 12 8.5ZM12 9.5C12.5523 9.5 13 9.94772 13 10.5V13.5C13 14.0523 12.5523 14.5 12 14.5C11.4477 14.5 11 14.0523 11 13.5V10.5C11 9.94772 11.4477 9.5 12 9.5Z" />
          
          {/* Koka e Krishtit me kurorë me gjemba */}
          <path d="M12 8C11.1716 8 10.5 7.32843 10.5 6.5C10.5 5.67157 11.1716 5 12 5C12.8284 5 13.5 5.67157 13.5 6.5C13.5 7.32843 12.8284 8 12 8ZM12 5.5C11.4477 5.5 11 5.94772 11 6.5C11 7.05228 11.4477 7.5 12 7.5C12.5523 7.5 13 7.05228 13 6.5C13 5.94772 12.5523 5.5 12 5.5Z" />
          
          {/* Kurorë me gjemba */}
          <path d="M10.5 6C10.5 6 10 6 10 6.5C10 7 10.5 7 10.5 7C11 7 11.5 7 12 7C12.5 7 13 7 13.5 7C13.5 7 14 7 14 6.5C14 6 13.5 6 13.5 6C13 6 12.5 6 12 6C11.5 6 11 6 10.5 6Z" />
          
          {/* Duart e ngjitura në kryq */}
          <path d="M10 10.5C9.5 10.5 9 11 9 11.5C9 12 9.5 12.5 10 12.5C10.5 12.5 11 12 11 11.5C11 11 10.5 10.5 10 10.5Z" />
          <path d="M14 10.5C13.5 10.5 13 11 13 11.5C13 12 13.5 12.5 14 12.5C14.5 12.5 15 12 15 11.5C15 11 14.5 10.5 14 10.5Z" />
          
          {/* Këmbët e ngjitura në kryq */}
          <path d="M11 13.5C10.5 13.5 10 14 10 14.5C10 15 10.5 15.5 11 15.5C11.5 15.5 12 15 12 14.5C12 15 11.5 15.5 11 15.5C10.5 15.5 10 15 10 14.5C10 14 10.5 13.5 11 13.5Z" />
          <path d="M13 13.5C12.5 13.5 12 14 12 14.5C12 15 12.5 15.5 13 15.5C13.5 15.5 14 15 14 14.5C14 14 13.5 13.5 13 13.5Z" />
          
          {/* Veshja e Krishtit */}
          <path d="M10.5 11.5C10.5 11.5 10 12 10 12.5C10 13 10.5 13.5 11 13.5C11.5 13.5 12 13 12 12.5C12 13 11.5 13.5 11 13.5C10.5 13.5 10 13 10 12.5C10 12 10.5 11.5 10.5 11.5Z" />
          
          {/* Mali/Guri nën kryq */}
          <path d="M3 22C3 22 3 20 4 19C5 18 6 17 8 16C10 15 12 14 14 13C16 12 17 11 18 10C19 9 20 8 21 7C21 7 21 22 21 22C21 22 21 23 20 23C19 23 18 23 17 23C16 23 15 23 14 23C13 23 12 23 11 23C10 23 9 23 8 23C7 23 6 23 5 23C4 23 3 23 3 22Z" />
          
          {/* Detaje në mal */}
          <path d="M6 20C6 20 6 19 7 18C8 17 9 16 10 15" opacity="0.7" />
          <path d="M14 15C15 16 16 17 17 18C18 19 18 20 18 20" opacity="0.7" />
          <path d="M8 21C8 21 8 20 9 19" opacity="0.5" />
          <path d="M15 19C16 20 16 21 16 21" opacity="0.5" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 lg:h-32 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent"></div>
        <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
      </div>
    </section>
  );
};

const Rektori: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <RektoriHero />
            <section className="py-16 lg:py-24 px-6 md:px-12 max-w-4xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-12 md:p-20 rounded-[64px] shadow-sm border border-slate-100 space-y-12 relative"
                >
                    <div className="absolute top-10 right-10 text-[#9c252d]/10 text-9xl font-serif">"</div>

                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta">
                            Fjala e <span className="text-[#9c252d]">Famullitarit</span>
                        </h2>
                        <div className="w-16 h-1.5 bg-[#9c252d] rounded-full"></div>
                    </div>

                    <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-medium italic">
                        <p>
                            "Të dashur besimtarë dhe miq të Qendrës Don Bosko, ju mirëpresim në këtë hapësirë shpirtërore ku ndajmë fjalën e Zotit dhe dashurinë për njëri-tjetrin."
                        </p>
                        <p>
                            "Shenjtërorja jonë është një portë e hapur për të gjithë ata që kërkojnë një moment reflektimi, një lutje apo një buzëqeshje vëllazërore."
                        </p>
                    </div>

                    <div className="flex items-center space-x-6 pt-8">
                        <div className="w-20 h-20 bg-slate-200 rounded-2xl overflow-hidden grayscale">
                            <img src="/rektori_gino_marttuci.jpg" alt="Don Luigi Marttuci" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="font-black text-gray-900 uppercase text-xs tracking-widest">Don Luigi Marttuci</p>
                            <p className="text-[10px] font-bold text-[#9c252d] uppercase tracking-widest">Famullitari - Famullia Zoja Ndihmëtare</p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Rektori;
