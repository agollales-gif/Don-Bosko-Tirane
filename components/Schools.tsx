import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- HERO COMPONENT ---
// Ky komponent është rregulluar që silueta të jetë nën tekstin në mobile
const SchoolHero: React.FC = () => {
  const pageVariants = (delay: number): Variants => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        delay, 
        duration: 2.5, 
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.5
      }
    }
  });

  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[80vh] flex flex-col lg:flex-row items-start lg:items-center pt-48 lg:pt-20 bg-primary-red overflow-hidden">
      
      {/* Teksti i Hero (Mbi siluetën në mobile, pozicion normal në desktop) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-20 lg:z-10 order-1 lg:order-1">
        <div className="max-w-3xl lg:max-w-2xl text-left space-y-6 lg:space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] font-plus-jakarta tracking-tight mb-4 sm:mb-6">
              PROGRAMET <br /> 
              ARSIMORE
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-xl lg:max-w-2xl font-normal leading-relaxed">
              Ofrojmë arsim cilësor për çdo nivel, nga fillore deri tek shkollat profesionale, duke përgatitur studentët për të ardhmen.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Silueta e Librit (Posicionuar nën tekstin në mobile, normal në desktop) */}
      <div className="w-full lg:w-1/2 h-48 lg:h-auto flex items-center justify-center p-6 lg:p-24 lg:absolute lg:right-0 lg:left-auto lg:inset-0 lg:z-0 order-2 lg:order-2">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full max-h-[60vh] lg:max-h-[120vh] text-white opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M12 21C12 21 10 18 3 18V5C10 5 12 8 12 8V21Z" stroke="currentColor" strokeWidth="0.3" variants={pageVariants(0)} initial="hidden" animate="visible" />
          <motion.path d="M12 21C12 21 14 18 21 18V5C14 5 12 8 12 8" stroke="currentColor" strokeWidth="0.3" variants={pageVariants(0.5)} initial="hidden" animate="visible" />
          <motion.path d="M12 21C12 21 13 17 18 15V3C13 3 12 8 12 8" stroke="currentColor" strokeWidth="0.2" variants={pageVariants(1)} initial="hidden" animate="visible" />
        </svg>
      </div>

      {/* Blur i subtil në fund */}
      <div className="absolute bottom-0 left-0 w-full h-24 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf5] to-transparent"></div>
        <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
      </div>
    </section>
  );
};

// --- CARD CONTENT COMPONENT ---
const CardContent: React.FC<{ school: any }> = ({ school }) => (
  <div className="relative group bg-white">
    <div className="relative h-[400px] lg:h-[480px] overflow-hidden">
      <img src={school.image} alt={school.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <span className="text-white font-semibold uppercase tracking-[0.2em] text-sm border-b border-white/50 pb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          Lexo më shumë
        </span>
      </div>
      
      <div className={`absolute top-6 left-6 px-5 py-2 text-white font-semibold uppercase text-xs tracking-wider rounded-lg shadow-md ${school.color} backdrop-blur-md bg-opacity-95`}>
        {school.tag}
      </div>
    </div>
    
    <div className="p-10 lg:p-14 flex flex-col items-center text-center space-y-8">
      <div className="space-y-5">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight font-plus-jakarta">
          {school.title}
        </h3>
        <div className="w-12 h-1 bg-primary-red mx-auto rounded-full opacity-80"></div>
      </div>
      
      <button 
        onClick={(e) => { e.preventDefault(); window.location.href = '/rregjistrohu'; }}
        className="group/btn relative overflow-hidden w-full max-w-sm py-4 bg-primary-red text-white font-bold uppercase tracking-widest text-sm transition-all duration-300 rounded-xl shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
      >
        <span className="relative z-10">Rregjistrohu Tani</span>
        <div className="absolute inset-0 bg-black/15 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
      </button>
    </div>
  </div>
);

// --- MAIN SCHOOLS COMPONENT ---
const Schools: React.FC = () => {
  const [showHighSchool, setShowHighSchool] = useState(false);

  const mainLevels = [
    { title: "Shkolla Fillore", color: 'bg-primary-red', image: '/shkolla_fillore.jpg', tag: 'Kopshti & Fillorja', href: '/shkolla/fillore' },
    { title: "Shkolla 9-vjeçare", color: 'bg-deep-forest-green', image: '/shkolla_9vjecare.jpg', tag: 'Cikli i Ulët & Mesëm', href: '/shkolla/9-vjecare' },
    { title: "Shkolla e Mesme", color: 'bg-primary-red', image: '/shkolla_shortcut.jpg', tag: 'Arsimi i Mesëm', onClick: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setShowHighSchool(true); } }
  ];

  return (
    <div className="flex flex-col bg-[#fafaf5]">
      <SchoolHero />

      <section id="programet" className="relative z-10">
        <div className="bg-[#fafaf5] overflow-hidden">
          <div className="max-w-7xl mx-auto py-24 px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-5 mb-24">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 font-plus-jakarta uppercase">
                Programet Tona
              </h2>
              <div className="w-20 h-1.5 bg-primary-red mx-auto rounded-full opacity-90"></div>
            </motion.div>

            <AnimatePresence mode="wait">
              {!showHighSchool ? (
                <div className="flex flex-col max-w-4xl mx-auto">
                  
                  {/* KARTA 1 */}
                  <div className="pb-32">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      <Link 
                        to={mainLevels[0].href!} 
                        className="block rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ring-1 ring-black/5 bg-white"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      >
                        <CardContent school={mainLevels[0]} />
                      </Link>
                    </motion.div>
                  </div>

                  {/* KARTA 2 me efektin Full-Width Red Background */}
                  <div className="relative -mx-[100vw] px-[100vw] py-32 bg-primary-red">
                    <div className="absolute top-0 left-0 w-full h-20 z-20 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#fafaf5] to-transparent"></div>
                      <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                      <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <Link 
                          to={mainLevels[1].href!} 
                          className="block rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 ring-1 ring-white/10 bg-white"
                          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                          <CardContent school={mainLevels[1]} />
                        </Link>
                      </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-20 z-20 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf5] to-transparent"></div>
                      <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                    </div>
                  </div>

                  {/* KARTA 3 */}
                  <div className="pt-32">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      <button onClick={mainLevels[2].onClick} className="w-full text-left block rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ring-1 ring-black/5 bg-white">
                        <CardContent school={mainLevels[2]} />
                      </button>
                    </motion.div>
                  </div>

                </div>
              ) : (
                <motion.div key="hs" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }} className="max-w-5xl mx-auto py-10">
                  <button onClick={() => setShowHighSchool(false)} className="group flex items-center text-primary-red font-semibold uppercase text-sm tracking-wider mb-12 hover:opacity-80 transition-opacity">
                    <span className="mr-3 transition-transform duration-300 group-hover:-translate-x-2">←</span> Kthehu pas
                  </button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <Link 
                        to="/shkolla/mesme" 
                        className="block rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ring-1 ring-black/5 bg-white"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      >
                      <CardContent school={{ title: "Gjimnazi i Përgjithshëm", color: 'bg-primary-red', image: '/shkolla_mesme.jpg', tag: 'Gjimnazi' }} />
                    </Link>
                    <Link 
                        to="/shkolla/profesionale" 
                        className="block rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ring-1 ring-black/5 bg-white"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      >
                      <CardContent school={{ title: "Gjimnazi Profesional", color: 'bg-deep-forest-green', image: '/shkolla_profesionale.jpg', tag: 'Profesionale TIK' }} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schools;