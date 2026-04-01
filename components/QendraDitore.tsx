import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BookOpen, Utensils, Shield, Users, Quote } from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────



const services = [
  {
    icon: BookOpen,
    title: 'Arsimim & Mbështetje',
    desc: 'Ndihmë me detyrat e shtëpisë, kurse plotësuese dhe nxitje drejt edukimit afatgjatë.',
    color: 'bg-red-50 text-primary-red',
  },
  {
    icon: Utensils,
    title: 'Ushqim i Shëndetshëm',
    desc: 'Vakte ditore të balancuara për t\'u garantuar fëmijëve energjinë dhe shëndetin e duhur.',
    color: 'bg-red-50 text-primary-red',
  },
  {
    icon: Users,
    title: 'Integrim Social',
    desc: 'Kohë cilësore përmes lojërave, aktiviteteve sportive dhe artit krijues.',
    color: 'bg-red-50 text-primary-red',
  },
  {
    icon: Shield,
    title: 'Mbrojtje & Kujdes',
    desc: 'Ambient ku fëmijët ndihen të mbrojtur dhe të dëgjuar nga stafi ynë i dedikuar.',
    color: 'bg-red-50 text-primary-red',
  },
];


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number], delay },
});

// ─── ORIGINAL HERO (red bg + animated SVG house) ─────────────────────────────

const Hero: React.FC = () => {
  const drawVariants = (delay: number): Variants => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { delay, duration: 3, ease: 'easeInOut', repeat: 0 }
    }
  });

  return (
    <section className="relative w-full min-h-[100svh] lg:min-h-[85vh] bg-primary-red overflow-hidden flex flex-col lg:flex-row pt-28 lg:pt-0">

      {/* Text */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 container mx-auto relative z-10 lg:w-1/2">
        <div className="max-w-2xl text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block py-1.5 px-4 mb-4 lg:mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-semibold uppercase tracking-widest text-[10px] sm:text-xs">
              Shërbimi Social
            </span>
            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl font-extrabold text-white font-plus-jakarta tracking-tight mb-4 lg:mb-6">
              QENDRA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">DITORE</span>
            </h1>
            <p className="text-lg lg:text-2xl text-white/95 max-w-xl font-medium leading-snug lg:leading-relaxed mb-3 lg:mb-4">
              Një Shtëpi larg Shtëpisë
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg font-normal leading-relaxed">
              Në zemër të Tiranës, Qendra Ditore "Don Bosko" shërben si një pikë referimi dhe shprese për fëmijët në nevojë, duke ofruar kujdes, edukim dhe dashuri.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Animated SVG silhouette */}
      <div className="relative w-full h-[38vh] min-h-[250px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-center p-6 lg:p-16 pointer-events-none z-0 mt-auto lg:mt-0">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full max-h-[260px] lg:max-h-[60vh] max-w-[85%] lg:max-w-full text-white opacity-[0.35] lg:opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0)} initial="hidden" animate="visible" />
          <motion.path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0.3)} initial="hidden" animate="visible" />
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
  <section id="misioni" className="py-16 md:py-32 px-4 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      {/* Text */}
      <motion.div {...fadeUp(0)} className="space-y-8">
        <div className="space-y-3">
          <p className="text-primary-red text-xs font-black uppercase tracking-[0.3em]">Kush Jemi</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta leading-tight">
            Një Shtëpi<br />
            <span className="text-primary-red">larg Shtëpisë</span>
          </h2>
          <div className="w-16 h-1 bg-primary-red rounded-full" />
        </div>

        <p className="text-lg text-gray-600 leading-relaxed">
          Në zemër të Tiranës, Qendra Ditore <strong className="text-gray-900">"Don Bosko"</strong> shërben si pikë referimi dhe shprese për fëmijët në nevojë. Ne besojmë se çdo fëmijë meriton një fëmijëri të lumtur, arsimim cilësor dhe një vakt të ngrohtë — pavarësisht vështirësive ekonomike apo sociale.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Duke larguar fëmijët nga rreziqet e rrugës dhe duke i ulur në bankat e dijes, ne thyejmë ciklin e varfërisë dhe u japim atyre mjetet për të ndërtuar një jetë më të mirë.
        </p>

        {/* Quote */}
        <div className="relative pl-6 border-l-4 border-primary-red">
          <Quote size={20} className="text-primary-red/30 absolute -top-1 -left-1" />
          <p className="text-xl font-script text-gray-700 italic leading-relaxed">
            "Edukimi është çështje zemre."
          </p>
          <p className="text-xs font-black uppercase tracking-widest text-primary-red mt-2">— Don Bosko</p>
        </div>
      </motion.div>

      {/* Image stack */}
      <motion.div {...fadeUp(0.2)} className="relative">
        {/* Mobile: overlapping stack */}
        <div className="relative h-[320px] lg:hidden mx-4">
          <div className="absolute top-0 right-0 w-[75%] h-[65%] rounded-[24px] overflow-hidden shadow-2xl">
            <img src="/qendra_ditore/qendra_ditore_2.jpg" alt="Aktivitete" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute bottom-0 left-0 w-[65%] h-[60%] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white">
            <img src="/qendra_ditore/qendra_ditore_3.jpg" alt="Fëmijë" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        {/* Desktop: overlapping stack */}
        <div className="hidden lg:block relative h-[520px]">
          <div className="absolute top-0 right-0 w-[75%] h-[65%] rounded-[40px] overflow-hidden shadow-2xl">
            <img src="/qendra_ditore/qendra_ditore_2.jpg" alt="Aktivitete" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
            <img src="/qendra_ditore/qendra_ditore_3.jpg" alt="Fëmijë" className="w-full h-full object-cover" loading="lazy" />
          </div>
          {/* Floating badge */}
          <div className="absolute top-[55%] right-[5%] bg-primary-red text-white rounded-2xl p-4 shadow-xl text-center min-w-[110px]">
            <p className="text-3xl font-black">15+</p>
            <p className="text-[10px] font-bold uppercase tracking-wider opacity-80 leading-tight mt-0.5">Vite<br/>Shërbim</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─── SERVICES ─────────────────────────────────────────────────────────────────

const Services: React.FC = () => (
  <section className="py-16 md:py-32 px-4 md:px-12 bg-[#fafaf8]">
    <div className="max-w-7xl mx-auto space-y-16">
      <motion.div {...fadeUp(0)} className="text-center space-y-4 max-w-2xl mx-auto">
        <p className="text-primary-red text-xs font-black uppercase tracking-[0.3em]">Çfarë Ofrojmë</p>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta">
          Shërbimet Tona
        </h2>
        <p className="text-gray-500 text-lg">Çdo shërbim është projektuar me fëmijën në qendër.</p>
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

const QendraDitore: React.FC = () => (
  <div className="flex flex-col">
    <Hero />
    <Mission />
    <Services />
  </div>
);

export default QendraDitore;
