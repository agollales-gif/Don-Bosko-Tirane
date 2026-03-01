import React from 'react';
import { motion, Variants } from 'framer-motion';
import SchoolTemplate from '../../components/SchoolTemplate';
import { Network, ShieldCheck, Code, Share2, Settings } from 'lucide-react';

// --- KOMPONENTI HERO I PERSONALIZUAR PËR SHKOLLËN PROFESIONALE TIK ---
const ProfesionaleHero: React.FC = () => {
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
              Cisco Certified Center
            </span>
            
            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl font-extrabold text-white font-plus-jakarta tracking-tight mb-4 lg:mb-6">
              GJIMNAZI <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">PROFESIONAL TIK</span>
            </h1>
            
            <p className="text-lg lg:text-2xl text-white/95 max-w-xl font-medium leading-snug lg:leading-relaxed mb-3 lg:mb-4">
              Inovacioni takon zanatin e së ardhmes
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg font-normal leading-relaxed">
              Trajnim intensiv 70% praktik në laboratorët tanë të avancuar për rrjetat, programimin dhe sigurinë kibernetike.
            </p>
            
          </motion.div>
        </div>
      </div>

      {/* 2. SILUETA E ANIMUAR (Specifike për TIK: Rrjeti dhe Kodi) */}
      <div className="relative w-full h-[38vh] min-h-[250px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-center p-6 lg:p-16 pointer-events-none z-0 mt-auto lg:mt-0">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full max-h-[260px] lg:max-h-[60vh] max-w-[85%] lg:max-w-full text-white opacity-[0.35] lg:opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          {/* Nyjet e Rrjetit (Networking nodes) */}
          <motion.circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="0.3" variants={drawVariants(0)} initial="hidden" animate="visible" />
          <motion.circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="0.3" variants={drawVariants(0.4)} initial="hidden" animate="visible" />
          <motion.circle cx="20" cy="4" r="2" stroke="currentColor" strokeWidth="0.3" variants={drawVariants(0.4)} initial="hidden" animate="visible" />
          <motion.circle cx="20" cy="20" r="2" stroke="currentColor" strokeWidth="0.3" variants={drawVariants(0.4)} initial="hidden" animate="visible" />
          <motion.circle cx="4" cy="20" r="2" stroke="currentColor" strokeWidth="0.3" variants={drawVariants(0.4)} initial="hidden" animate="visible" />
          
          {/* Lidhjet e Rrjetit */}
          <motion.path d="M6 6L10 10M14 14L18 18M18 6L14 10M10 14L6 18" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(1)} initial="hidden" animate="visible" />
          
          {/* Simboli i Kodit </> */}
          <motion.path d="M8 10L5 12L8 14" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" variants={drawVariants(1.5)} initial="hidden" animate="visible" />
          <motion.path d="M16 10L19 12L16 14" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" variants={drawVariants(1.5)} initial="hidden" animate="visible" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
      </div>
    </section>
  );
};

// --- STRUKTURA KRYESORE PROFESIONALE ---
const ShkollaProfesionale: React.FC = () => {
    return (
        <div className="flex flex-col">
            <ProfesionaleHero />

            <SchoolTemplate
                badge="Cisco Certified Center"
                title="GJIMNAZI"
                titleHighlight="PROFESIONAL TIK"
                subtitle="Inovacioni takon zanatin e së ardhmes"
                description="Trajnim intensiv 70% praktik në laboratorët tanë të avancuar për rrjetat, programimin dhe sigurinë kibernetike. Transformojmë pasionin në profesione elitare."
                heroImage="/shkolla_profesionale.jpg"
                statNumber="70%"
                statLabel="Praktikë"
                coordinatorName="Ing. Arben Meta"
                coordinatorTitle="Koordinator"
                coordinatorImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                quote='Edukatori duhet të jetë "aty", i pranishëm në jetën e të riut, duke ndarë gëzimet dhe vështirësitë e tij.'
                quoteAuthor="Shën Gjon Bosko"
                valueCards={[
                    { 
                        id: "01", 
                        title: "Cisco Networking", 
                        desc: "Trajnim zyrtar CCNA për administrimin e sistemeve të rrjetit.", 
                        icon: <Network />,
                        link: "/shkolla/mjediset/salla-it"
                    },
                    { 
                        id: "02", 
                        title: "Cyber Security", 
                        desc: "Siguria e rrjeteve moderne dhe mbrojtja e të dhënave.", 
                        icon: <ShieldCheck />,
                        link: "/shkolla/mjediset/salla-it"
                    },
                    { 
                        id: "03", 
                        title: "Software Dev", 
                        desc: "Zhvillim WEB, Mobile dhe bazat e sistemeve Database.", 
                        icon: <Code />,
                        link: "/shkolla/mjediset/salla-it"
                    },
                    { 
                        id: "04", 
                        title: "Praktika Profesionale", 
                        desc: "Bashkëpunim me kompanitë lider të IT në Shqipëri.", 
                        icon: <Share2 />
                    }
                ]}
                modules={[
                    {
                        id: "01",
                        tag: "Rr",
                        title: "Rrjetat Kompjuterike",
                        desc: "Administrim Cisco, Cloud Computing dhe Virtualizimi i sistemeve.",
                        icon: <Network className="text-blue-500" />
                    },
                    {
                        id: "02",
                        tag: "Pr",
                        title: "Programim",
                        desc: "Python, Java, JavaScript dhe zhvillimi i aplikacioneve për mobile.",
                        icon: <Code className="text-emerald-500" />
                    },
                    {
                        id: "03",
                        tag: "Ha",
                        title: "Hardware",
                        desc: "Mirëmbajtja e sistemeve, Internet of Things (IoT) dhe Robotika.",
                        icon: <Settings className="text-orange-500" />
                    }
                ]}
                ctaTitle="Dëshironi të bëheni ekspert i teknologjisë?"
                ctaSubtitle="Siguroni vendin tuaj në një nga profilet më të kërkuara të kohës. Regjistrimet janë të hapura."
                ctaPlaniLink="/shkolla/plani-akademik/gjimnaz"
                brochurePath="/brochures/Gjimnaz.pdf"
                showStaff={true}
                staffType="profesionale"
            />
        </div>
    );
};

export default ShkollaProfesionale;