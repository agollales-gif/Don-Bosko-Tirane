import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Quote, LucideIcon } from 'lucide-react';

interface NavLink {
    label: string;
    href: string;
    icon: LucideIcon;
}

interface ContentSection {
    title: string;
    titleHighlight: string;
    icon: React.ReactNode;
    paragraphs: string[];
    quote?: {
        text: string;
        author: string;
    };
}

interface AboutTemplateProps {
    badge: string;
    heroTitle: string;
    heroTitleItalic?: string;
    heroDescription: string;
    navLinks: NavLink[];
    sidebarTitle: string;
    sidebarQuote?: string;
    sidebarQuoteAuthor?: string;
    content: ContentSection;
    images?: {
        src: string;
        alt: string;
    }[];
}

const AboutTemplate: React.FC<AboutTemplateProps> = ({
    badge,
    heroTitle,
    heroTitleItalic,
    heroDescription,
    navLinks,
    sidebarTitle,
    sidebarQuote = "Edukimi është çështje e zemrës.",
    sidebarQuoteAuthor = "Shën Gjon Bosko",
    content,
    images = []
}) => {
    const location = useLocation();

    return (
        <div className="bg-[#fafaf5] min-h-screen">
            {/* Header Section - SAME AS SHKOLLA/ORATORI */}
            <section className="bg-[#fafaf5] py-16 md:py-32 px-4 md:px-6">
                <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-3 md:space-y-4"
                    >
                        <h3 className="text-primary-red text-[9px] md:text-xs font-black uppercase tracking-[0.3em]">{badge}</h3>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-gray-900 font-plus-jakarta px-4">
                            {heroTitle} {heroTitleItalic && <span className="text-primary-red">{heroTitleItalic}</span>}
                        </h2>
                        <div className="w-16 md:w-24 h-1 md:h-1.5 bg-primary-red mx-auto rounded-full"></div>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium max-w-3xl mx-auto px-4">
                            {heroDescription}
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 md:py-24 px-4 md:px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-8">
                        <div className="bg-white p-6 md:p-10 rounded-[32px] md:rounded-[40px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] lg:sticky lg:top-24 overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#9c252d]/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-[#9c252d]/10 transition-all duration-700"></div>

                            <h3 className="text-[#1A1A1A] font-black uppercase text-[9px] md:text-[10px] tracking-[0.4em] mb-6 md:mb-10 border-b border-gray-100 pb-4 md:pb-6">
                                {sidebarTitle}
                            </h3>

                            <nav className="space-y-3 md:space-y-4 relative z-10">
                                {navLinks.map((link) => {
                                    const isActive = location.pathname === link.href;
                                    const Icon = link.icon;

                                    return (
                                        <Link
                                            key={link.href}
                                            to={link.href}
                                            className={`flex items-center justify-between p-4 md:p-5 rounded-xl md:rounded-2xl border transition-all duration-500 group/nav ${isActive
                                                ? 'bg-[#9c252d] border-[#9c252d] text-white shadow-xl shadow-[#9c252d]/20'
                                                : 'bg-white border-gray-100 text-gray-500 hover:border-[#9c252d]/30 hover:bg-[#9c252d]/5 hover:text-[#9c252d]'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3 md:gap-4">
                                                <Icon size={16} className={`md:w-[18px] md:h-[18px] ${isActive ? 'text-white' : 'text-gray-400 group-hover/nav:text-[#9c252d] transition-colors'}`} />
                                                <span className="font-bold text-[10px] md:text-xs uppercase tracking-wider md:tracking-widest">{link.label}</span>
                                            </div>
                                            <ArrowRight size={12} className={`md:w-[14px] md:h-[14px] transform group-hover/nav:translate-x-1 transition-transform ${isActive ? 'text-white' : 'text-gray-300'}`} />
                                        </Link>
                                    );
                                })}
                            </nav>

                            <div className="mt-8 md:mt-12 pt-6 md:pt-10 border-t border-gray-50 relative z-10">
                                <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                                    "{sidebarQuote}"
                                </p>
                                <p className="text-[8px] md:text-[9px] font-black text-[#9c252d] uppercase tracking-widest mt-2">
                                    — {sidebarQuoteAuthor}
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="lg:col-span-8 space-y-8 md:space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 lg:p-20 rounded-[40px] md:rounded-[56px] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 md:h-2 bg-[#9c252d]/10"></div>

                            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-8 md:mb-12">
                                <div className="p-3 md:p-4 bg-[#9c252d]/5 rounded-xl md:rounded-2xl text-[#9c252d]">
                                    {content.icon}
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A1A1A] uppercase tracking-tighter font-plus-jakarta italic leading-none">
                                    {content.title} <br /> <span className="text-[#9c252d]">{content.titleHighlight}</span>
                                </h2>
                            </div>

                            <div className="prose prose-lg md:prose-xl text-gray-600 font-medium leading-[1.8] space-y-6 md:space-y-8">
                                {content.paragraphs.map((paragraph, index) => (
                                    <p key={index} className={index === 0 ? "first-letter:text-5xl md:first-letter:text-7xl first-letter:font-black first-letter:text-[#9c252d] first-letter:mr-2 md:first-letter:mr-3 first-letter:float-left first-letter:leading-none" : ""}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Quote Section */}
                            {content.quote && (
                                <div className="mt-12 md:mt-16 p-8 md:p-12 bg-[#0f172a] rounded-[32px] md:rounded-[40px] text-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 bg-white/5 -mr-16 md:-mr-24 -mt-16 md:-mt-24 rounded-full blur-[80px]"></div>
                                    <Quote className="text-[#9c252d] w-10 h-10 md:w-12 md:h-12 mb-6 md:mb-8 opacity-50" />
                                    <p className="text-xl md:text-2xl lg:text-3xl italic font-serif leading-relaxed mb-6 md:mb-8 relative z-10">
                                        "{content.quote.text}"
                                    </p>
                                    <div className="flex items-center gap-3 md:gap-4 relative z-10">
                                        <div className="w-8 md:w-10 h-[1px] bg-white/30"></div>
                                        <span className="text-[10px] md:text-xs uppercase font-black tracking-[0.3em] md:tracking-[0.4em] text-white/50">{content.quote.author}</span>
                                    </div>
                                </div>
                            )}
                        </motion.div>

                        {/* Image Grid */}
                        {images.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                {images.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="aspect-[4/3] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl relative group"
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent"></div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutTemplate;
