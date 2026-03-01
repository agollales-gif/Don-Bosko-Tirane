import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Beaker, Zap, FlaskConical, ArrowLeft, CheckCircle2, ShieldAlert } from 'lucide-react';

const LaboratoriKimiseFizikes: React.FC = () => {
    const facilities = [
        "Sisteme të distilimit të ujit",
        "Sensore digjitalë për matjen e temperaturës, pH dhe presionit",
        "Pajisje për studimin e optikës dhe elektromagnetizmit",
        "Grup-reagentësh të certifikuar",
        "Balanca precize analitike"
    ];

    const experiments = [
        {
            title: "Termodinamika",
            desc: "Analiza e shkëmbimit të nxehtësisë dhe ligjet e ruajtjes së energjisë."
        },
        {
            title: "Kimi Inorganike",
            desc: "Reaksionet e acideve, bazave dhe kripërave përmes titrimit."
        },
        {
            title: "Elektriciteti",
            desc: "Ndërtimi i qarqeve elektrike dhe studimi i rezistencës."
        }
    ];

    return (
        <div className="min-h-screen bg-[#fafaf5]">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#0f172a]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/images/laboratoret/pamje_nga_laboratori_kimis.png"
                        alt="Physics & Chemistry Lab Hero"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 to-[#fafaf5]"></div>
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center space-x-4 mb-6">
                            <div className="w-12 h-[2px] bg-[#0f172a]"></div>
                            <Beaker className="text-[#0f172a] w-8 h-8" />
                            <div className="w-12 h-[2px] bg-[#0f172a]"></div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-[#0f172a] uppercase tracking-tight font-plus-jakarta leading-none mb-6">
                            Laboratori i <br /> Kimisë & Fizikës
                        </h1>
                        <p className="text-xl text-gray-700 font-serif italic max-w-2xl mx-auto">
                            "Zbuloni ligjet që qeverisin Universin."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Sidebar Information */}
                    <div className="lg:col-span-1 space-y-12">
                        <section className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100">
                            <h3 className="text-xl font-black text-[#1A1A1A] uppercase tracking-wider mb-8 flex items-center gap-3">
                                <FlaskConical className="text-[#0f172a] w-6 h-6" />
                                Aparaturat
                            </h3>
                            <ul className="space-y-6">
                                {facilities.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 group">
                                        <div className="mt-1 bg-[#0f172a]/10 p-1 rounded-full group-hover:bg-[#0f172a] transition-colors">
                                            <CheckCircle2 size={14} className="text-[#0f172a] group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-gray-600 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <div className="bg-[#9c252d] p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -ml-16 -mt-16"></div>
                            <h3 className="text-xl font-black uppercase tracking-wider mb-6 relative z-10 flex items-center gap-3">
                                <ShieldAlert size={20} />
                                Siguria
                            </h3>
                            <p className="text-white/80 leading-relaxed mb-8 relative z-10 italic">
                                Siguria e nxënësve është prioriteti ynë absolut. Laboratori është i pajisur me të gjitha mjetet mbrojtëse dhe protokolle strikte të operimit.
                            </p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="lg:col-span-2 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-12 md:p-16 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <Zap className="text-[#0f172a] w-10 h-10" />
                                <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight font-plus-jakarta">
                                    Fusha e Kërkimit
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {experiments.map((exp, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <h4 className="text-lg font-bold text-[#0f172a] uppercase">{exp.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{exp.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-12 border-t border-gray-100">
                                <p className="text-gray-500 leading-relaxed">
                                    Në laboratorin e Kimisë dhe Fizikës, nxënësit ftohen të bëhen protagonistë të zbulimit të tyre. Përmes matjeve precize dhe vëzhgimeve të hollësishme, ata kuptojnë natyrën e materies dhe forcave që e rrethojnë atë.
                                </p>
                            </div>
                        </motion.div>

                        {/* Photo Gallery */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
                        >
                            <h3 className="text-2xl md:text-3xl font-black text-[#1A1A1A] uppercase tracking-tight mb-8">
                                Galeria e Laboratorit
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                                    <img
                                        src="/assets/images/laboratoret/pamje_nga_laboratori_fizikes.png"
                                        alt="Laboratori i Fizikës"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                                    <img
                                        src="/assets/images/laboratoret/pamje_nga_laboratori_fizikes (2).png"
                                        alt="Laboratori i Fizikës 2"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                                    <img
                                        src="/assets/images/laboratoret/pamje_nga_laboratori_fizikes (3).png"
                                        alt="Laboratori i Fizikës 3"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                                    <img
                                        src="/assets/images/laboratoret/pamje_nga_laboratori_fizikes (4).png"
                                        alt="Laboratori i Fizikës 4"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                                    <img
                                        src="/assets/images/laboratoret/pamje_nga_laboratori_kimis.png"
                                        alt="Laboratori i Kimisë"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                                    <img
                                        src="/assets/images/laboratoret/pamje_nga_laboratori_kimis (2).png"
                                        alt="Laboratori i Kimisë 2"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex justify-between items-center">
                            <Link to="/shkolla/mjediset/laboratoret-shkencor" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#0f172a] transition-colors uppercase text-[10px] font-black tracking-widest">
                                <ArrowLeft size={14} />
                                <span>MBRAPA</span>
                            </Link>

                            <Link to="/shkolla/plani-akademik" className="inline-flex items-center gap-2 px-6 py-3 bg-[#9c252d] text-white hover:bg-[#0f172a] transition-colors uppercase text-[10px] font-black tracking-widest rounded-full">
                                <span>PLANI AKADEMIK</span>
                                <span className="ml-1">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaboratoriKimiseFizikes;
