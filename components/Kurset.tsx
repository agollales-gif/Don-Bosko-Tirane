import React from 'react';
import { motion } from 'framer-motion';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: 'sport',
    label: 'Sport',
    tag: 'Aktivitet Fizik',
    courses: [
      { name: 'Futboll', coaches: 'Rigels, Miri, Erglin, Lorenc, Demian' },
      { name: 'Basketboll', coaches: 'Klevisi' },
      { name: 'Volejboll', coaches: 'Juna' },
    ],
  },
  {
    id: 'art',
    label: 'Arte & Muzikë',
    tag: 'Krijimtari',
    courses: [
      { name: 'Piano', coaches: 'Mozinjo' },
      { name: 'Kitarë', coaches: 'Flori' },
      { name: 'Vallëzim Modern', coaches: 'Joana' },
      { name: 'Arte Figurative', coaches: 'Adi' },
      { name: 'Teatër', coaches: 'Elona' },
    ],
  },
  {
    id: 'edu',
    label: 'Edukim & Aftësi',
    tag: 'Zhvillim Personal',
    courses: [
      { name: 'Anglisht', coaches: 'Redina' },
      { name: 'Gatim', coaches: 'Deleda' },
      { name: 'Punë Dore', coaches: 'Elona', detail: 'Perla, fije, mozaik, grep, pikturë mbi pëlhurë, materiale të ricikluara' },
    ],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
});

// ─── HERO ─────────────────────────────────────────────────────────────────────

const Hero: React.FC = () => {
  const bob = (delay: number, range = 12) => ({
    animate: { y: [0, -range, 0] },
    transition: { delay, duration: 3 + delay * 0.4, repeat: Infinity, ease: 'easeInOut' as const },
  });

  return (
    <section className="relative w-full min-h-[100svh] lg:min-h-[85vh] bg-primary-red overflow-hidden flex flex-col lg:flex-row pt-28 lg:pt-0">

      {/* Left — text */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 container mx-auto relative z-10 lg:w-1/2">
        <div className="max-w-2xl text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block py-1.5 px-4 mb-4 lg:mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-semibold uppercase tracking-widest text-[10px] sm:text-xs">
              D.B.LABC 2025 / 2026
            </span>
            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl font-extrabold text-white font-plus-jakarta tracking-tight mb-4 lg:mb-6">
              LABORATORET<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">DHE KURSET</span>
            </h1>
            <p className="text-lg lg:text-2xl text-white/95 max-w-xl font-medium leading-snug lg:leading-relaxed mb-3 lg:mb-4">
              Sport · Arte · Muzikë · Aftësi
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-white/75 max-w-lg font-normal leading-relaxed">
              Programi i plotë i aktiviteteve jashtëshkollore për vitin akademik 2025/2026 — i hapur për të gjithë të rinjtë e Qendrës Don Bosko.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right — floating white emoji silhouettes */}
      <div className="relative w-full h-[42vh] min-h-[260px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full pointer-events-none z-0 mt-auto lg:mt-0">

        {/* ⚽ football */}
        <motion.div className="absolute text-[80px] lg:text-[110px] opacity-20" style={{ left: '15%', top: '8%' }} {...bob(0)}>
          ⚽
        </motion.div>

        {/* 🏀 basketball */}
        <motion.div className="absolute text-[64px] lg:text-[90px] opacity-20" style={{ left: '55%', top: '5%' }} {...bob(0.6)}>
          🏀
        </motion.div>

        {/* 🏐 volleyball */}
        <motion.div className="absolute text-[56px] lg:text-[80px] opacity-20" style={{ left: '72%', top: '38%' }} {...bob(1.1)}>
          🏐
        </motion.div>

        {/* 🎸 guitar */}
        <motion.div className="absolute text-[72px] lg:text-[100px] opacity-20" style={{ left: '5%', top: '48%' }} {...bob(0.3)}>
          🎸
        </motion.div>

        {/* 🎹 piano */}
        <motion.div className="absolute text-[52px] lg:text-[72px] opacity-20" style={{ left: '40%', top: '52%' }} {...bob(0.9)}>
          🎹
        </motion.div>

        {/* 🎨 art */}
        <motion.div className="absolute text-[60px] lg:text-[84px] opacity-20" style={{ left: '62%', top: '68%' }} {...bob(1.4)}>
          🎨
        </motion.div>

        {/* 📚 book */}
        <motion.div className="absolute text-[48px] lg:text-[68px] opacity-20" style={{ left: '25%', top: '72%' }} {...bob(0.5)}>
          📚
        </motion.div>

        {/* 🎵 note */}
        <motion.div className="absolute text-[40px] lg:text-[56px] opacity-20" style={{ left: '82%', top: '18%' }} {...bob(1.7)}>
          🎵
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
        <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]" />
      </div>
    </section>
  );
};

// ─── COURSES SECTION ──────────────────────────────────────────────────────────

const CoursesSection: React.FC = () => (
  <section className="py-28 px-6 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto space-y-16">

      <motion.div {...fadeUp(0)} className="grid md:grid-cols-2 gap-8 items-end border-b border-gray-100 pb-12">
        <div className="space-y-3">
          <p className="text-[#9c252d] text-[10px] font-black uppercase tracking-[0.35em]">Programi Vjetor</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta leading-none">
            D.B.LABC<br />
            <span className="text-[#9c252d]">2025 / 2026</span>
          </h2>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed md:text-right max-w-sm md:ml-auto">
          Të gjitha kurset zhvillohen në ambientet e Qendrës Don Bosko, Tiranë. Regjistrimi bëhet pranë sekretarisë së Oratorit.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {categories.map((cat, ci) => (
          <motion.div key={cat.id} {...fadeUp(ci * 0.12)} className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 space-y-8">
            <div className="space-y-1">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-300">{cat.tag}</p>
              <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta border-l-[3px] border-[#9c252d] pl-3">
                {cat.label}
              </h3>
            </div>
            <div className="divide-y divide-gray-50">
              {cat.courses.map((course, i) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.1 + i * 0.07, duration: 0.4 }}
                  className="group py-4 flex items-start justify-between gap-4 cursor-default"
                >
                  <div className="space-y-1 flex-1">
                    <p className="text-sm font-black uppercase tracking-wide text-gray-800 group-hover:text-[#9c252d] transition-colors duration-200">
                      {course.name}
                    </p>
                    {course.detail && (
                      <p className="text-[11px] text-gray-400 leading-relaxed">{course.detail}</p>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    {course.coaches.split(', ').map((c, idx) => (
                      <span key={idx} className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">{c}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── SCHEDULE SECTION ─────────────────────────────────────────────────────────

const ScheduleSection: React.FC = () => (
  <section className="py-24 px-6 md:px-12 bg-[#fafaf8]">
    <div className="max-w-7xl mx-auto">
      <motion.div {...fadeUp(0)} className="bg-[#0f172a] rounded-[36px] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#9c252d]/10 -mr-36 -mt-36 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 -ml-28 -mb-28 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative z-10 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
          <div className="p-10 md:p-12 flex flex-col justify-center space-y-3">
            <p className="text-[#9c252d] text-[10px] font-black uppercase tracking-[0.35em]">Informacion</p>
            <h3 className="text-3xl font-black uppercase tracking-tight text-white font-plus-jakarta leading-tight">
              Oraret &<br />Regjistrimi
            </h3>
            <div className="w-10 h-[3px] bg-[#9c252d] rounded-full" />
          </div>

          <div className="p-10 md:p-12 flex flex-col justify-center space-y-4">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">Orari i Kurseve</p>
            <div className="space-y-2">
              <p className="text-white font-black text-xl tracking-tight">E Hënë — E Enjte</p>
              <p className="text-[#9c252d] font-black text-2xl tracking-tight">15:30 — 16:30</p>
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
              Shumica e kurseve zhvillohen sipas këtij orari. Kurset specifike mund të kenë orar të ndryshëm.
            </p>
          </div>

          <div className="p-10 md:p-12 flex flex-col justify-center space-y-4">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">Si të Regjistrohesh</p>
            <p className="text-white font-black text-xl tracking-tight leading-snug">Sekretaria e Oratorit</p>
            <p className="text-white/50 text-xs leading-relaxed">
              Paraqituni personalisht pranë sekretarisë së Oratorit Don Bosko për t'u regjistruar në kursin e dëshiruar.
            </p>
            <span className="inline-block w-fit text-[10px] font-black uppercase tracking-widest text-[#9c252d] border border-[#9c252d]/30 rounded-full px-4 py-1.5">
              Regjistrimi i Hapur
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

const Kurset: React.FC = () => (
  <div className="flex flex-col">
    <Hero />
    <CoursesSection />
    <ScheduleSection />
  </div>
);

export default Kurset;
