import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { TRANSLATIONS, GET_NAV_STRUCTURE } from '../constants';

interface HeaderProps {
  onToggleDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleDrawer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const language = 'AL';
  const t = TRANSLATIONS[language];
  const navStructure = GET_NAV_STRUCTURE(t);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-3 md:pt-4 px-4 md:px-6 transition-all duration-500">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          pointer-events-auto h-14 flex items-center justify-between px-6 md:px-10
          bg-white/80 backdrop-blur-2xl rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] 
          border border-white/40 ring-1 ring-black/5 w-full max-w-7xl relative
        `}
      >
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-4 shrink-0 group cursor-pointer">
          <motion.div
            whileHover={{ rotate: 12, scale: 1.1 }}
            className="relative"
          >
            <img
              src="/logo.png"
              alt="Don Bosko Logo"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </motion.div>
          <div className="hidden sm:block">
            <span className="text-xs font-extrabold text-gray-900 uppercase tracking-tight font-plus-jakarta">
              QENDRA SOCIALE DON BOSKO TIRANË
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 ml-8">
          {navStructure.map((link) => (
            <div key={link.label} className="relative">
              {link.subItems ? (
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`
                      relative px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-1.2
                      ${link.href === '/shkolla' && location.pathname.startsWith('/shkolla') ? 'text-primary-red' : 'text-gray-600 hover:text-gray-900'}
                    `}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    {link.href === '/shkolla' && location.pathname.startsWith('/shkolla') && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary-red/5 rounded-full -z-0 border border-primary-red/10"
                        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                      />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-white/40 ring-1 ring-black/5 overflow-hidden z-50"
                      >
                        <div className="py-2">
                          {link.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className={`
                                block px-6 py-3 text-xs font-medium transition-all duration-200
                                ${location.pathname === subItem.href 
                                  ? 'text-primary-red bg-primary-red/5' 
                                  : 'text-gray-700 hover:text-primary-red hover:bg-gray-50'
                                }
                              `}
                              onClick={() => setDropdownOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={link.href}
                  className={`
                    relative px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-1.2
                    ${(location.pathname === link.href) || (link.href === '/shkolla' && location.pathname.startsWith('/shkolla')) ? 'text-primary-red' : 'text-gray-600 hover:text-gray-900'}
                  `}
                >
                  <span className="relative z-10">{link.label}</span>
                  {(location.pathname === link.href) || (link.href === '/shkolla' && location.pathname.startsWith('/shkolla')) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary-red/5 rounded-full -z-0 border border-primary-red/10"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Action Section */}
        <div className="flex items-center space-x-6">
          <button
            onClick={onToggleDrawer}
            className="p-2 text-gray-900 hover:text-primary-red transition-colors lg:hidden"
            aria-label="Open navigation menu"
          >
            <div className="flex flex-col space-y-1.5 w-6">
              <span className="h-0.5 bg-current w-full rounded-full"></span>
              <span className="h-0.5 bg-current w-2/3 rounded-full ml-auto"></span>
            </div>
          </button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
