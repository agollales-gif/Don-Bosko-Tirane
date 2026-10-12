import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, CheckCircle2 } from 'lucide-react';

// ─── DATA ─────────────────────────────────────────────────────────────────────

interface CourseCategory {
  id: string;
  label: string;
  tag: string;
  courses: {
    num: number;
    name: string;
    coaches: string;
    detail?: string;
  }[];
}

const categories: CourseCategory[] = [
  {
    id: 'sport',
    label: 'Sport',
    tag: 'Aktivitet Fizik',
    courses: [
      {
        num: 1,
        name: 'Futboll',
        coaches: 'Rigers (U-11-13-14), Leorenc (U-9), Erglin (U-9), Demian (U-11-13), Miri (U-7-17), Igli (U-13-17)',
      },
      {
        num: 2,
        name: 'Basketboll',
        coaches: 'Klevisi',
      },
      {
        num: 3,
        name: 'Volejboll',
        coaches: 'Juna',
      },
    ],
  },
  {
    id: 'art-edu',
    label: 'Arte & Edukim',
    tag: 'Krijimtari & Zhvillim',
    courses: [
      {
        num: 4,
        name: 'Kitarë',
        coaches: 'Flori',
        detail: 'Grupe: Kitarë fillestare & Kitarë e avancuar',
      },
      {
        num: 5,
        name: 'Teatër',
        coaches: 'Elona',
        detail: 'Grupe sipas klasave: kl 1–3 dhe kl 4–9',
      },
      {
        num: 6,
        name: 'Anglisht',
        coaches: 'Eftemi',
      },
      {
        num: 7,
        name: 'Art Pamor',
        coaches: 'Adi',
        detail: 'Grupe sipas klasave: kl 1–3 dhe kl 4–9',
      },
      {
        num: 8,
        name: 'Kërcim Modern',
        coaches: 'Joana',
      },
    ],
  },
];

interface ScheduleDay {
  day: string;
  standardTime: string;
  items: {
    title: string;
    time?: string;
  }[];
}

const weeklySchedule: ScheduleDay[] = [
  {
    day: 'E Hënë',
    standardTime: '15:30 – 16:30',
    items: [
      { title: 'Kitarë fillestare' },
      { title: 'Kërcim modern' },
      { title: 'Basketboll (kl 6 – kl 9)' },
      { title: 'Futboll (U7, U9, U11)' },
      { title: 'Futboll U15', time: '16:45 – 17:45' },
      { title: 'Futboll U17', time: '16:30 – 17:30' },
      { title: 'Volejboll U9' },
      { title: 'Art pamor (kl 1–3)' },
      { title: 'Teatër (kl 4–9)' },
    ],
  },
  {
    day: 'E Martë',
    standardTime: '15:30 – 16:30',
    items: [
      { title: 'Art pamor (kl 4–9)' },
      { title: 'Kitarë e avancuar' },
      { title: 'Volejboll (U13, U15)' },
      { title: 'Teatër (kl 1–kl 3)' },
      { title: 'Basketboll (kl 1–kl 5)' },
      { title: 'Futboll U13' },
      { title: 'Futboll U15', time: '16:45 – 17:45' },
      { title: 'Futboll U17', time: '15:30 – 16:30' },
      { title: 'Anglisht' },
    ],
  },
  {
    day: 'E Mërkurë',
    standardTime: '15:30 – 16:30',
    items: [
      { title: 'Kitarë fillestare' },
      { title: 'Kërcim modern' },
      { title: 'Basketboll (kl 6–kl 9)' },
      { title: 'Futboll (U7, U9, U11)' },
      { title: 'Futboll U17', time: '16:30 – 17:30' },
      { title: 'Volejboll U9' },
      { title: 'Art pamor (kl 1–3)' },
    ],
  },
  {
    day: 'E Enjte',
    standardTime: '15:30 – 16:30',
    items: [
      { title: 'Art pamor (kl 4–9)' },
      { title: 'Kitarë e avancuar' },
      { title: 'Teatër (kl 1–kl 3)' },
      { title: 'Futboll U13', time: '15:30 – 16:30' },
      { title: 'Futboll U15', time: '16:45 – 17:45' },
      { title: 'Futboll U17', time: '15:30 – 16:30' },
      { title: 'Basketboll (kl 1–kl 5)' },
      { title: 'Volejboll (U13, U15)' },
      { title: 'Anglisht' },
    ],
  },
  {
    day: 'E Premte',
    standardTime: '15:30 – 16:30',
    items: [
      { title: 'Futboll (U7, U9, U11)' },
      { title: 'Futboll U13', time: '16:45 – 17:45' },
      { title: 'Teatër (kl 4–kl 9)' },
    ],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
});

// ─── HERO ─────────────────────────────────────────────────────────────────────

const Hero: React.FC = () => {
  const bob = (delay: number, range = 10) => ({
    animate: { y: [0, -range, 0] },
    transition: { delay, duration: 3 + delay * 0.4, repeat: Infinity, ease: 'easeInOut' as const },
  });

  return (
    <section className="relative w-full bg-primary-red overflow-hidden flex flex-col lg:flex-row pt-28 pb-16 lg:py-24">
      {/* Left — text */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 container mx-auto relative z-10 lg:w-3/5">
        <div className="max-w-2xl text-left">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-plus-jakarta tracking-tight mb-4">
              LABORATORET<br />
              <span className="text-white/90">DHE KURSET</span>
            </h1>
            <div className="bg-black/15 backdrop-blur-sm border border-white/15 rounded-2xl p-4 sm:p-5 mt-4 text-white/90 text-sm sm:text-base leading-relaxed max-w-xl">
              <p className="font-semibold text-white mb-1.5">Të dashur prindër,</p>
              <p className="text-white/85 text-xs sm:text-sm">
                Gjatë këtij viti në ambientet e oratorit do të kemi laboratore dhe kurse.
                Më poshtë gjeni ditët dhe oraret për çdo kurs, si dhe mundësinë për regjistrimin tek sekretaria e oratorit.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right — floating emojis */}
      <div className="relative w-full h-[220px] lg:h-auto lg:w-2/5 pointer-events-none z-0 mt-6 lg:mt-0 flex items-center justify-center">
        <div className="relative w-full max-w-sm h-full">
          <motion.div className="absolute text-5xl lg:text-7xl opacity-25" style={{ left: '10%', top: '10%' }} {...bob(0)}>⚽</motion.div>
          <motion.div className="absolute text-5xl lg:text-7xl opacity-25" style={{ right: '15%', top: '15%' }} {...bob(0.4)}>🏀</motion.div>
          <motion.div className="absolute text-5xl lg:text-6xl opacity-25" style={{ left: '35%', top: '45%' }} {...bob(0.8)}>🏐</motion.div>
          <motion.div className="absolute text-5xl lg:text-6xl opacity-25" style={{ left: '12%', bottom: '15%' }} {...bob(1.2)}>🎸</motion.div>
          <motion.div className="absolute text-5xl lg:text-6xl opacity-25" style={{ right: '20%', bottom: '20%' }} {...bob(1.6)}>🎨</motion.div>
          <motion.div className="absolute text-4xl lg:text-5xl opacity-25" style={{ right: '45%', top: '10%' }} {...bob(0.6)}>🎭</motion.div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-12 z-20 pointer-events-none bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

// ─── COURSES SECTION ──────────────────────────────────────────────────────────

const CoursesSection: React.FC = () => (
  <section className="py-16 md:py-20 px-6 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <motion.div {...fadeUp(0)} className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8">
        <div>
          <p className="text-primary-red text-xs font-black uppercase tracking-[0.3em] mb-2">Programi Vjetor</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta">
            Laboratoret & Kurset <span className="text-primary-red">2026 / 2027</span>
          </h2>
        </div>
        <p className="text-gray-500 text-sm max-w-md">
          8 disiplina të dedikuara për zhvillimin sportiv, artistik dhe edukativ të fëmijëve dhe të rinjve në ambientet e Don Boskos.
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.id}
            {...fadeUp(ci * 0.1)}
            className="bg-gray-50/70 border border-gray-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5 border-b border-gray-200/60 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">{cat.tag}</span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta">
                    {cat.label}
                  </h3>
                </div>
                <span className="text-xs font-bold text-primary-red bg-primary-red/10 px-3 py-1 rounded-full">
                  {cat.courses.length} {cat.courses.length === 1 ? 'Kurs' : 'Kurse'}
                </span>
              </div>

              <div className="divide-y divide-gray-200/60">
                {cat.courses.map((course) => (
                  <div key={course.name} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-primary-red/10 text-primary-red text-[11px] font-black flex items-center justify-center shrink-0">
                          {course.num}
                        </span>
                        <h4 className="text-base font-black uppercase tracking-wide text-gray-900">
                          {course.name}
                        </h4>
                      </div>
                      {course.detail && (
                        <p className="text-xs text-gray-500 pl-7">{course.detail}</p>
                      )}
                    </div>

                    <div className="sm:text-right pl-7 sm:pl-0">
                      <div className="flex items-center sm:justify-end gap-1.5 text-xs text-gray-600 font-semibold">
                        <Users className="w-3.5 h-3.5 text-primary-red shrink-0" />
                        <span>{course.coaches}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── SCHEDULE SECTION ─────────────────────────────────────────────────────────

const ScheduleSection: React.FC = () => (
  <section className="py-16 md:py-20 px-6 md:px-12 bg-[#fafaf8] border-t border-gray-100">
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Title */}
      <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-primary-red text-xs font-black uppercase tracking-[0.3em]">Orari Javor</span>
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta">
          Ditët & Oraret e Kurseve
        </h2>
        <p className="text-gray-500 text-sm">
          Orari bazë i aktiviteteve është <strong className="text-gray-800">15:30 – 16:30</strong>, me orare të përshtatura për grupe të caktuara.
        </p>
      </motion.div>

      {/* 5-Day Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
        {weeklySchedule.map((dayPlan, idx) => (
          <motion.div
            key={dayPlan.day}
            {...fadeUp(idx * 0.08)}
            className="bg-white border border-gray-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Day Header */}
              <div className="border-b border-gray-100 pb-3 mb-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black uppercase tracking-tight text-primary-red font-plus-jakarta">
                    {dayPlan.day}
                  </h3>
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-semibold mt-1">
                  <Clock className="w-3 h-3 text-primary-red" />
                  <span>Bazë: {dayPlan.standardTime}</span>
                </div>
              </div>

              {/* Items List */}
              <ul className="space-y-2">
                {dayPlan.items.map((item, i) => (
                  <li key={i} className="text-xs text-gray-700 leading-snug">
                    <div className="flex items-start justify-between gap-1.5">
                      <span className="font-semibold">{item.title}</span>
                      {item.time && (
                        <span className="shrink-0 text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200/60 rounded px-1.5 py-0.5">
                          {item.time}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">
              {dayPlan.items.length} aktivitete
            </div>
          </motion.div>
        ))}
      </div>

      {/* Registration Banner */}
      <motion.div {...fadeUp(0.2)} className="bg-[#0f172a] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden mt-8">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-red/15 -mr-40 -mt-40 rounded-full blur-[90px] pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-primary-red text-[11px] font-black uppercase tracking-[0.3em]">
              Informacion Regjistrimi
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-plus-jakarta">
              Regjistrimi tek Sekretaria e Oratorit
            </h3>
            <p className="text-white/70 text-sm max-w-xl">
              Të gjitha regjistrimet për kurset dhe laboratoret e Don Boskos bëhen personalisht pranë sekretarisë së oratorit gjatë orarit të punës.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2.5 rounded-2xl text-xs font-semibold text-white">
              <MapPin className="w-4 h-4 text-primary-red" />
              <span>Oratori Don Bosko, Tiranë</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-red text-white px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary-red/30">
              <CheckCircle2 className="w-4 h-4" />
              <span>Regjistrimet të Hapura</span>
            </div>
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
