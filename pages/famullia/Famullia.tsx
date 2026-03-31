import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BookOpen, Calendar, Heart, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: BookOpen,
    title: 'Historia e Famullisë',
    desc: 'Rrënja e thellë saleziane në Tiranë — nga viti 1992 deri sot, një udhëtim besimi dhe shërbimi.',
    href: '/famullia/historia',
    color: 'bg-red-50 text-primary-red',
  },
  {
    icon: Heart,
    title: 'Rektori',
    desc: 'Njihuni me udhëheqësin shpirtëror të bashkësisë sonë dhe mesazhin e tij për komunitetin.',
    href: '/famullia/rektori',
    color: 'bg-red-50 text-primary-red',
  },
  {
    icon: Calendar,
    title: 'Oraret e Meshave',
    desc: 'Gjeni oraret e meshave javore dhe festive për të marrë pjesë në jetën liturgjike.',
    href: '/famullia/ora-met',
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
              Bashkësia Shpirtërore
            </span>
            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl font-extrabold text-white font-plus-jakarta tracking-tight mb-4 lg:mb-6">
              FAMULLIA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">ZOJA NDIHMËTARE</span>
            </h1>
            <p className="text-lg lg:text-2xl text-white/95 max-w-xl font-medium leading-snug lg:leading-relaxed mb-3 lg:mb-4">
              Ku besimi takon bashkësinë
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg font-normal leading-relaxed">
              Një bashkësi e gjallë e frymëzuar nga shpirti salezian — e hapur për të gjithë, e ndërtuar mbi dashurinë, lutjen dhe shërbimin ndaj të tjerëve.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Animated SVG — detailed church silhouette */}
      <div className="relative w-full h-[38vh] min-h-[250px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-center p-6 lg:p-16 pointer-events-none z-0 mt-auto lg:mt-0">
        <svg viewBox="0 0 64 80" fill="none" className="w-full h-full max-h-[300px] lg:max-h-[65vh] max-w-[85%] lg:max-w-full text-white opacity-[0.35] lg:opacity-[0.20]" xmlns="http://www.w3.org/2000/svg">
          {/* Cross vertical */}
          <motion.line x1="32" y1="1" x2="32" y2="12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" variants={drawVariants(0)} initial="hidden" animate="visible" />
          {/* Cross horizontal */}
          <motion.line x1="27" y1="5" x2="37" y2="5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" variants={drawVariants(0.3)} initial="hidden" animate="visible" />
          {/* Bell tower left outline */}
          <motion.path d="M20 38 L20 14 L28 14 L28 38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0.5)} initial="hidden" animate="visible" />
          {/* Bell tower right outline */}
          <motion.path d="M36 38 L36 14 L44 14 L44 38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0.5)} initial="hidden" animate="visible" />
          {/* Tower roof left */}
          <motion.path d="M18 14 L24 8 L30 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0.8)} initial="hidden" animate="visible" />
          {/* Tower roof right */}
          <motion.path d="M34 14 L40 8 L46 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0.8)} initial="hidden" animate="visible" />
          {/* Main nave roof */}
          <motion.path d="M12 38 L32 26 L52 38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(1.0)} initial="hidden" animate="visible" />
          {/* Main nave body */}
          <motion.rect x="12" y="38" width="40" height="30" rx="0.5" stroke="currentColor" strokeWidth="1" variants={drawVariants(1.2)} initial="hidden" animate="visible" />
          {/* Arched door */}
          <motion.path d="M27 68 L27 56 Q32 50 37 56 L37 68" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(1.5)} initial="hidden" animate="visible" />
          {/* Left window arch */}
          <motion.path d="M16 50 L16 44 Q19 41 22 44 L22 50" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(1.7)} initial="hidden" animate="visible" />
          {/* Right window arch */}
          <motion.path d="M42 50 L42 44 Q45 41 48 44 L48 50" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(1.7)} initial="hidden" animate="visible" />
          {/* Bell tower windows */}
          <motion.path d="M22 22 L22 18 Q24 16 26 18 L26 22" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(1.9)} initial="hidden" animate="visible" />
          <motion.path d="M38 22 L38 18 Q40 16 42 18 L42 22" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(1.9)} initial="hidden" animate="visible" />
          {/* Ground line */}
          <motion.line x1="6" y1="68" x2="58" y2="68" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" variants={drawVariants(2.1)} initial="hidden" animate="visible" />
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
      <motion.div {...fadeUp(0)} className="space-y-8">
        <div className="space-y-3">
          <p className="text-primary-red text-xs font-black uppercase tracking-[0.3em]">Kush Jemi</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta leading-tight">
            Një Bashkësi<br />
            <span className="text-primary-red">e Besimit</span>
          </h2>
          <div className="w-16 h-1 bg-primary-red rounded-full" />
        </div>

        <p className="text-lg text-gray-600 leading-relaxed">
          Famullia e <strong className="text-gray-900">Don Boskos</strong> është zemra shpirtërore e Qendrës Sociale. E themeluar nga salezianët, ajo është një bashkësi e hapur ku çdo person gjen mirëpritje, lutje dhe shoqëri në rrugën e besimit.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Përmes meshave, aktiviteteve liturgjike dhe shërbimit ndaj komunitetit, famullia jonë jeton shpirtin e Don Boskos: "Jepuni të rinjve një mik të mirë dhe do t'i keni fituar."
        </p>

        <div className="relative pl-6 border-l-4 border-primary-red">
          <Quote size={20} className="text-primary-red/30 absolute -top-1 -left-1" />
          <p className="text-xl font-script text-gray-700 italic leading-relaxed">
            "Mjafton që të jeni të rinj që unë t'ju dua shumë."
          </p>
          <p className="text-xs font-black uppercase tracking-widest text-primary-red mt-2">— Don Bosko</p>
        </div>
      </motion.div>

      <motion.div {...fadeUp(0.2)} className="relative">
        <div className="relative h-[320px] lg:hidden mx-4">
          <div className="absolute top-0 right-0 w-[75%] h-[65%] rounded-[24px] overflow-hidden shadow-2xl">
            <img src="/kisha/Bashkesia.webp" alt="Kisha Don Bosko" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute bottom-0 left-0 w-[65%] h-[60%] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white">
            <img src="/kisha/kisha1 (3).webp" alt="Bashkësia" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="hidden lg:block relative h-[520px]">
          <div className="absolute top-0 right-0 w-[75%] h-[65%] rounded-[40px] overflow-hidden shadow-2xl">
            <img src="/kisha/Bashkesia.webp" alt="Kisha Don Bosko" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
            <img src="/kisha/kisha1 (3).webp" alt="Bashkësia" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute top-[55%] right-[5%] bg-primary-red text-white rounded-2xl p-4 shadow-xl text-center min-w-[110px]">
            <p className="text-3xl font-black">30+</p>
            <p className="text-[10px] font-bold uppercase tracking-wider opacity-80 leading-tight mt-0.5">Vite<br/>Shërbim</p>
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
        <p className="text-primary-red text-xs font-black uppercase tracking-[0.3em]">Zbulo më shumë</p>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta">
          Jeta e Famullisë
        </h2>
        <p className="text-gray-500 text-lg">Çdo aspekt i bashkësisë sonë shpirtërore.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
        {services.map((s, i) => (
          <motion.div key={s.title} {...fadeUp(i * 0.1)}>
            <Link
              to={s.href}
              className="block bg-white rounded-[28px] p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full"
            >
              <div className={`w-12 h-12 rounded-2xl ${s.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <s.icon size={22} />
              </div>
              <h3 className="text-base font-black uppercase tracking-tight text-gray-900 mb-3">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{s.desc}</p>
              <span className="text-xs font-black uppercase tracking-widest text-primary-red group-hover:underline">Lexo më shumë →</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

const Famullia: React.FC = () => (
  <div className="flex flex-col">
    <Hero />
    <Mission />
    <Services />
  </div>
);

export default Famullia;
