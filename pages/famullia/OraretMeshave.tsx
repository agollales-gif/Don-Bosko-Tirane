import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Clock } from 'lucide-react';

const OraretHero: React.FC = () => {
  const draw = (delay: number, duration = 2.5): Variants => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { delay, duration, ease: 'easeInOut' },
    },
  });

  const pulse: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0, 1, 0.6, 1],
      scale: [0.8, 1.05, 1],
      transition: { delay: 3.5, duration: 1.2, ease: 'easeOut', repeat: Infinity, repeatDelay: 4 },
    },
  };

  const swing: Variants = {
    hidden: { rotate: 0 },
    visible: {
      rotate: [0, 18, -18, 12, -12, 6, -6, 0],
      transition: { delay: 2.8, duration: 2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 5 },
    },
  };

  const ray = (delay: number): Variants => ({
    hidden: { opacity: 0, scaleY: 0 },
    visible: {
      opacity: [0, 0.7, 0],
      scaleY: [0, 1, 0],
      transition: { delay, duration: 2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 3 },
    },
  });

  return (
    <section className="relative w-full min-h-[60vh] lg:min-h-[75vh] bg-[#9c252d] overflow-hidden flex flex-col lg:flex-row pt-20 lg:pt-0">

      {/* Text */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-16 container mx-auto relative z-10 lg:w-1/2 py-12 lg:py-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <span className="inline-block py-1.5 px-4 mb-3 lg:mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-semibold uppercase tracking-widest text-[9px] sm:text-xs">
            Bashkohuni me ne
          </span>
          <h1 className="text-[2rem] sm:text-[2.75rem] leading-[1.05] lg:text-6xl xl:text-7xl font-extrabold text-white font-plus-jakarta tracking-tight mb-3 lg:mb-6">
            ORARET E <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">MESHAVE</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/95 max-w-xl font-medium leading-snug lg:leading-relaxed mb-2 lg:mb-4">
            Koha e Zotit
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg font-normal leading-relaxed">
            Kisha thërret komunitetin në takimin e rregullt
          </p>
        </motion.div>
      </div>

      {/* Animated SVG — Church + Bell + Clock + Rays */}
      <div className="relative w-full h-[38vh] min-h-[260px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-center p-4 sm:p-6 lg:p-12 pointer-events-none z-0 mt-auto lg:mt-0">
        <svg viewBox="0 0 80 100" fill="none" className="w-full h-full max-h-[320px] lg:max-h-[70vh] max-w-[85%] lg:max-w-full text-white opacity-[0.38] lg:opacity-[0.22]" xmlns="http://www.w3.org/2000/svg">

          {/* ── RAYS OF LIGHT from top ── */}
          {[[-12, -8], [-6, -10], [0, -11], [6, -10], [12, -8]].map(([x, _], i) => (
            <motion.line key={i} x1={40 + x} y1={0} x2={40 + x * 2.5} y2={18}
              stroke="currentColor" strokeWidth="0.4" strokeLinecap="round"
              style={{ transformOrigin: `${40 + x}px 0px` }}
              variants={ray(i * 0.3)} initial="hidden" animate="visible" />
          ))}

          {/* ── CROSS on top ── */}
          <motion.line x1="40" y1="2" x2="40" y2="14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" variants={draw(0)} initial="hidden" animate="visible" />
          <motion.line x1="35" y1="7" x2="45" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" variants={draw(0.2)} initial="hidden" animate="visible" />

          {/* ── BELL (swinging) ── */}
          <motion.g style={{ transformOrigin: '40px 18px' }} variants={swing} initial="hidden" animate="visible">
            <motion.path d="M36 18 Q36 14 40 14 Q44 14 44 18 L44 24 Q44 26 40 26 Q36 26 36 24 Z"
              stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"
              variants={draw(0.5)} initial="hidden" animate="visible" />
            <motion.line x1="38" y1="26" x2="42" y2="26" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" variants={draw(0.9)} initial="hidden" animate="visible" />
            <motion.circle cx="40" cy="27.5" r="1" stroke="currentColor" strokeWidth="0.6" variants={draw(1.0)} initial="hidden" animate="visible" />
          </motion.g>

          {/* ── BELL TOWER left ── */}
          <motion.path d="M18 48 L18 30 L28 30 L28 48" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" variants={draw(0.6)} initial="hidden" animate="visible" />
          {/* ── BELL TOWER right ── */}
          <motion.path d="M52 48 L52 30 L62 30 L62 48" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" variants={draw(0.6)} initial="hidden" animate="visible" />
          {/* Tower roofs */}
          <motion.path d="M16 30 L23 22 L30 30" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" variants={draw(0.9)} initial="hidden" animate="visible" />
          <motion.path d="M50 30 L57 22 L64 30" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" variants={draw(0.9)} initial="hidden" animate="visible" />

          {/* ── MAIN NAVE roof ── */}
          <motion.path d="M10 48 L40 32 L70 48" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" variants={draw(1.1)} initial="hidden" animate="visible" />
          {/* ── MAIN NAVE body ── */}
          <motion.rect x="10" y="48" width="60" height="38" rx="0.5" stroke="currentColor" strokeWidth="0.9" variants={draw(1.3)} initial="hidden" animate="visible" />

          {/* ── CLOCK FACE on nave ── */}
          <motion.circle cx="40" cy="42" r="5" stroke="currentColor" strokeWidth="0.7" variants={draw(1.5)} initial="hidden" animate="visible" />
          <motion.circle cx="40" cy="42" r="4.2" stroke="currentColor" strokeWidth="0.3" variants={draw(1.6)} initial="hidden" animate="visible" />
          {/* Clock hands */}
          <motion.line x1="40" y1="42" x2="40" y2="38.5" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" variants={draw(2.0)} initial="hidden" animate="visible" />
          <motion.line x1="40" y1="42" x2="43" y2="43.5" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" variants={draw(2.1)} initial="hidden" animate="visible" />
          <motion.circle cx="40" cy="42" r="0.5" fill="currentColor" variants={pulse} initial="hidden" animate="visible" />

          {/* ── ARCHED DOOR ── */}
          <motion.path d="M34 86 L34 72 Q40 65 46 72 L46 86" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" variants={draw(1.6)} initial="hidden" animate="visible" />

          {/* ── SIDE WINDOWS arched ── */}
          <motion.path d="M14 68 L14 60 Q17.5 56 21 60 L21 68" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" variants={draw(1.8)} initial="hidden" animate="visible" />
          <motion.path d="M59 68 L59 60 Q62.5 56 66 60 L66 68" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" variants={draw(1.8)} initial="hidden" animate="visible" />

          {/* ── TOWER WINDOWS ── */}
          <motion.path d="M20 40 L20 35 Q23 32 26 35 L26 40" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" variants={draw(2.0)} initial="hidden" animate="visible" />
          <motion.path d="M54 40 L54 35 Q57 32 60 35 L60 40" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" variants={draw(2.0)} initial="hidden" animate="visible" />

          {/* ── GROUND LINE ── */}
          <motion.line x1="2" y1="86" x2="78" y2="86" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" variants={draw(2.2)} initial="hidden" animate="visible" />

          {/* ── STEPS ── */}
          <motion.line x1="30" y1="89" x2="50" y2="89" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" variants={draw(2.3)} initial="hidden" animate="visible" />
          <motion.line x1="27" y1="92" x2="53" y2="92" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" variants={draw(2.4)} initial="hidden" animate="visible" />

          {/* ── STARS / SPARKLES ── */}
          {[[8, 10], [70, 8], [75, 30], [5, 35]].map(([x, y], i) => (
            <motion.circle key={i} cx={x} cy={y} r="0.8" fill="currentColor"
              variants={ray(2.5 + i * 0.4)} initial="hidden" animate="visible" />
          ))}
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 lg:h-32 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
        <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]" />
      </div>
    </section>
  );
};

const OraretMeshave: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <OraretHero />
            <section className="py-16 lg:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta">
                        Oraret e <span className="text-[#9c252d]">Meshave</span>
                    </h2>
                    <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs">Bashkohuni me ne në lutje</p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    <div className="bg-slate-50 p-8 md:p-12 rounded-[64px] border border-slate-100 space-y-8">
                        <h3 className="text-2xl font-black uppercase text-gray-900 border-b border-[#9c252d]/20 pb-4 inline-block">Oraret e Meshave</h3>
                        <div className="space-y-6">
                            {/* E HENE - E SHTUNE */}
                            <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm">
                                <span className="font-black uppercase tracking-widest text-xs text-gray-500">E Hënë - E Shtunë</span>
                                <div className="flex items-center space-x-2 text-[#9c252d] font-black">
                                    <Clock size={16} />
                                    <span>18:00</span>
                                </div>
                            </div>
                            {/* E DIELE - Hequr ora 09:00 */}
                            <div className="flex justify-between items-center bg-[#9c252d] p-6 rounded-3xl shadow-lg text-white">
                                <span className="font-black uppercase tracking-widest text-xs opacity-80">E Dielë</span>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2 font-black">
                                        <Clock size={16} />
                                        <span>11:00</span>
                                    </div>
                                    <div className="flex items-center space-x-2 font-black">
                                        <Clock size={16} />
                                        <span>18:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OraretMeshave;