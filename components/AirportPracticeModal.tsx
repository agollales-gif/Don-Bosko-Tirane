import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AirportPracticeModal: React.FC = () => {
  const [showTeaser, setShowTeaser] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  // Open the modal automatically when the user first opens the page
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
      setShowTeaser(true);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll only when the full modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const handleNavigate = () => {
    setIsModalOpen(false);
    navigate('/shkolla/profesionale');
  };

  return (
    <>
      {/* 1. Floating Teaser Card — Page looks normal, this slides in & opens the modal when clicked */}
      <AnimatePresence>
        {showTeaser && !isModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-5 right-5 z-[90] max-w-[360px] w-[calc(100vw-2.5rem)]"
          >
            <div
              onClick={() => setIsModalOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setIsModalOpen(true);
              }}
              className="group relative bg-white/95 backdrop-blur-xl rounded-2xl p-3 shadow-[0_20px_50px_rgba(15,23,42,0.22)] ring-1 ring-black/10 hover:ring-primary-red/40 transition-all duration-300 flex items-center gap-3.5 cursor-pointer"
            >
              {/* Dismiss teaser button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTeaser(false);
                }}
                aria-label="Mbyll njoftimin"
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0f172a] text-white hover:bg-primary-red flex items-center justify-center shadow-md transition-colors cursor-pointer z-10"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              {/* Thumbnail */}
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-900">
                <img
                  src="/praktika_tia/tia-1.jpg"
                  alt="Praktika në TIA"
                  style={{ objectPosition: 'center 45%' }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Teaser Copy */}
              <div className="flex-1 min-w-0 pr-1">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-red opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-red" />
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red font-plus-jakarta truncate">
                    Praktika në TIA · Klasa XIII
                  </span>
                </div>

                <h3 className="text-xs font-black text-[#0f172a] uppercase tracking-tight font-plus-jakarta leading-snug line-clamp-2 group-hover:text-primary-red transition-colors">
                  Nga teoria në praktikë, më pranë botës së aviacionit!
                </h3>

                <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-bold text-gray-500 group-hover:text-[#0f172a] transition-colors">
                  <span>Kliko për të lexuar</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Compact Full Modal — Pops up when the teaser is clicked */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-[#0f172a]/75 backdrop-blur-sm overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="tia-editorial-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[620px] bg-white rounded-[22px] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.65)] overflow-hidden ring-1 ring-black/5 my-auto"
            >
              {/* Trimmed Image Height — Cuts off the blank ceiling wall so the card fits comfortably on screen */}
              <div className="relative w-full h-[220px] sm:h-[265px] bg-[#0f172a] overflow-hidden select-none">
                <img
                  src="/praktika_tia/tia-1.jpg"
                  alt="Nxënësit e klasës XIII të shkollës profesionale Don Bosko në Aeroportin Ndërkombëtar të Tiranës"
                  style={{ objectPosition: 'center 58%' }}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/45 to-transparent pointer-events-none" />

                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Mbyll dritaren"
                  className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-black/55 hover:bg-white text-white hover:text-[#0f172a] backdrop-blur-md border border-white/15 flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Compact Editorial Content */}
              <div className="px-5 py-4 sm:px-7 sm:py-5 bg-white">
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-4 h-[2px] bg-primary-red" />
                  <span className="text-[9.5px] font-black uppercase tracking-[0.26em] text-primary-red font-plus-jakarta">
                    Praktika Mësimore · Klasa XIII
                  </span>
                </div>

                {/* Headline */}
                <h2
                  id="tia-editorial-title"
                  className="text-lg sm:text-[21px] font-black uppercase tracking-tight text-[#0f172a] leading-[1.15] font-plus-jakarta mb-2"
                >
                  Nga teoria në praktikë, më pranë botës së{' '}
                  <span className="text-primary-red">aviacionit!</span>
                </h2>

                {/* Body Copy with inline "Lexo më shumë" */}
                <div className="text-xs sm:text-[13px] text-gray-600 leading-[1.65] font-medium">
                  <p className="inline">
                    Aeroporti Ndërkombëtar i Tiranës mirëpriti nxënësit e klasës XIII të shkollës profesionale “Don Bosko”, në kuadër të praktikës së tyre mësimore.
                    {!isExpanded && (
                      <>
                        {' '}Gjatë vizitës, nxënësit u njohën nga afër me sistemet dhe proceset operacionale të aeroportit...{' '}
                        <button
                          type="button"
                          onClick={() => setIsExpanded(true)}
                          className="inline font-bold text-primary-red hover:text-[#0f172a] underline underline-offset-4 decoration-primary-red/40 hover:decoration-[#0f172a] transition-colors cursor-pointer"
                        >
                          Lexo më shumë
                        </button>
                      </>
                    )}
                  </p>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="mt-2">
                          Gjatë vizitës, nxënësit patën mundësinë të njihen nga afër me sistemet, proceset dhe departamentet operacionale të aeroportit, duke lidhur njohuritë teorike me funksionimin e përditshëm të industrisë së aviacionit. Një eksperiencë që i afron të rinjtë me mjedisin profesional dhe mundësitë e karrierës në këtë sektor.{' '}
                          <button
                            type="button"
                            onClick={() => setIsExpanded(false)}
                            className="inline font-bold text-gray-900 hover:text-primary-red underline underline-offset-4 decoration-gray-300 transition-colors cursor-pointer ml-1"
                          >
                            Lexo më pak
                          </button>
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Compact Sponsored / Partner Section */}
                <div className="mt-4 pt-3.5 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[8.5px] font-black uppercase tracking-[0.26em] text-gray-400 font-plus-jakarta">
                      Sponsored · Mirënjohje e Veçantë
                    </span>
                    <span className="text-[8.5px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Partner Institucional
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#fafaf7] border border-gray-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="px-2.5 py-1.5 rounded-lg bg-white border border-gray-200/90 shrink-0 flex items-center gap-2">
                        <span className="text-sm font-black tracking-tighter text-[#d9232a] font-plus-jakarta leading-none">
                          T/A
                        </span>
                        <span className="w-[1px] h-4 bg-gray-200" />
                        <div className="text-[7px] font-extrabold uppercase tracking-[0.12em] text-gray-500 leading-[1.15]">
                          Tirana<br />International<br />Airport
                        </div>
                      </div>

                      <p className="text-[11.5px] text-gray-600 leading-snug font-medium">
                        Falënderojmë përzemërsisht{' '}
                        <strong className="text-[#0f172a] font-bold">
                          Aeroportin Ndërkombëtar të Tiranës (TIA)
                        </strong>{' '}
                        për mikpritjen dhe mbështetjen e të rinjve tanë.
                      </p>
                    </div>

                    <button
                      onClick={handleNavigate}
                      className="px-4 py-2 bg-[#0f172a] hover:bg-primary-red text-white text-[9.5px] font-black uppercase tracking-[0.16em] rounded-full transition-colors duration-300 cursor-pointer whitespace-nowrap self-end sm:self-center shrink-0"
                    >
                      Shkolla Profesionale →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AirportPracticeModal;
