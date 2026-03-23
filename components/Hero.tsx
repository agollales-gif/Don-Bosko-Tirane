import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

// YouTube lite-facade: shows a thumbnail + play button, loads iframe only on interaction
const YoutubeFacade: React.FC<{ videoId: string; title: string }> = ({ videoId, title }) => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Auto-load when the section enters the viewport (IntersectionObserver)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLoaded(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`;

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full">
      {loaded ? (
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 w-full h-full scale-[200%]"
          style={{ border: 'none', zIndex: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        // Lightweight placeholder — just a dark bg, no external request
        <div className="absolute inset-0 bg-gray-900" aria-hidden="true" />
      )}
    </div>
  );
};

const Hero: React.FC = () => {
  const language = 'AL';
  const t = TRANSLATIONS[language];

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const videoId = isMobile ? 'lVEj2ZdeQgw' : 'TFB5PTNF3rw';

  const mainTitle = "EDUKIMI I FËMIJËS TUAJ, PRIORITETI YNË";
  const subTitle  = "DËSHIRONI QË FËMIJA JUAJ TË EDUKOHET NË AMBIENTET TONA?";

  return (
    <section className="relative overflow-hidden w-full">
      {/* Background Video Container */}
      <div className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-gray-900">
        <YoutubeFacade
          videoId={videoId}
          title="Video promovuese e Qendrës Sociale Don Bosko Tiranë"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45 z-10" aria-hidden="true" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/40 to-transparent z-20" aria-hidden="true" />

        {/* Content */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider leading-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
              {mainTitle}
            </h1>
            <p className="text-white/90 mt-6 text-xs md:text-sm lg:text-base font-bold uppercase tracking-[0.2em] drop-shadow-md max-w-2xl mx-auto leading-relaxed">
              {subTitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 md:mt-12"
          >
            <a
              href="/shkolla"
              className="inline-block px-10 py-4 bg-primary-red text-white font-bold uppercase text-xs md:text-sm tracking-[0.2em] rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:bg-red-700 transition-colors duration-300 border border-white/10"
            >
              Zbulo Programet Tona
            </a>
          </motion.div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-white py-24 md:py-40 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12 relative">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none" aria-hidden="true">
            <span className="text-primary-red/5 text-[180px] md:text-[240px] font-serif leading-none italic select-none">"</span>
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
            <div className="w-16 h-1 bg-primary-red/20 rounded-full" aria-hidden="true" />
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
