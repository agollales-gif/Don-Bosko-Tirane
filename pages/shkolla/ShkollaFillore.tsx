import React from 'react';
import { motion, Variants } from 'framer-motion';
import SchoolTemplate from '../../components/SchoolTemplate';
import { Microscope, Languages, Trophy, CheckCircle } from 'lucide-react';

// --- KOMPONENTI HERO I PERSONALIZUAR PËR SHKOLLËN FILLORE ---
const FilloreHero: React.FC = () => {
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
              Cikli Fillor
            </span>
            
            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl font-extrabold text-white font-plus-jakarta tracking-tight mb-4 lg:mb-6">
              SHKOLLA <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">FILLORE</span>
            </h1>
            
            <p className="text-lg lg:text-2xl text-white/95 max-w-xl font-medium leading-snug lg:leading-relaxed mb-3 lg:mb-4">
              Themelet e karakterit dhe dijes
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg font-normal leading-relaxed">
              Ndërtojmë themelet e para përmes kuriozitetit dhe metodologjisë së Don Boskos, duke krijuar një mjedis ku çdo fëmijë ndihet i dashur.
            </p>
            
          </motion.div>
        </div>
      </div>

      {/* 2. SILUETA E ANIMUAR */}
      <div className="relative w-full h-[38vh] min-h-[250px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-center p-6 lg:p-16 pointer-events-none z-0 mt-auto lg:mt-0">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full max-h-[260px] lg:max-h-[60vh] max-w-[85%] lg:max-w-full text-white opacity-[0.35] lg:opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          {/* Libri i Hapur */}
          <motion.path d="M12 6.5C9.5 5 6 5 3 6.5V20.5C6 19 9.5 19 12 20.5" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0)} initial="hidden" animate="visible" />
          <motion.path d="M12 6.5C14.5 5 18 5 21 6.5V20.5C18 19 14.5 19 12 20.5" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0.3)} initial="hidden" animate="visible" />
          <motion.path d="M12 6.5V20.5" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0.6)} initial="hidden" animate="visible" />
          
          {/* Avioni i letrës */}
          <motion.path d="M22 2L11 13" stroke="currentColor" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(1)} initial="hidden" animate="visible" />
          <motion.path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(1.2)} initial="hidden" animate="visible" />
          
          {/* Yjet */}
          <motion.path d="M5 2.5L5.5 4M6.5 4.5L5 4.5M3.5 4.5L5 4.5M5 6.5L5.5 5" stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" variants={drawVariants(1.8)} initial="hidden" animate="visible" />
          <motion.path d="M18 10L18.5 11.5M19.5 12L18 12M16.5 12L18 12M18 14L18.5 12.5" stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" variants={drawVariants(2.1)} initial="hidden" animate="visible" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
      </div>
    </section>
  );
};

// --- STRUKTURA KRYESORE ORIGJINALE ---
const ShkollaFillore: React.FC = () => {
    return (
        <div className="flex flex-col">
            <FilloreHero />

            <SchoolTemplate
                badge="Cikli Fillor"
                title="SHKOLLA"
                titleHighlight="FILLORE"
                subtitle="Themelet e karakterit dhe dijes"
                description="Përqendrohemi në ndërtimin e themeleve të para të dijes përmes lojës, kuriozitetit dhe 'Sistemit Parandalues' të Don Boskos, duke krijuar një mjedis ku çdo fëmijë ndihet i dashur dhe i vlerësuar."
                heroImage="/shkolla_fillore.jpg"
                statNumber="20+"
                statLabel="Vite Eksperiencë"
                
                // KËTU U HOQËN TË DHËNAT E KOORDINATORES
                
                quote='Edukatori duhet të jetë "aty", i pranishëm në jetën e të riut, duke ndarë gëzimet dhe vështirësitë e tij.'
                quoteAuthor="Shën Gjon Bosko"
                valueCards={[
                    { id: "01", title: "Laboratoret Shkencor", desc: "Eksperimente të sigurta për Kimi dhe Fizikë që në fillore.", icon: <Microscope />, link: "/shkolla/mjediset/laboratoret-shkencor" },
                    { id: "02", title: "Gjuhët e Huaja", desc: "Integrim i hershëm i gjuhës Angleze dhe Italisht.", icon: <Languages /> },
                    { id: "03", title: "Sporte", desc: "Klasa të dedikuara Futbolli, Volejbolli dhe Basketbolli.", icon: <Trophy /> },
                    { id: "04", title: "Kercim", desc: "Zhvillimi i fizikut dhe shpirtit përmes aktiviteteve rekreative dhe sportive.", icon: <CheckCircle /> }
                ]}
                modules={[
                    { id: "01", title: "Gjuhët e Huaja", desc: "Komunikim bazë, këngë dhe lojëra në anglisht për një përthithje natyrale.", tags: ['Komunikim', 'Këngë', 'Lojëra'], icon: <Languages size={18} /> },
                    { id: "02", title: "Matematikë", desc: "Hapat e parë drejt logjikës, numrat dhe zbulimi i formave gjeometrike.", tags: ['Logjikë', 'Numra', 'Gjeometri'], icon: <span className="text-2xl">🔢</span> },
                    { id: "03", title: "Edukim Artistik", desc: "Zhvillimi i kreativitetit përmes pikturës, muzikës dhe lëvizjes skenike.", tags: ['Pikturë', 'Muzikë', 'Lëvizje'], icon: <span className="text-2xl">🎨</span> }
                ]}
                ctaTitle="Gati për të vizituar shkollën?"
                ctaSubtitle="Shkarkoni planin mësimor 2024/25 dhe bëhuni pjesë e familjes sonë."
                ctaPlaniLink="/shkolla/plani-akademik/fillore"
                brochurePath="/brochures/Fillore.pdf"
                showStaff={true}
                staffType="fillore"
            />
        </div>
    );
};

export default ShkollaFillore;