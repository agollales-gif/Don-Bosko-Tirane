import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Music, Trophy, Users, Heart, Quote } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Grupet e Formimit',
    desc: 'Të rinjtë mblidhen sipas grupmoshave për të diskutuar vlerat njerëzore dhe rritjen shpirtërore nën udhëheqjen e salezianëve.',
    color: 'bg-red-50 text-primary-red',
  },
  {
    icon: Trophy,
    title: 'Lojërat Verore',
    desc: 'Gjatë verës oratori kthehet në festë me turne sportive, gara me skuadra, këngë, punë dore dhe ekskursione.',
    color: 'bg-red-50 text-primary-red',
  },
  {
    icon: Heart,
    title: 'Oratori i Lirë',
    desc: 'Hapësira e përditshme ku dyert janë të hapura për këdo — futboll, ping-pong, miqësi, në një ambient të sigurt dhe edukativ.',
    color: 'bg-red-50 text-primary-red',
  },
  {
    icon: Music,
    title: 'Animacioni Kulturor',
    desc: 'Muzikë, teatër, kërcim dhe sport — elementet që i japin shpirt çdo feste dhe aktiviteti të oratorit.',
    color: 'bg-red-50 text-primary-red',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
});

// ─── HERO ─────────────────────────────────────────────────────────────────────

const Hero: React.FC = () => {
  const drawVariants = (delay: number): Variants => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { delay, duration: 3, ease: 'easeInOut', repeat: 0 },
    },
  });

  return (
    <section className="relative w-full min-h-[100svh] lg:min-h-[85vh] bg-primary-red overflow-hidden flex flex-col lg:flex-row pt-28 lg:pt-0">
      {/* Text */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 container mx-auto relative z-10 lg:w-1/2">
        <div className="max-w-2xl text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
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

      {/* Animated SVG silhouette — star */}
      <div className="relative w-full h-[38vh] min-h-[250px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-center p-6 lg:p-16 pointer-events-none z-0 mt-auto lg:mt-0">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full max-h-[260px] lg:max-h-[60vh] max-w-[85%] lg:max-w-full text-white opacity-[0.35] lg:opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M12 2L14.09 8.26L20.18 8.27L15.45 12.14L17.55 18.4L12 14.54L6.45 18.4L8.55 12.14L3.82 8.27L9.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="0.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={drawVariants(0)}
            initial="hidden"
            animate="visible"
          />
        </svg>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
        <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]" />
      </div>
    </section>
  );
};

// ─── MISSION ──────────────────────────────────────────────────────────────────

const Mission: React.FC = () => (
  <section id="misioni" className="py-32 px-6 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      {/* Text */}
      <motion.div {...fadeUp(0)} className="space-y-8">
        <div className="space-y-3">
          <p className="text-primary-red text-xs font-black uppercase tracking-[0.3em]">Kush Jemi</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta leading-tight">
            Një Shtëpi<br />
            <span className="text-primary-red">e Gëzimit</span>
          </h2>
          <div className="w-16 h-1 bg-primary-red rounded-full" />
        </div>

        <p className="text-lg text-gray-600 leading-relaxed">
          Oratori ynë është një hapësirë e gjallë ku të rinjtë gjejnë një shtëpi të dytë. I frymëzuar nga pedagogjia e <strong className="text-gray-900">Shën Don Boskos</strong>, ne krijojmë një ambient ku edukimi, loja dhe besimi bashkëpunojnë për të formuar karaktere të forta dhe qytetarë të mirë.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Përmes aktiviteteve të ndryshme, nga formimi shpirtëror deri te sporti dhe arti, çdo i ri gjen vendin e tij për të shprehur talentet dhe për të rritur si person.
        </p>

        {/* Quote */}
        <div className="relative pl-6 border-l-4 border-primary-red">
          <Quote size={20} className="text-primary-red/30 absolute -top-1 -left-1" />
          <p className="text-xl font-script text-gray-700 italic leading-relaxed">
            "Nuk ka pasqyrë më të qartë të shpirtit të një shoqërie sesa mënyra se si ajo i trajton fëmijët dhe të rinjtë e saj."
          </p>
          <p className="text-xs font-black uppercase tracking-widest text-primary-red mt-2">— Don Bosko</p>
        </div>
      </motion.div>

      {/* Images */}
      <motion.div {...fadeUp(0.2)} className="relative">
        {/* Mobile: overlapping stack */}
        <div className="relative h-[320px] lg:hidden mx-4">
          <div className="absolute top-0 right-0 w-[75%] h-[65%] rounded-[24px] overflow-hidden shadow-2xl">
            <img src="/aktivitetet_oratorit/oratori_lire.jpg" alt="Oratori i Lirë" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute bottom-0 left-0 w-[65%] h-[60%] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white">
            <img src="/aktivitetet_oratorit/Animacioni Kulturor dhe Sportiv.jpg" alt="Animacioni Kulturor dhe Sportiv" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden lg:block relative h-[520px]">
          <div className="absolute top-0 right-0 w-[75%] h-[65%] rounded-[40px] overflow-hidden shadow-2xl">
            <img src="/aktivitetet_oratorit/oratori_lire.jpg" alt="Oratori i Lirë" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
            <img src="/aktivitetet_oratorit/Animacioni Kulturor dhe Sportiv.jpg" alt="Animacioni Kulturor dhe Sportiv" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─── SERVICES ─────────────────────────────────────────────────────────────────

const Services: React.FC = () => (
  <section className="py-32 px-6 md:px-12 bg-[#fafaf8]">
    <div className="max-w-7xl mx-auto space-y-16">
      <motion.div {...fadeUp(0)} className="text-center space-y-4 max-w-2xl mx-auto">
        <p className="text-primary-red text-xs font-black uppercase tracking-[0.3em]">Çfarë Ofrojmë</p>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta">
          Aktivitetet Tona
        </h2>
        <p className="text-gray-500 text-lg">Çdo aktivitet është projektuar me të riun në qendër.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            {...fadeUp(i * 0.1)}
            className="bg-white rounded-[28px] p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className={`w-12 h-12 rounded-2xl ${s.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <s.icon size={22} />
            </div>
            <h3 className="text-base font-black uppercase tracking-tight text-gray-900 mb-3">{s.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

const Oratori: React.FC = () => (
  <div className="flex flex-col">
    <Hero />
    <Mission />
    <Services />
  </div>
);

export default Oratori;
