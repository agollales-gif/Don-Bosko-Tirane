import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Info,
  GraduationCap,
  Newspaper,
  MessageSquare,
  Church,
  Users,
  Heart,
  X,
  ChevronDown,
  Edit3
} from 'lucide-react';
import { TRANSLATIONS, GET_NAV_STRUCTURE } from '../constants';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const language = 'AL';
  const t = TRANSLATIONS[language];
  const navStructure = GET_NAV_STRUCTURE(t);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const getIcon = (label: string) => {
    switch (label) {
      case t.navHome: return <Home size={18} />;
      case t.navSchools: return <GraduationCap size={18} />;
      case t.navNews: return <Newspaper size={18} />;
      case t.navOratori: return <Users size={18} />;
      case t.navChurch: return <Church size={18} />;
      case t.navDayCenter: return <Heart size={18} />;
      case t.navContact: return <MessageSquare size={18} />;
      case "Komuniteti": return <Users size={18} />;
      case "Rregjistrim": return <Edit3 size={18} />;
      default: return <Info size={18} />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />

          <motion.div
            ref={drawerRef}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-[85%] max-w-sm glass-drawer z-[70] flex flex-col"
          >
            <div className="p-8 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
                <div className="flex flex-col">
                  <span className="font-extrabold text-gray-900 text-base uppercase leading-none font-plus-jakarta">Don Bosko</span>
                  <span className="text-[10px] font-bold text-primary-red uppercase tracking-[0.2em]">Tiranë</span>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Mbyll menunë"
                className="p-2 text-gray-400 hover:text-primary-red transition-colors bg-slate-50 rounded-lg border border-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-grow overflow-y-auto px-6 py-4">
              <ul className="space-y-3">
                {navStructure.map((item) => (
                  <li key={item.label} className="overflow-hidden">
                    {item.subItems ? (
                      <div className="space-y-1">
                        <button
                          onClick={() => toggleSubmenu(item.label)}
                          className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${openSubmenus[item.label]
                            ? 'bg-primary-red/5 text-primary-red'
                            : 'text-gray-700 hover:bg-slate-50'
                            }`}
                        >
                          <div className="flex items-center space-x-4">
                            <span className={openSubmenus[item.label] ? 'text-primary-red' : 'text-gray-400'}>
                              {getIcon(item.label)}
                            </span>
                            <span className="font-bold text-[13px] uppercase tracking-wider">{item.label}</span>
                          </div>
                          <motion.div
                            animate={{ rotate: openSubmenus[item.label] ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown size={16} />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {openSubmenus[item.label] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <ul className="pl-12 pr-4 py-2 space-y-1">
                                {item.subItems.map((sub) => (
                                  <li key={sub.label}>
                                    <Link
                                      to={sub.href}
                                      className="block py-3 text-[11px] font-bold text-gray-500 hover:text-primary-red transition-colors uppercase tracking-widest"
                                      onClick={onClose}
                                    >
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center space-x-4 p-4 text-gray-700 font-bold text-[13px] uppercase tracking-wider hover:bg-primary-red/5 hover:text-primary-red rounded-xl transition-all"
                        onClick={onClose}
                      >
                        <span className="text-gray-400 group-hover:text-primary-red">
                          {getIcon(item.label)}
                        </span>
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-10 border-t border-slate-100">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 text-center">Na ndiqni</p>
              <div className="flex justify-center space-x-6">
                {[
                  { name: 'facebook', url: 'https://www.facebook.com/QendraDBTirane' },
                  { name: 'instagram', url: 'https://www.instagram.com/qendra_donbosko_tirane/' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    aria-label={`Na ndiqni në ${social.name}`}
                    className="p-3 bg-slate-50 rounded-xl text-gray-400 hover:text-primary-red hover:bg-primary-red/5 transition-all transform hover:-translate-y-1 shadow-sm border border-slate-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-5 h-5 flex items-center justify-center" aria-hidden="true">
                      <span className="text-[8px] uppercase font-black">{social.name[0]}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;
