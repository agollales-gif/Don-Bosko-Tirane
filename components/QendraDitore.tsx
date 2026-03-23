import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, BookOpen, Utensils, Shield, Users, ArrowRight, Quote } from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '120+', label: 'Fëmijë të Mbështetur' },
  { value: '15+', label: 'Vite Shërbim' },
  { value: '30+', label: 'Vullnetarë Aktivë' },
  { value: '5',   label: 'Ditë në Javë' },
];

const services = [
  {
    icon: BookOpen,
    title: 'Arsimim & Mbështetje',
    desc: 'Ndihmë me detyrat e shtëpisë, kurse plotësuese dhe nxitje drejt edukimit afatgjatë.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Utensils,
    title: 'Ushqim i Shëndetshëm',
    desc: 'Vakte ditore të balancuara për t\'u garantuar fëmijëve energjinë dhe shëndetin e duhur.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Users,
    title: 'Integrim Social',
    desc: 'Kohë cilësore përmes lojërave, aktiviteteve sportive dhe artit krijues.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Shield,
    title: 'Mbrojtje & Kujdes',
    desc: 'Ambient ku fëmijët ndihen të mbrojtur dhe të dëgjuar nga stafi ynë i dedikuar.',
    color: 'bg-purple-50 text-purple-600',
  },
];

const gallery = [
  { src: '/qendra_ditore/qendra ditore foto (1).jpg', label: 'Sesione Mësimore' },
  { src: '/qendra_ditore/qendra ditore foto (2).jpg', label: 'Aktivitete Kreative' },
  { src: '/qendra_ditore/qendra ditore foto (3).jpg', label: 'Bashkëpunim & Lojë' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number], delay },
});

// ─── HERO ─────────────────────────────────────────────────────────────────────

const Hero: React.FC = () => (
  <section className="relative w-full min-h-[100svh] flex items-end overflow-hidden bg-[#0f172a]">
    {/* Background image with parallax-like overlay */}
    <div className="absolute inset-0">
      <img
        src="/qendra_ditore/qendra ditore foto (1).jpg"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover opacity-40"
      />
      {/* Gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-transparent to-transparent" />
    </div>

    {/* Decorative red accent */}
    <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary-red/20 rounded-full blur-[120px] pointer-events-none" />

    {/* Content */}
    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-24 pt-40">
      <motion.div {...fadeUp(0)} className="max-w-3xl space-y-6">
        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-red/20 border border-primary-red/30 text-primary-red font-bold uppercase tracking-widest text-[10px]">
          <Heart size={10} />
          Shërbimi Social
        </span>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white font-plus-jakarta tracking-tight leading-[0.9]">
          QENDRA<br />
          <span className="text-primary-red">DITORE</span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/70 font-medium max-w-xl leading-relaxed">
          Një shtëpi larg shtëpisë — ku çdo fëmijë gjen kujdes, dashuri dhe mundësi.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#misioni"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-red text-white font-bold uppercase text-xs tracking-widest rounded-full hover:bg-red-700 transition-colors duration-300"
          >
            Zbulo Misionin <ArrowRight size={14} />
          </a>
          <Link
            to="/kontaktoni-me-ne"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm"
          >
            Na Kontaktoni
          </Link>
        </div>
      </motion.div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
  </section>
);

// ─── STATS BAR ────────────────────────────────────────────────────────────────

const StatsBar: React.FC = () => (
  <section className="bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            {...fadeUp(i * 0.1)}
            className="py-10 px-6 text-center"
          >
            <p className="text-4xl md:text-5xl font-black text-primary-red font-plus-jakarta">{s.value}</p>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

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
      <motion.div {...fadeUp(0.2)} className="relative h-[520px] hidden lg:block">
        <div className="absolute top-0 right-0 w-[75%] h-[65%] rounded-[40px] overflow-hidden shadow-2xl">
          <img src="/qendra_ditore/qendra ditore foto (2).jpg" alt="Aktivitete" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
          <img src="/qendra_ditore/qendra ditore foto (3).jpg" alt="Fëmijë" className="w-full h-full object-cover" />
        </div>
        {/* Floating badge */}
        <div className="absolute top-[55%] right-[5%] bg-primary-red text-white rounded-2xl p-4 shadow-xl text-center min-w-[110px]">
          <p className="text-3xl font-black">15+</p>
          <p className="text-[10px] font-bold uppercase tracking-wider opacity-80 leading-tight mt-0.5">Vite<br/>Shërbim</p>
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

// ─── GALLERY ──────────────────────────────────────────────────────────────────

const Gallery: React.FC = () => (
  <section className="py-32 px-6 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto space-y-16">
      <motion.div {...fadeUp(0)} className="text-center space-y-4">
        <p className="text-primary-red text-xs font-black uppercase tracking-[0.3em]">Momentet Tona</p>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta">
          Aktivitetet
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        {gallery.map((img, i) => (
          <motion.div
            key={img.src}
            {...fadeUp(i * 0.12)}
            className={`relative overflow-hidden rounded-[32px] group cursor-pointer ${i === 0 ? 'md:row-span-2 md:h-full min-h-[300px]' : 'h-[260px]'}`}
          >
            <img
              src={img.src}
              alt={img.label}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
              <p className="text-white font-bold uppercase tracking-widest text-xs">{img.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── CTA ──────────────────────────────────────────────────────────────────────

const CTA: React.FC = () => (
  <section className="py-32 px-6 md:px-12 bg-[#0f172a] relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-red/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary-red/5 rounded-full blur-[80px]" />
    </div>

    <motion.div {...fadeUp(0)} className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
      <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-red/20 border border-primary-red/30 text-primary-red font-bold uppercase tracking-widest text-[10px]">
        <Heart size={10} />
        Bëhu Pjesë
      </span>

      <h2 className="text-4xl md:text-6xl font-black text-white font-plus-jakarta uppercase tracking-tight leading-tight">
        Ndihmo një<br />
        <span className="text-primary-red">fëmijë sot</span>
      </h2>

      <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
        Çdo kontribut, i vogël apo i madh, ndryshon jetën e një fëmije. Bashkohu me ne dhe bëhu pjesë e historisë sonë.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/kontaktoni-me-ne"
          className="inline-flex items-center gap-2 px-10 py-4 bg-primary-red text-white font-bold uppercase text-xs tracking-widest rounded-full hover:bg-red-700 transition-colors duration-300"
        >
          Na Kontaktoni <ArrowRight size={14} />
        </Link>
        <Link
          to="/rregjistrohu-tani"
          className="inline-flex items-center gap-2 px-10 py-4 bg-white/10 border border-white/20 text-white font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white/20 transition-colors duration-300"
        >
          Rregjistrohu
        </Link>
      </div>
    </motion.div>
  </section>
);

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

const QendraDitore: React.FC = () => (
  <div className="flex flex-col">
    <Hero />
    <StatsBar />
    <Mission />
    <Services />
    <Gallery />
    <CTA />
  </div>
);

export default QendraDitore;
