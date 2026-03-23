import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { TRANSLATIONS, GET_NAV_STRUCTURE } from '../constants';

const Footer: React.FC = () => {
  const language = 'AL';
  const t = TRANSLATIONS[language];

  return (
    <footer id="contact" className="text-white overflow-hidden font-plus-jakarta">
      {/* Main Footer Section */}
      <div className="bg-[#0f172a] pt-24 pb-16 px-6 md:px-12 relative border-t border-white/5">
        {/* Background Accent Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-red/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 relative z-10">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 group">
              <div className="bg-white p-2 rounded-2xl transition-transform duration-500 group-hover:rotate-6 shadow-lg shadow-white/5">
                <img src="/logo.png" alt="Don Bosko Tiranë logo" width={48} height={48} className="w-12 h-12 object-contain" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-black uppercase leading-none tracking-tight">DON BOSKO</h3>
                <h4 className="text-[10px] font-bold text-primary-red uppercase tracking-[0.3em] mt-1.5">TIRANË</h4>
              </div>
            </div>
            <p className="text-[13px] font-medium text-white/50 leading-relaxed max-w-sm">
              Misioni ynë është edukimi i të rinjve sipas sistemit parandalues të Shën Gjon Boskos, duke ofruar kualitet dhe përkushtim për gjeneratat e ardhshme.
            </p>
            <div className="flex items-center space-x-3">
              {[
                { icon: <Facebook size={18} />, label: 'Facebook', url: "https://www.facebook.com/QendraDBTirane" },
                { icon: <Instagram size={18} />, label: 'Instagram', url: "https://www.instagram.com/qendra_donbosko_tirane/" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-primary-red transition-all duration-300 rounded-xl border border-white/5 hover:border-transparent group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-white/70 group-hover:text-white group-hover:scale-110 transition-all">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary-red">Na Kontaktoni</h4>
            <div className="space-y-5 text-[13px]">
              <div className="flex items-start space-x-4 group">
                <div className="mt-0.5 p-2 bg-white/5 rounded-lg text-primary-red transition-colors group-hover:bg-primary-red group-hover:text-white">
                  <MapPin size={15} />
                </div>
                <span className="text-white/60 group-hover:text-white transition-colors pt-1.5">{t.footerAddress}</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-white/5 rounded-lg text-primary-red transition-colors group-hover:bg-primary-red group-hover:text-white">
                  <Phone size={15} />
                </div>
                <a href="tel:+355694054009" className="text-white/60 group-hover:text-white transition-colors">+355 69 405 4009</a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-white/5 rounded-lg text-primary-red transition-colors group-hover:bg-primary-red group-hover:text-white">
                  <Mail size={15} />
                </div>
                <a href="mailto:qfp_donbosko@yahoo.it" className="text-white/60 group-hover:text-white transition-colors truncate">qfp_donbosko@yahoo.it</a>
              </div>
            </div>
          </div>

          {/* Programs Column */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary-red">Programet</h4>
            <ul className="space-y-4 text-[12px] font-bold uppercase tracking-wider">
              {GET_NAV_STRUCTURE(t).slice(1, 5).map((navItem) => (
                <li key={navItem.label}>
                  <a href={navItem.href} className="text-white/40 hover:text-white flex items-center space-x-3 transition-all group">
                    <span className="w-1.5 h-[1.5px] bg-primary-red opacity-0 group-hover:opacity-100 group-hover:w-3 transition-all"></span>
                    <span>{navItem.label}</span> 
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary-red">Lidhje të Shpejta</h4>
            <ul className="space-y-4 text-[12px] font-bold uppercase tracking-wider">
              {GET_NAV_STRUCTURE(t).slice(5).map((navItem) => (
                <li key={navItem.label}>
                  <a href={navItem.href} className="text-white/40 hover:text-white flex items-center space-x-3 transition-all group">
                    <span className="w-1.5 h-[1.5px] bg-primary-red opacity-0 group-hover:opacity-100 group-hover:w-3 transition-all"></span>
                    <span>{navItem.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Improved Layout */}
      <div className="bg-[#0b1221] py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright & Author */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/30 text-center md:text-left">
              &copy; {new Date().getFullYear()} Qendra Sociale Don Bosko Tiranë. Të gjitha të drejtat.
            </p>
            <div className="flex items-center space-x-2 text-[10px] font-black tracking-[0.1em]">
              <span className="text-white/20 uppercase">Realizuar nga</span>
              <span className="text-primary-red/80 hover:text-primary-red transition-colors cursor-default">ALESJO AGOLLI</span>
            </div>
          </div>

          {/* Legal & Info */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {t.vatNumber && (
              <span className="text-[10px] text-white/20 font-medium tracking-widest">{t.vatNumber}</span>
            )}
            <div className="flex items-center space-x-6 text-[10px] font-bold uppercase tracking-widest">
              <a href="/privacy-policy" className="text-white/30 hover:text-white transition-colors">
                Privatësia
              </a>
              <span className="w-[1px] h-3 bg-white/10 hidden md:block"></span>
              <a href="/terms-of-use" className="text-white/30 hover:text-white transition-colors">
                Kushtet
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;