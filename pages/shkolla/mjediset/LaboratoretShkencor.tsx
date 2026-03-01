import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Microscope, Beaker, ChevronLeft, TestTube, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const LaboratoretShkencor: React.FC = () => {
    const navigate = useNavigate();

    const drawVariants = (delay: number): Variants => ({
        hidden: { pathLength: 0, opacity: 0 },
        visible: { 
            pathLength: 1, 
            opacity: 1,
            transition: { delay, duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 0.8 }
        }
    });

    return (
        <div className="flex flex-col font-plus-jakarta">
            {/* --- HERO SECTION --- */}
            <section className="relative w-full min-h-[90svh] bg-[#BE1E2D] overflow-hidden flex flex-col lg:flex-row pt-28 lg:pt-0">
                <div className="flex-1 flex flex-col justify-center px-6 lg:px-20 container mx-auto relative z-10 lg:w-1/2">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <span className="inline-block py-2 px-5 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.2em]">
                            Infrastruktura Shkencore
                        </span>
                        
                        <h1 className="text-5xl lg:text-7xl font-black text-white leading-[0.95] mb-6 tracking-tighter">
                            LABORATORET <br /> 
                            <span className="text-4xl lg:text-6xl tracking-normal text-white">SHKENCOR</span>
                        </h1>
                        
                        <p className="text-lg lg:text-2xl text-white/90 font-medium mb-10">
                            Deshironi që femija juaj te behet ne shkenctar ne te ardhmen?
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/register')}
                            className="group flex items-center gap-3 bg-white text-[#BE1E2D] px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-slate-50 transition-all"
                        >
                            REGJISTROHE TANI
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.div>
                </div>

                {/* Svg Ilustrimi ne sfond */}
                <div className="relative w-full h-[30vh] lg:absolute lg:right-0 lg:w-1/2 lg:h-full flex items-center justify-center p-12 pointer-events-none opacity-20">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full max-h-[450px] text-white" xmlns="http://www.w3.org/2000/svg">
                        <motion.path d="M9.5 9.5C9.5 7.5 10.5 6.5 12 6.5S14.5 7.5 14.5 9.5S13.5 12.5 12 12.5S9.5 11.5 9.5 9.5" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(0)} initial="hidden" animate="visible" />
                        <motion.path d="M12 12.5V16M10 14h4" stroke="currentColor" strokeWidth="0.2" variants={drawVariants(0.4)} initial="hidden" animate="visible" />
                    </svg>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fafaf5] to-transparent z-20"></div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <div className="bg-[#fafaf5] py-16 px-6 md:px-12 lg:px-20">
                <div className="max-w-[1400px] mx-auto">
                    
                    {/* VERTICAL CARDS CONTAINER */}
                    <div className="flex flex-col gap-12 mb-20">
                        
                        {/* Lab 1: Kimi & Fizikë */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 group bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col"
                        >
                            <div className="p-8 lg:p-10 flex flex-col h-full">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-[#BE1E2D] flex items-center justify-center shadow-lg shadow-red-100">
                                        <Beaker size={28} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-[10px] font-bold text-[#BE1E2D] uppercase tracking-[0.2em] mb-1">Departamenti A</h3>
                                        <h4 className="text-2xl font-black text-slate-900 tracking-tight">Kimi & Fizikë</h4>
                                    </div>
                                </div>

                                <p className="text-slate-500 mb-8 leading-relaxed">
                                    Eksperimente precize dhe analiza materiale në një mjedis të kontrolluar me teknologjinë më të fundit.
                                </p>

                                <div className="space-y-4 mb-10 flex-grow">
                                    {["Mikroskopë dixhitalë 4K", "Sisteme matjeje laserike", "Sensorë dixhitalë precizë"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#BE1E2D]" />
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-md">
                                    <img
                                        src="/assets/images/laboratoret/pamje_nga_laboratori_kimis.png"
                                        alt="Laboratori i Kimisë"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Lab 2: Biologji */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex-1 group bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col"
                        >
                            <div className="p-8 lg:p-10 flex flex-col h-full">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg shadow-slate-200">
                                        <Microscope size={28} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Departamenti B</h3>
                                        <h4 className="text-2xl font-black text-slate-900 tracking-tight">Biologji</h4>
                                    </div>
                                </div>

                                <p className="text-slate-500 mb-8 leading-relaxed">
                                    Studimi i jetës dhe ekosistemeve përmes pajisjeve stereoskopike dhe kërkimit gjenetik.
                                </p>

                                <div className="space-y-4 mb-10 flex-grow">
                                    {["Kultura qelizore in-vitro", "Analiza të avancuara ADN", "Studim i ekosistemeve"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-md">
                                    <img
                                        src="/assets/images/laboratoret/pamje_nga_labortori_i_biologjise.png"
                                        alt="Laboratori i Biologjisë"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </motion.div>

                    </div>

                    {/* BOTTOM FEATURES */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: <Zap size={20} className="text-[#BE1E2D]" />, title: "Teknologji", desc: "Pajisje moderne 2024." },
                            { icon: <ShieldCheck size={20} className="text-[#BE1E2D]" />, title: "Siguri", desc: "Standarde ndërkombëtare." },
                            { icon: <TestTube size={20} className="text-[#BE1E2D]" />, title: "Praktikë", desc: "100% laboratorike." }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-6 bg-white/50 rounded-2xl border border-gray-100">
                                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 text-sm">{feature.title}</h5>
                                    <p className="text-slate-500 text-xs">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* BACK ACTION */}
                    <div className="mt-16 flex justify-start border-t border-gray-200 pt-8">
                        <button
                            onClick={() => navigate(-1)}
                            className="group flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-[#BE1E2D] transition-colors"
                        >
                            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            KTHEHU PAS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaboratoretShkencor;