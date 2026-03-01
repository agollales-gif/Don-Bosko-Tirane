import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Heart, Music, Trophy } from 'lucide-react';

// --- KOMPONENTI HERO I PERSONALIZUAR PËR ORATORIN ---
const OratoriHero: React.FC = () => {
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
              Vendi i Gëzimit
            </span>
            
            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl font-extrabold text-white font-plus-jakarta tracking-tight mb-4 lg:mb-6">
              ORATORI <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">DON BOSKO</span>
            </h1>
            
            <p className="text-lg lg:text-2xl text-white/95 max-w-xl font-medium leading-snug lg:leading-relaxed mb-3 lg:mb-4">
              Ku frymëzimi takon bashkësinë
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg font-normal leading-relaxed">
              Një hapësirë e gjallë ku të rinjtë rriten, mësojnë dhe festojnë së bashku, ndërtuar mbi vlerat e dashurisë, respektit dhe miqësisë.
            </p>
            
          </motion.div>
        </div>
      </div>

      {/* 2. SILUETA E ANIMUAR - Star Silhouette Only */}
      <div className="relative w-full h-[38vh] min-h-[250px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-center p-6 lg:p-16 pointer-events-none z-0 mt-auto lg:mt-0">
        <svg viewBox="0 0 24 24" className="w-full h-full max-h-[260px] lg:max-h-[60vh] max-w-[85%] lg:max-w-full text-white opacity-[0.35] lg:opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          {/* Star Silhouette */}
          <motion.path 
            d="M12 2L14.09 8.26L20.18 8.27L15.45 12.14L17.55 18.4L12 14.54L6.45 18.4L8.55 12.14L3.82 8.27L9.91 8.26L12 2Z" 
            fill="currentColor" 
            variants={drawVariants(0)} 
            initial="hidden" 
            animate="visible" 
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
      </div>
    </section>
  );
};

// --- AKTIVITETET E ORATORIT ---
const ActivityCard: React.FC<{ 
  title: string; 
  image: string; 
  description: string; 
  color: string; 
  delay: number;
}> = ({ title, image, description, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row h-full">
        {/* Image Section */}
        <div className="relative lg:w-2/5 h-64 lg:h-auto">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className={`absolute inset-0 ${color} opacity-20`}></div>
          
          {/* Title Badge */}
          <div className="absolute top-6 left-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">
                {title}
              </h3>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="flex-1 p-8 lg:p-10">
          <div className="space-y-4">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-red to-transparent rounded-full"></div>
            
            <p className="text-gray-600 leading-relaxed text-[15px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- STRUKTURA KRYESORE ---
const Oratori: React.FC = () => {
  const activities = [
    {
      title: "Grupet e Formimit",
      image: "/aktivitetet_oratorit/grupet_formimit.jpg",
      description: "Këtu të rinjtë mblidhen sipas grupmoshave për të diskutuar mbi tema jetësore, vlerat njerëzore dhe rritjen shpirtërore. Është vendi ku krijohet karakteri dhe ndahen eksperiencat nën udhëheqjen e salezianëve ose animatorëve më të rritur.",
      color: "bg-primary-red",
      delay: 0
    },
    {
      title: "Lojërat Verore (Vera Bashkë)",
      image: "/aktivitetet_oratorit/lojerat_verore.jpeg",
      description: "Ky është kulmi i gjallërisë! Gjatë qershorit dhe korrikut, oratori kthehet në një festë gjigante me turne sportive, gara me skuadra (shpesh të ndara me ngjyra), këngë (bans), punë dore dhe ekskursione.",
      color: "bg-deep-forest-green",
      delay: 0.1
    },
    {
      title: "Oratori i Lirë",
      image: "/aktivitetet_oratorit/oratori_lire.jpg",
      description: "Kjo është hapësira e përditshme ku dyert janë të hapura për këdo. Të rinjtë vijnë thjesht për të luajtur një ndeshje futbolli, për të luajtur ping-pong, ose për të qëndruar me miqtë në një ambient të sigurt dhe edukativ, pa pasur nevojë për një axhendë strikte.",
      color: "bg-primary-red",
      delay: 0.2
    },
    {
      title: "Animacioni Kulturor dhe Sportiv",
      image: "/kisha/kisha1 (1).JPG",
      description: "Ky është elementi që i jep \"shpirt\" çdo feste. Përfshin: Grupet e Muzikës dhe Korin: Mësimi i instrumenteve si kitara apo pianoja. Teatrin: Përgatitja e skeçeve dhe shfaqjeve që prezantohen gjatë festave të Don Boskos. Kërcimin dhe Koreografitë: Që janë pjesë e pandarë e çdo aktiviteti të madh në orator. Sportet: Turne futbolli, basketboll, volejboll dhe ping-pong që organizohen rregullisht. Kurse të ndryshme.",
      color: "bg-deep-forest-green",
      delay: 0.3
    }
  ];

  return (
    <div className="flex flex-col">
      <OratoriHero />

      {/* Information Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ORATORI <span className="text-primary-red">DON BOSKO</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Oratori ynë është një hapësirë e gjallë ku të rinjtë gjejnë një shtëpi të dytë. I frymëzuar nga pedagogjia e Shën Don Boskos, ne krijojmë një ambient ku edukimi, loja dhe besimi bashkëpunojnë për të formuar karaktere të forta dhe qytetarë të mirë.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Përmes aktiviteteve të ndryshme, nga formimi shpirtëror deri te sporti dhe arti, çdo i ri gjen vendin e tij për të shprehur talentet, për të ndërtuar miqësi dhe për të rritur si person në një komunitet të mbushur me dashuri dhe respekt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Aktivitetet Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#fafaf5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-6">
              AKTIVITETET <span className="text-primary-red">ORATORIT</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Zbulo gamën e pasur aktivitetesh që ofron oratori ynë, nga formimi personal deri te festat dhe kreativiteti.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {activities.map((activity, index) => (
              <ActivityCard
                key={index}
                title={activity.title}
                image={activity.image}
                description={activity.description}
                color={activity.color}
                delay={activity.delay}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Oratori;
