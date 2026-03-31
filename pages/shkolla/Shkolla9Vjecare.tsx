import React from 'react';
import { motion, Variants } from 'framer-motion';
import SchoolTemplate from '../../components/SchoolTemplate';
import { Microscope, Globe, Trophy, CheckCircle, BookOpen, Code } from 'lucide-react';

// --- KOMPONENTI HERO I PERSONALIZUAR PËR SHKOLLËN 9-VJEÇARE ---
const NineYearHero: React.FC = () => {
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
              Cikli i Mesëm i Ulët
            </span>
            
            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl font-extrabold text-white font-plus-jakarta tracking-tight mb-4 lg:mb-6">
              SHKOLLA <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">9-VJEÇARE</span>
            </h1>
            
            <p className="text-lg lg:text-2xl text-white/95 max-w-xl font-medium leading-snug lg:leading-relaxed mb-3 lg:mb-4">
              Themelet e karakterit dhe dijes
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg font-normal leading-relaxed">
              Përqendrohemi në ndërtimin e themeleve akademike përmes "Sistemit Parandalues" të Don Boskos, duke përgatitur nxënësit me dije të solidat dhe vlera njerëzore të forta.
            </p>
            
          </motion.div>
        </div>
      </div>

      {/* 2. SILUETA E ANIMUAR (Specifike për 9-vjeçaren: Libër dhe Laps/Zbulim) */}
      <div className="relative w-full h-[38vh] min-h-[250px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-center p-6 lg:p-16 pointer-events-none z-0 mt-auto lg:mt-0">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full max-h-[260px] lg:max-h-[60vh] max-w-[85%] lg:max-w-full text-white opacity-[0.35] lg:opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          {/* Libri i hapur (Dija) */}
          <motion.path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" variants={drawVariants(0)} initial="hidden" animate="visible" />
          <motion.path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" variants={drawVariants(0.4)} initial="hidden" animate="visible" />
          
          {/* Lapsi (Krijimtaria) */}
          <motion.path d="M13.5 7L17 10.5L7.5 20H4v-3.5L13.5 7z" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" variants={drawVariants(1)} initial="hidden" animate="visible" />
          
          {/* Detaje shkencore */}
          <motion.path d="M18 10L18.5 11.5M19.5 12L18 12M16.5 12L18 12M18 14L18.5 12.5" stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" variants={drawVariants(1.8)} initial="hidden" animate="visible" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
      </div>
    </section>
  );
};

// --- STRUKTURA KRYESORE 9-VJEÇARE ---
const Shkolla9Vjecare: React.FC = () => {
    return (
        <div className="flex flex-col">
            <NineYearHero />

            <SchoolTemplate
                badge="Cikli i Mesëm i Ulët"
                title="SHKOLLA"
                titleHighlight="9-VJEÇARE"
                subtitle="Themelet e karakterit dhe dijes"
                description="Përqendrohemi në ndërtimin e themeleve akademike përmes 'Sistemit Parandalues' të Don Boskos, duke përgatitur nxënësit me dije të solidat dhe vlera njerëzore të forta."
                heroImage="/programet_arsimore/shkolla_9vjecare.jpg"
                statNumber="30+"
                statLabel="Vite Eksperiencë"
                
                quote='Edukatori duhet të jetë "aty", i pranishëm në jetën e të riut, duke ndarë gëzimet dhe vështirësitë e tij.'
                quoteAuthor="Shën Gjon Bosko"
                
                valueCards={[
                    { id: "01", title: "Laboratoret Shkencor", desc: "Eksperimentet e para në Kimi dhe Fizikë për një mësimdhënie praktike.", icon: <Microscope /> },
                    { id: "02", title: "Gjuhët e Huaja", desc: "Programe të avancuara të gjuhës Angleze dhe Italisht.", icon: <Globe /> },
                    { id: "03", title: "Sporte", desc: "Ekipet e Futbollit, Volejbollit dhe Basketbollit.", icon: <Trophy /> },
                    { id: "04", title: "Qytetaria", desc: "Edukim me vlerat e bashkëjetesës shoqërore.", icon: <CheckCircle /> }
                ]}
                
                modules={[
                    {
                        id: "01",
                        title: "Shkenca",
                        desc: "Njohuri të thelluara mbi botën që na rrethon përmes lëndëve shkencore.",
                        tags: ['Biologji', 'Fizikë', 'Kimi', 'Mjedis'],
                        icon: <Microscope size={24} />
                    },
                    {
                        id: "02",
                        title: "Gjuhë & Letërsi",
                        desc: "Analiza letrare dhe arti i oratorisë për një komunikim elokuent.",
                        tags: ['Letërsi', 'Oratori', 'Analizë'],
                        icon: <BookOpen size={24} />
                    },
                    {
                        id: "03",
                        title: "ICT (TIK)",
                        desc: "Bazat e programimit dhe përdorimi i sigurt i internetit.",
                        tags: ['Programim', 'Siguri', 'Teknologji'],
                        icon: <Code size={24} />
                    }
                ]}

                ctaTitle="Gati për të vizituar shkollën?"
                ctaSubtitle="Shkarkoni planin mësimor për vitin akademik 2024/25 dhe regjistrohuni sot."
                ctaPlaniLink="/shkolla/plani-akademik/9-vjecare"
                brochurePath="/brochures/9-vjecare.pdf"
                showStaff={true}
                staffType="9vjecare"
            />
        </div>
    );
};

export default Shkolla9Vjecare;