import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Monitor, Cpu, ArrowLeft, CheckCircle2, Wifi } from 'lucide-react';

const SallaIT: React.FC = () => {
    const facilities = [
        "Kompjuterë modernë me specifikata të larta",
        "Lidhje internet me shpejtësi të lartë",
        "Software profesional për programim dhe dizajn",
        "Projektor dhe pajisje multimediale",
        "Sistem sigurie dhe backup i të dhënave"
    ];

    const activities = [
        {
            title: "Programim",
            desc: "Mësimi i gjuhëve të programimit si Python, Java, dhe C++."
        },
        {
            title: "Dizajn Grafik",
            desc: "Përdorimi i software-it profesional për dizajn dhe multimedia."
        },
        {
            title: "Kërkim në Internet",
            desc: "Aftësimi i nxënësve me kërkim efikas dhe sigurt online."
        }
    ];

    return (
        <div className="min-h-screen bg-[#fafaf5]">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#0f172a]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726a?auto=format&fit=crop&q=80"
                        alt="IT Lab Hero"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 to-[#fafaf5]"></div>
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center space-x-4 mb-6">
                            <div className="w-12 h-[2px] bg-[#9c252d]"></div>
                            <Monitor className="text-[#9c252d] w-8 h-8" />
                            <div className="w-12 h-[2px] bg-[#9c252d]"></div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight font-plus-jakarta leading-none mb-6">
                            Salla e <br /> Informatikës
                        </h1>
                        <p className="text-xl text-gray-300 font-serif italic max-w-2xl mx-auto">
                            "Teknologjia e sotme për suksesin e nesërme."
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
                                <Cpu className="text-[#9c252d] w-6 h-6" />
                                Pajisjet Kryesore
                            </h3>
                            <ul className="space-y-6">
                                {facilities.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 group">
                                        <div className="mt-1 bg-[#9c252d]/10 p-1 rounded-full group-hover:bg-[#9c252d] transition-colors">
                                            <CheckCircle2 size={14} className="text-[#9c252d] group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-gray-600 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <div className="bg-[#0f172a] p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#9c252d]/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <h3 className="text-xl font-black uppercase tracking-wider mb-6 relative z-10 flex items-center gap-3">
                                <Wifi size={20} />
                                Lidhja Digitale
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-8 relative z-10 italic">
                                Nxënësit tanë pajisen me aftësi digjitale dhe kompjuterike të domosdoshme për shekullin e 21-të.
                            </p>
                            <Link to="/contact" className="inline-flex items-center text-[#9c252d] font-bold uppercase text-[10px] tracking-widest group">
                                Vizitoni Shkollën
                                <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                            </Link>
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
                                <Monitor className="text-[#9c252d] w-10 h-10" />
                                <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight font-plus-jakarta">
                                    Programi Mësimor
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {activities.map((activity, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <h4 className="text-lg font-bold text-[#9c252d] uppercase">{activity.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{activity.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-12 border-t border-gray-100">
                                <p className="text-gray-500 leading-relaxed">
                                    Laboratori i informatikës është zemra e teknologjisë në shkollën tonë. Këtu nxënësit mësojnë të përdorin teknologjinë si mjet për kreativitet, kërkim dhe zgjidhje probleme.
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                                    <img
                                        src="/assets/images/laboratoret/pamje_nga_laboratori_IT.png"
                                        alt="Laboratori IT"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                                    <img
                                        src="/assets/images/laboratoret/pamje_nga_laboratori_IT (2).png"
                                        alt="Laboratori IT 2"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex justify-between items-center">
                            <Link to="/shkolla" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#9c252d] transition-colors uppercase text-[10px] font-black tracking-widest">
                                <ArrowLeft size={14} />
                                <span>Kthehu te Shkolla</span>
                            </Link>

                            <Link to="/shkolla/mjediset/science-labs" className="inline-flex items-center gap-2 text-[#0f172a] hover:text-[#9c252d] transition-colors uppercase text-[10px] font-black tracking-widest">
                                <span>Laboratoret Shkencor</span>
                                <span className="ml-1">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SallaIT;
