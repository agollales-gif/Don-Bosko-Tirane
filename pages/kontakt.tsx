import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Globe, MessageCircle, Users, Building } from 'lucide-react';

// --- HERO COMPONENT ---
const ContactHero: React.FC = () => {
  const pageVariants = (delay: number): Variants => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        delay, 
        duration: 2.5, 
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.5
      }
    }
  });

  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[80vh] flex items-center bg-primary-red overflow-hidden pt-20">
      {/* Silueta e Telefonit (Djathtas) */}
      <div className="absolute inset-0 lg:left-1/2 lg:w-1/2 h-full flex items-center justify-center p-8 lg:p-24 pointer-events-none z-0">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full max-h-[40vh] lg:max-h-full text-white opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="0.3" variants={pageVariants(0)} initial="hidden" animate="visible" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-3xl text-left space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] font-plus-jakarta tracking-tight mb-6">
              KONTAKTONI <br /> 
              ME NE
            </h1>
            
            <p className="text-lg md:text-xl text-white/95 max-w-xl font-normal leading-relaxed">
              Jemi këtu për t'ju ndihmuar. Kontaktoni ne për informata rreth regjistrimeve, programeve dhe aktiviteteve tona.
            </p>
          </motion.div>
        </div>
      </div>

      {/* BLUR EFFECT I SUBTIL NË FUND */}
      <div className="absolute bottom-0 left-0 w-full h-24 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf5] to-transparent"></div>
        <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
      </div>
    </section>
  );
};

const DitetTona: React.FC = () => {
    const [formData, setFormData] = useState({
        emri: '',
        email: '',
        telefoni: '',
        mesazhi: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Format message for WhatsApp
        const message = `📨 Mesazh i ri nga forma e kontaktit:\n\n` +
            `👤 Emri: ${formData.emri}\n` +
            `📧 Email: ${formData.email}\n` +
            `📱 Telefoni: ${formData.telefoni}\n` +
            `💬 Mesazhi: ${formData.mesazhi}`;

        // Target phone number (replace with actual number)
        const targetPhone = '+355694054009'; // The number from contact info
        
        // Send via WhatsApp
        const whatsappUrl = `https://wa.me/${targetPhone.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        // Reset form after 2 seconds
        setTimeout(() => {
            setFormData({
                emri: '',
                email: '',
                telefoni: '',
                mesazhi: ''
            });
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <div className="flex flex-col bg-[#fafaf5]">
            <ContactHero />

            {/* Content Section: Split Info & Form */}
            <section className="px-6 md:px-12 lg:px-24 pb-24 relative z-10">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side: Contact Info & Hours */}
                    <div className="space-y-12">
                        <div className="space-y-8">
                            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#0f172a] border-l-4 border-[#9c252d] pl-4">
                                Informacioni i Kontaktit
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#9c252d] group-hover:text-white transition-all duration-300">
                                        <MapPin className="w-5 h-5 text-[#9c252d] group-hover:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Adresa</p>
                                        <p className="text-lg font-bold text-[#0f172a]">Rruga Don Bosko, Tiranë, Shqipëri</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#9c252d] group-hover:text-white transition-all duration-300">
                                        <Phone className="w-5 h-5 text-[#9c252d] group-hover:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Telefoni</p>
                                        <p className="text-lg font-bold text-[#0f172a]">+355 (0) 69 405 4009</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#9c252d] group-hover:text-white transition-all duration-300">
                                        <Mail className="w-5 h-5 text-[#9c252d] group-hover:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                                        <p className="text-lg font-bold text-[#0f172a]">qfp_donbosko@yahoo.it</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#0f172a] border-l-4 border-[#9c252d] pl-4">
                                Orari i Shërbimit
                            </h2>
                            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                                    <span className="font-bold text-[#0f172a]">E Hënë – E Premte</span>
                                    <span className="text-[#9c252d] font-black tracking-wider">8:00 – 16:00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-gray-400 uppercase text-xs tracking-widest">E Shtunë</span>
                                    <span className="text-gray-300 font-bold line-through">Mbyllur</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-gray-400 uppercase text-xs tracking-widest">E Diel</span>
                                    <span className="text-gray-300 font-bold line-through">Mbyllur</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div
                        className="bg-white p-10 md:p-12 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100 relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#9c252d]/[0.02] rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

                        <div className="relative z-10 space-y-10">
                            <div className="space-y-2">
                                <h3 className="text-3xl font-black uppercase text-[#0f172a] tracking-tight">Dërgo Mesazh</h3>
                                <p className="text-gray-400 text-sm font-medium tracking-wide">Plotësoni të dhënat dhe do t'ju kontaktojmë së shpejti.</p>
                            </div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0f172a] ml-1">Emri</label>
                                        <input
                                            type="text"
                                            name="emri"
                                            value={formData.emri}
                                            onChange={handleInputChange}
                                            placeholder="Emri juaj"
                                            className="w-full bg-[#fafafb] border-2 border-gray-100/50 rounded-xl px-5 py-4 text-sm focus:border-[#9c252d] focus:ring-0 transition-all outline-none placeholder:text-gray-300 font-medium"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0f172a] ml-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="email@example.com"
                                            className="w-full bg-[#fafafb] border-2 border-gray-100/50 rounded-xl px-5 py-4 text-sm focus:border-[#9c252d] focus:ring-0 transition-all outline-none placeholder:text-gray-300 font-medium"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0f172a] ml-1">Telefoni</label>
                                    <input
                                        type="tel"
                                        name="telefoni"
                                        value={formData.telefoni}
                                        onChange={handleInputChange}
                                        placeholder="+355 XX XXX XXX"
                                        className="w-full bg-[#fafafb] border-2 border-gray-100/50 rounded-xl px-5 py-4 text-sm focus:border-[#9c252d] focus:ring-0 transition-all outline-none placeholder:text-gray-300 font-medium"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0f172a] ml-1">Mesazhi</label>
                                    <textarea
                                        name="mesazhi"
                                        value={formData.mesazhi}
                                        onChange={handleInputChange}
                                        rows={4}
                                        placeholder="Si mund t'ju ndihmojmë?"
                                        className="w-full bg-[#fafafb] border-2 border-gray-100/50 rounded-xl px-5 py-4 text-sm focus:border-[#9c252d] focus:ring-0 transition-all outline-none placeholder:text-gray-300 font-medium resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#9c252d] text-white py-5 rounded-xl font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#0f172a] transition-all duration-300 shadow-xl shadow-[#9c252d]/20 group/submit disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'DËRGIM...' : 'DËRGO'}
                                    <Send className="w-4 h-4 transform group-hover/submit:translate-x-1 group-hover/submit:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="px-6 md:px-12 lg:px-24 pb-24">
                <div className="max-w-[1400px] mx-auto space-y-10">
                    <div className="flex items-center gap-6">
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0f172a]">
                            VENDNDODHJA
                        </h2>
                        <div className="h-px flex-1 bg-gray-200"></div>
                        <div className="w-12 h-12 rounded-full bg-[#9c252d]/5 flex items-center justify-center">
                            <Globe className="w-5 h-5 text-[#9c252d]" />
                        </div>
                    </div>

                    <div className="w-full h-[500px] rounded-[48px] overflow-hidden shadow-2xl border-8 border-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.539366624958!2d19.8037!3d41.3322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13503106720f75b7%3A0xe5a3c0e5b720f75b!2sDon%20Bosko%2C%20Tirana%2C%20Albania!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DitetTona;
