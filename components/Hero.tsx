import React from 'react';
import { motion } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

const Hero: React.FC = () => {
  const language = 'AL';
  const t = TRANSLATIONS[language];

  // Check if mobile view
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const videoSrc = isMobile 
    ? "https://www.youtube.com/embed/lVEj2ZdeQgw?autoplay=1&mute=1&loop=1&playlist=lVEj2ZdeQgw&controls=0&showinfo=0&rel=0&modestbranding=1&si=mXumYq6MW4yEcs_m"
    : "https://www.youtube.com/embed/TFB5PTNF3rw?autoplay=1&mute=1&loop=1&playlist=TFB5PTNF3rw&controls=0&showinfo=0&rel=0&modestbranding=1";

  // Teksti kryesor i shkurtër
  const mainTitle = "EDUKIMI I FËMIJËS TUAJ, PRIORITETI YNË";
  // Teksti i dytë që kërkove me kapitale
  const subTitle = "DËSHIRONI QË FËMIJA JUAJ TË EDUKOHET NË AMBIENTET TONA?";

  return (
    <section className="relative overflow-hidden w-full">
      {/* Background Video Container */}
      <div className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-gray-900">
        <iframe
          src={videoSrc}
          className="absolute inset-0 w-full h-full scale-[200%]"
          style={{ 
            border: 'none',
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '0',
            objectFit: 'cover'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        
        {/* Overlay për lexueshmëri */}
        <div className="absolute inset-0 bg-black/45 z-10"></div>
        
        {/* Gradienti i poshtëm */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/40 to-transparent z-20"></div>

        {/* Content Container */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Titulli Kryesor */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider leading-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
              {mainTitle}
            </h1>
            
            {/* Teksti i dytë - Tani me kapitale, pak më i vogël dhe me hapësirë mes shkronjave */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-white/90 mt-6 text-xs md:text-sm lg:text-base font-bold uppercase tracking-[0.2em] drop-shadow-md max-w-2xl mx-auto leading-relaxed"
            >
              {subTitle}
            </motion.p>
          </motion.div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 md:mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/shkolla'}
              className="px-10 py-4 bg-primary-red text-white font-bold uppercase text-xs md:text-sm tracking-[0.2em] rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:bg-red-700 transition-all duration-300 border border-white/10"
            >
              Zbulo Programet Tona
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-white py-24 md:py-40 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12 relative">
          
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none">
            <span className="text-primary-red/5 text-[180px] md:text-[240px] font-serif leading-none italic select-none">
              “
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative z-20"
          >
            <p className="font-script text-4xl md:text-6xl lg:text-7xl text-gray-800 leading-tight">
              {t.heroQuote}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="w-16 h-1 bg-primary-red/20 rounded-full"></div>
            <p className="text-xs md:text-sm font-black text-primary-red uppercase tracking-[0.5em] font-plus-jakarta">
              {t.heroQuoteAuthor}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
