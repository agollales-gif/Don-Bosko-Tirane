import React from 'react';
import { motion, Variants } from 'framer-motion';
import SchoolTemplate from '../../components/SchoolTemplate';
import { Microscope, Globe, MessageSquare, ShieldCheck, Shapes, BookOpen } from 'lucide-react';

// --- KOMPONENTI HERO (Specifike për Gjimnazin) ---
const GjimnaziHero: React.FC = () => {
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
    <section className="relative w-full min-h-[100svh] lg:min-h-[85vh] bg-[#A31F24] overflow-hidden flex flex-col lg:flex-row pt-28 lg:pt-0">
      
      {/* 1. Teksti dhe Përmbajtja */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 container mx-auto relative z-10 lg:w-1/2">
        <div className="max-w-2xl text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1.5 px-4 mb-4 lg:mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-semibold uppercase tracking-widest text-[10px] sm:text-xs">
              Don Bosco Education
            </span>
            
            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl font-extrabold text-white font-plus-jakarta tracking-tight mb-4 lg:mb-6">
              GJIMNAZI <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">PËRGJITHSHËM</span>
            </h1>
            
            <p className="text-lg lg:text-2xl text-white/95 max-w-xl font-medium leading-snug lg:leading-relaxed mb-3 lg:mb-4">
              Standarde elitare për studentët e ardhshëm
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg font-normal leading-relaxed">
              Përgatitje rigoroze për Maturën Shtetërore dhe studimet universitare, me fokus në lëndët STEM dhe zhvillimin e mendimit kritik.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. Ilustrimi i Animit (Silueta) */}
      <div className="relative w-full h-[38vh] min-h-[250px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-center p-6 lg:p-16 pointer-events-none z-0 mt-auto lg:mt-0">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full max-h-[260px] lg:max-h-[60vh] max-w-[85%] lg:max-w-full text-white opacity-[0.35] lg:opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          {/* Kapelja e Diplomimit */}
          <motion.path d="M22 10L12 5L2 10L12 15L22 10Z" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" variants={drawVariants(0)} initial="hidden" animate="visible" />
          <motion.path d="M6 12V17C9 19 15 19 18 17V12" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" variants={drawVariants(0.5)} initial="hidden" animate="visible" />
          
          {/* Grafiku i Rritjes */}
          <motion.path d="M3 20H21" stroke="currentColor" strokeWidth="0.3" variants={drawVariants(1)} initial="hidden" animate="visible" />
          <motion.path d="M3 20L9 14L13 18L21 10" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" variants={drawVariants(1.4)} initial="hidden" animate="visible" />
        </svg>
      </div>

      {/* Gradienti i tranzicionit poshtë */}
      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </section>
  );
};

// --- KOMPONENTI KRYESOR SHKOLLA MESME ---
const ShkollaMesme: React.FC = () => {
  return (
    <div className="flex flex-col">
      <GjimnaziHero />

      <SchoolTemplate
        badge="Don Bosco Education"
        title="GJIMNAZI"
        titleHighlight="PËRGJITHSHËM"
        subtitle="Standarde elitare për studentët e ardhshëm"
        description="Gjimnazi ynë është i orientuar drejt përgatitjes rigoroze për Maturën Shtetërore dhe studimet universitare. Ruajmë një fokus të lartë në lëndët STEM dhe zhvillimin e mendimit kritik."
        heroImage="/programet_arsimore/shkolla_mesme.jpg"
        statNumber="30+"
        statLabel="Vite Eksperiencë"
        
        quote='Edukatori duhet të jetë "aty", i pranishëm në jetën e të riut, duke ndarë gëzimet dhe vështirësitë e tij.'
        quoteAuthor="Shën Gjon Bosko"
        
        valueCards={[
          { 
            id: "01", 
            title: "STEM Fokus", 
            desc: "Laboratore kërkimore të avancuara për shkencat ekzakte.", 
            icon: <Microscope className="w-6 h-6 text-[#A31F24]" />
          },
          { 
            id: "02", 
            title: "Orientim Karriere", 
            desc: "Këshillim karriere për universitetet më prestigjioze.", 
            icon: <Globe className="w-6 h-6 text-[#A31F24]" />
          },
          { 
            id: "03", 
            title: "Debat & Retorikë", 
            desc: "Zhvillim i liderve përmes artit të fjalës dhe debatit publik.", 
            icon: <MessageSquare className="w-6 h-6 text-[#A31F24]" />
          },
          { 
            id: "04", 
            title: "Etika e Punës", 
            desc: "Formimi i një personaliteti të fortë dhe etikë profesionale.", 
            icon: <ShieldCheck className="w-6 h-6 text-[#A31F24]" />
          }
        ]}
        modules={[
          {
            id: "01",
            tag: "Ma",
            title: "Matematikë & Fizikë",
            desc: "Analizë matematike dhe fizikë e aplikuar për një mendim logjik të avancuar.",
            icon: <Shapes className="text-[#A31F24]" />
          },
          {
            id: "02",
            tag: "Gj",
            title: "Gjuhët Moderne",
            desc: "Anglisht e avancuar (niveli C1) dhe Italisht.",
            icon: <Globe className="text-[#A31F24]" />
          },
          {
            id: "03",
            tag: "Sh",
            title: "Shkenca Shoqërore",
            desc: "Ekonomi, Filozofi dhe Psikologji për të kuptuar kompleksitetin e botës.",
            icon: <BookOpen className="text-[#A31F24]" />
          }
        ]}
        
        ctaTitle="Gati për të ndërtuar të ardhmen?"
        ctaSubtitle="Bëhuni pjesë e familjes sonë dhe siguroni një të ardhme të ndritur. Regjistrimet janë të hapura."
        ctaPlaniLink="/shkolla/plani-akademik/gjimnaz"
        brochurePath="/brochures/Gjimnaz.pdf"
        showStaff={true}
        staffType="mesme"
      />
    </div>
  );
};

export default ShkollaMesme;