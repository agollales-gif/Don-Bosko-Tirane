import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- KOMPONENTI HERO I PERSONALIZUAR PËR HISTORINË ---
const HistoriaHero: React.FC = () => {
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
            Rrënjët tona
          </span>
          <h1 className="text-[2rem] sm:text-[2.75rem] leading-[1.05] lg:text-6xl xl:text-7xl font-extrabold text-white font-plus-jakarta tracking-tight mb-3 lg:mb-6">
            HISTORIA E <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">FAMULLISË</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/95 max-w-xl font-medium leading-snug lg:leading-relaxed mb-2 lg:mb-4">
            Një udhëtim nëpër kohën e besimit
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg font-normal leading-relaxed">
            Zbuloni trashëgiminë shpirtërore të bashkisë sonë
          </p>
        </motion.div>
      </div>

      {/* 2. SILUETA E ANIMUAR - Church Silhouette Only */}
      <div className="relative w-full h-[30vh] min-h-[200px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-center p-4 sm:p-6 lg:p-16 pointer-events-none z-0 mt-auto lg:mt-0">
        <svg viewBox="0 0 24 24" className="w-full h-full max-h-[200px] sm:max-h-[260px] lg:max-h-[60vh] max-w-[90%] sm:max-w-[85%] lg:max-w-full text-white opacity-[0.4] lg:opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          {/* Church Silhouette */}
          <motion.g variants={drawVariants(0)} initial="hidden" animate="visible">
            {/* Main Church Structure */}
            <path d="M9 14L9 18L15 18L15 14Z" fill="currentColor" />
            {/* Roof */}
            <path d="M8 14L12 10L16 14Z" fill="currentColor" />
            {/* Tower */}
            <path d="M11 10L11 6L13 6L13 10Z" fill="currentColor" />
            {/* Cross on Tower */}
            <path d="M12 4L12 6L11 5L13 5Z" fill="currentColor" />
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

const FamulliaHistoria: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <HistoriaHero />
            <section className="py-16 lg:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta leading-none">
                        Historia e <br /> <span className="text-primary-red">Famullisë</span>
                    </h1>
                    <div className="w-24 h-2 bg-primary-red rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-medium">
                        <p>
                            Famullia "Maria Ndihmëtare" është një simbol i fesë dhe bashkimit në qytetin e Tiranës. Historia e saj është e lidhur ngushtë me rritjen e komunitetit salezian dhe dëshirën për të pasur një vend lutjeje për të gjithë.
                        </p>
                        <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 italic font-script text-2xl text-primary-red text-center">
                            "Kushdo që hyn në këtë shtëpi, le të gjejë paqe dhe shpresë."
                        </div>
                    </div>
                    <div className="aspect-square rounded-[48px] overflow-hidden shadow-2xl">
                        <img
                            src="/kisha/kisha1 (3).JPG"
                            alt="Parish History"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FamulliaHistoria;
