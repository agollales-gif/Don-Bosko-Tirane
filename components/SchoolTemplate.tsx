 import React from 'react';

import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';



interface Module {

    id: string;

    tag?: string;

    title: string;

    desc: string;

    tags?: string[];

    icon: React.ReactNode;

    color?: string;

}



interface ValueCard {

    id: string;

    title: string;

    desc: string;

    icon: React.ReactNode;

    link?: string;

}



interface SchoolTemplateProps {

    // Hero Section

    badge: string;

    title: string;

    titleHighlight: string;

    subtitle: string;

    description: string;

    heroImage: string;

    statNumber?: string;

    statLabel?: string;

   

    // Coordinator

    coordinatorName?: string;

    coordinatorTitle?: string;

    coordinatorImage?: string;

   

    // Quote Section

    quote: string;

    quoteAuthor: string;

   

    // Value Cards

    valueCards: ValueCard[];

   

    // Academic Modules

    modules: Module[];

   

    // CTA Section

    ctaTitle: string;

    ctaSubtitle: string;

    /** When set, "Plani Akademik" becomes a link to this path (no download icon). */

    ctaPlaniLink?: string;

   

    // Brochure Download

    brochurePath?: string;

   

    // Staff Link

    staffLink?: string;

   

    // Show Staff Section

    showStaff?: boolean;

    staffType?: 'fillore' | 'mesme' | 'profesionale' | '9vjecare';

}



const SchoolTemplate: React.FC<SchoolTemplateProps> = ({

    badge,

    title,

    titleHighlight,

    subtitle,

    description,

    heroImage,

    statNumber,

    statLabel,

    coordinatorName,

    coordinatorTitle,

    coordinatorImage,

    quote,

    quoteAuthor,

    valueCards,

    modules,

    ctaTitle,

    ctaSubtitle,

    ctaPlaniLink,

    brochurePath,

    staffLink,

    showStaff,

    staffType

}) => {

    return (

        <div className="min-h-screen bg-white selection:bg-primary-red/20">

            {/* Hero Section */}

            <section className="relative pt-8 sm:pt-12 md:pt-24 pb-16 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left: Content */}

                    <motion.div

                        initial={{ opacity: 0, x: -30 }}

                        animate={{ opacity: 1, x: 0 }}

                        transition={{ duration: 0.8 }}

                        className="space-y-6 sm:space-y-8"

                    >

                        <div className="space-y-3 sm:space-y-4">

                            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-primary-red block">{badge}</span>

                            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#0f172a] leading-[0.9] font-plus-jakarta">

                                {title} <br /> <span className="text-primary-red">{titleHighlight}</span>

                            </h1>

                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-600 italic">

                                "{subtitle}"

                            </p>

                        </div>



                        <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed max-w-xl">

                            {description}

                        </p>



                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                            <button

                                onClick={() => {

                                    if (brochurePath) {

                                        const link = document.createElement('a');

                                        link.href = brochurePath;

                                        link.download = brochurePath.split('/').pop();

                                        document.body.appendChild(link);

                                        link.click();

                                        document.body.removeChild(link);

                                    }

                                }}

                                className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#0f172a] text-[#0f172a] font-black uppercase tracking-widest rounded-full hover:bg-[#0f172a] hover:text-white transition-all duration-300 transform active:scale-95 text-xs"

                            >

                                Broshure <span className="text-lg">→</span>

                            </button>

                        </div>

                    </motion.div>



                    {/* Right: Media */}

                    <motion.div

                        initial={{ opacity: 0, scale: 0.9 }}

                        animate={{ opacity: 1, scale: 1 }}

                        transition={{ duration: 1 }}

                        className="relative mt-8 lg:mt-0"

                    >

                        <div className="absolute -inset-2 sm:-inset-4 bg-primary-red/5 rounded-[40px] sm:rounded-[60px] -rotate-2"></div>

                        <div className="relative aspect-[4/5] sm:aspect-[4/5] overflow-hidden rounded-tr-[60px] sm:rounded-tr-[120px] rounded-bl-[60px] sm:rounded-bl-[120px] rounded-tl-[20px] sm:rounded-tl-[40px] rounded-br-[20px] sm:rounded-br-[40px] shadow-3xl border-4 sm:border-8 border-white">

                            <img

                                src={heroImage}

                                alt={`${title} ${titleHighlight}`}

                                className="w-full h-full object-cover"

                            />

                            {statNumber && statLabel && (

                                <motion.div

                                    initial={{ opacity: 0, y: 20 }}

                                    animate={{ opacity: 1, y: 0 }}

                                    transition={{ delay: 0.8 }}

                                    className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 bg-white p-3 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 flex items-center gap-2 sm:gap-4 group hover:scale-105 transition-transform duration-500"

                                >

                                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary-red flex items-center justify-center text-white shrink-0">

                                        <span className="text-lg sm:text-2xl font-black italic">{statNumber}</span>

                                    </div>

                                    <div>

                                        <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400">Përvoja</p>

                                        <p className="text-xs sm:text-sm font-bold text-[#0f172a]">{statLabel}</p>

                                    </div>

                                </motion.div>

                            )}

                        </div>

                    </motion.div>

                </div>

            </section>



            {/* Coordinator Section */}

            {coordinatorName && (

                <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-white relative border-y border-gray-100">

                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">

                        <div className="flex items-center gap-4 sm:gap-6">

                            {coordinatorImage && (

                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-primary-red/10">

                                    <img src={coordinatorImage} alt={coordinatorName} className="w-full h-full object-cover" />

                                </div>

                            )}

                            <div className="space-y-1">

                                <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-primary-red block">

                                    {coordinatorTitle || "Koordinator/e"}

                                </span>

                                <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] uppercase tracking-tight">{coordinatorName}</h3>

                            </div>

                        </div>

                    </div>

                </section>

            )}



            {/* Value Proposition Section */}

            <section className="bg-[#0f172a] py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">

                <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary-red/10 rounded-full blur-[80px] sm:blur-[120px] -translate-y-1/2 translate-x-1/2"></div>



                <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 relative z-10">

                    <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">

                        <motion.div

                            initial={{ opacity: 0, y: 20 }}

                            whileInView={{ opacity: 1, y: 0 }}

                            viewport={{ once: true }}

                            className="space-y-3 sm:space-y-4"

                        >

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">

                                Pse të zgjidhni <span className="text-primary-red">Don Boskon?</span>

                            </h2>

                            <div className="w-16 sm:w-20 h-1 bg-primary-red mx-auto"></div>

                        </motion.div>



                        <motion.div

                            initial={{ opacity: 0, scale: 0.95 }}

                            whileInView={{ opacity: 1, scale: 1 }}

                            viewport={{ once: true }}

                            transition={{ delay: 0.3 }}

                            className="relative p-8 sm:p-12 bg-white/5 rounded-[30px] sm:rounded-[40px] border border-white/10"

                        >

                            <span className="text-white/10 text-6xl sm:text-9xl font-serif absolute top-4 left-4 sm:left-8 select-none">"</span>

                            <p className="text-white font-serif italic text-xl sm:text-2xl md:text-3xl leading-relaxed relative z-10">

                                {quote}

                            </p>

                            <p className="text-primary-red font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-xs mt-6 sm:mt-8">

                                — {quoteAuthor}

                            </p>

                        </motion.div>

                    </div>



                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

                        {valueCards.map((card) => {

                            const CardContent = (

                                <div className="space-y-4 sm:space-y-6 relative z-10 text-left">

                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary-red/10 text-primary-red flex items-center justify-center group-hover:bg-primary-red group-hover:text-white transition-all duration-500">

                                        {card.icon}

                                    </div>

                                    <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-[#0f172a] transition-colors">{card.title}</h3>

                                    <p className="text-white/40 group-hover:text-gray-500 transition-colors text-sm leading-relaxed">

                                        {card.desc}

                                    </p>

                                </div>

                            );



                            if (card.link) {

                                return (

                                    <Link

                                        to={card.link}

                                        key={card.id}

                                        className="p-6 sm:p-10 hover:bg-white transition-all duration-500 group relative block cursor-pointer rounded-2xl"

                                        onClick={() => {

                                            window.scrollTo({ top: 0, behavior: 'smooth' });

                                        }}

                                    >

                                        <span className="absolute top-6 right-6 sm:top-8 sm:right-10 text-4xl sm:text-6xl font-black text-white/5 group-hover:text-primary-red/5 transition-colors">{card.id}</span>

                                        {CardContent}

                                    </Link>

                                );

                            }



                            return (

                                <div key={card.id} className="p-6 sm:p-10 hover:bg-white transition-all duration-500 group relative rounded-2xl">

                                    <span className="absolute top-6 right-6 sm:top-8 sm:right-10 text-4xl sm:text-6xl font-black text-white/5 group-hover:text-primary-red/5 transition-colors">{card.id}</span>

                                    {CardContent}

                                </div>

                            );

                        })}

                    </div>

                </div>

            </section>



            {/* Academic Plan Section */}

            <section className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">

                <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">

                    <div className="text-center space-y-3 sm:space-y-4">

                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase text-[#0f172a]">PLANI <span className="text-primary-red font-script italic lowercase">akademik</span></h2>

                        <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">Modulet e zhvillimit</p>

                    </div>



                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

                        {modules.map((module) => (

                            <motion.div

                                key={module.id}

                                whileHover={{ y: -15 }}

                                className="p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 relative overflow-hidden group"

                            >

                                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary-red/[0.02] rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 group-hover:scale-150 transition-transform duration-700"></div>



                                <div className="space-y-4 sm:space-y-6 relative z-10">

                                    <div className="flex items-center justify-between">

                                        <span className="px-3 py-1 sm:px-4 sm:py-1.5 bg-[#0f172a] text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest rounded-full">MODULO {module.id}</span>

                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-red/5 flex items-center justify-center text-primary-red">

                                            {module.icon}

                                        </div>

                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a] uppercase tracking-tight">{module.title}</h3>

                                    <p className="text-gray-500 font-medium text-sm sm:text-base">{module.desc}</p>

                                    {module.tags && (

                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">

                                            {module.tags.map(tag => (

                                                <span key={tag} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-50 text-slate-500 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider rounded-lg border border-slate-100">

                                                    {tag}

                                                </span>

                                            ))}

                                        </div>

                                    )}

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>



            {/* CTA Section */}

            <section className="pb-20 sm:pb-32 px-4 sm:px-6">

                <div className="max-w-7xl mx-auto">

                    <div className="bg-[#9c252d] rounded-[30px] sm:rounded-[60px] p-8 sm:p-12 md:p-20 relative overflow-hidden shadow-3xl text-center">

                        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 translate-x-32"></div>



                        <div className="relative z-10 flex flex-col items-center justify-center gap-8 sm:gap-12">

                            <div className="space-y-4 sm:space-y-6 max-w-2xl text-center">

                                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">

                                    {ctaTitle}

                                </h2>

                                <p className="text-white/70 font-medium text-base sm:text-lg italic">

                                    {ctaSubtitle}

                                </p>

                            </div>



                            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none">

                                {ctaPlaniLink ? (

                                    <Link

                                        to={ctaPlaniLink}

                                        className="flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-[#0f172a] text-white font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-white hover:text-[#0f172a] transition-all transform hover:-translate-y-1 shadow-2xl"

                                    >

                                        Plani Akademik

                                    </Link>

                                ) : (

                                    <button className="flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-[#0f172a] text-white font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-white hover:text-[#0f172a] transition-all transform hover:-translate-y-1 shadow-2xl">

                                        Plani Akademik

                                    </button>

                                )}

                                <Link

                                    to="/contact"

                                    className="flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 border-2 border-white text-white font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-white hover:text-primary-red transition-all transform hover:-translate-y-1"

                                >

                                    KONTAKTI

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Staff Section */}
            
            {showStaff && (
                <section className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase text-[#0f172a]">
                                Stafi <span className="text-primary-red font-script italic lowercase">Akademik</span>
                            </h2>
                            <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">Ekipi ynë i përkushtuar</p>
                            <div className="w-16 sm:w-20 h-1 bg-primary-red mx-auto"></div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Një ekip i mësuesve dhe profesionistëve të kualifikuar, të përkushtuar ndaj arsimimit dhe zhvillimit të studentëve tanë.
                            </p>
                            
                            <Link
                                to="/shkolla/staff"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-primary-red text-white font-black uppercase text-xs tracking-widest rounded-full hover:bg-[#0f172a] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            >
                                Shiko Stafin e Plotë
                                <span className="text-lg">→</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            )}

        </div>

    );

};



export default SchoolTemplate;