import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, ExternalLink } from 'lucide-react';
import { TRANSLATIONS, GET_NAV_STRUCTURE } from '../constants';

const Footer: React.FC = () => {
  const language = 'AL';
  const t = TRANSLATIONS[language];

  return (
    <footer id="contact" className="text-white overflow-hidden">
      {/* Main Footer */}
      <div className="bg-[#0f172a] pt-32 pb-24 px-6 md:px-12 relative border-t border-white/5">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-red/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 relative z-10">
          <div className="space-y-10">
            <div className="flex items-center space-x-5 group">
              <div className="bg-white p-2 rounded-2xl transition-transform duration-500 group-hover:rotate-6">
                <img src="/logo.png" alt="Logo" className="w-14 h-14 object-contain" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-black uppercase leading-none tracking-tight font-plus-jakarta">DON BOSKO</h3>
                <h4 className="text-xs font-bold text-primary-red uppercase tracking-[0.3em] mt-1">TIRANË</h4>
              </div>
            </div>
            <p className="text-sm font-medium text-white/60 leading-relaxed max-w-sm">
              Misioni ynë është edukimi i të rinjve sipas sistemit parandalues të Shën Gjon Boskos, duke ofruar kualitet dhe përkushtim për gjeneratat e ardhshme.
            </p>
            <div className="flex items-center space-x-4">
              {[
                { icon: <Facebook size={18} />, label: 'Facebook' },
                { icon: <Instagram size={18} />, label: 'Instagram' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.label === 'Facebook' ? "https://www.facebook.com/QendraDBTirane" : social.label === 'Instagram' ? "https://www.instagram.com/qendra_donbosko_tirane/" : "#"}
                  className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-primary-red transition-all duration-300 rounded-xl group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-white group-hover:scale-110 transition-transform">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-primary-red">Na Kontaktoni</h4>
            <div className="space-y-6 text-[13px] font-bold">
              <div className="flex items-start space-x-4 group">
                <div className="mt-1 p-2 bg-white/5 rounded-lg text-primary-red">
                  <MapPin size={16} />
                </div>
                <span className="text-white/70 group-hover:text-white transition-colors">{t.footerAddress}</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-white/5 rounded-lg text-primary-red">
                  <Phone size={16} />
                </div>
                <a href="tel:+355694054009" className="text-white/70 group-hover:text-white transition-colors">+355 69 405 4009</a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-white/5 rounded-lg text-primary-red">
                  <Mail size={16} />
                </div>
                <a href="mailto:qfp_donbosko@yahoo.it" className="text-white/70 group-hover:text-white transition-colors underline decoration-primary-red/30 underline-offset-4">qfp_donbosko@yahoo.it</a>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-primary-red">Programet</h4>
            <ul className="space-y-4 text-[13px] font-bold uppercase tracking-wider">
              {GET_NAV_STRUCTURE(t).slice(1, 5).map((navItem) => (
                <li key={navItem.label}>
                  <a href={navItem.href} className="text-white/50 hover:text-white flex items-center space-x-2 transition-all group">
                    <span className="w-1.5 h-1.5 bg-primary-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{navItem.label}</span> 
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-primary-red">Lidhje të Shpejta</h4>
            <ul className="space-y-4 text-[13px] font-bold uppercase tracking-wider">
              {GET_NAV_STRUCTURE(t).slice(5).map((navItem) => (
                <li key={navItem.label}>
                  <a href={navItem.href} className="text-white/50 hover:text-white flex items-center space-x-2 transition-all group">
                    <span className="w-1.5 h-1.5 bg-primary-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{navItem.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#0f172a] py-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
          <div className="text-center md:text-left">
            <p> {new Date().getFullYear()} Qendra Sociale Don Bosko Tiranë. Të gjitha të drejtat e rezervuara.</p>
            <p className="mt-2 text-primary-red/50">{t.vatNumber}</p>
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex flex-col">
                <span className="text-primary-red">REALIZUAR NGA ALESJO</span>
                <span className="text-primary-red">AGOLLI.</span>
              </div>
              <img 
                src="/signature.svg" 
                alt="Alesjo Agolli Signature" 
                className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity select-none pointer-events-none print:hidden"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div className="flex items-center space-x-8">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Politika e Privatësisë</a>
              <span className="w-1 h-1 bg-white/10 rounded-full"></span>
              <a href="/terms-of-use" className="hover:text-white transition-colors">Kushtet e Përdorimit</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
