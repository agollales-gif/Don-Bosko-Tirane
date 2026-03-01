import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const filloreStaff = [
    { name: "Aleksandra Carka", image: "/stafi_fillore/Aleksandra_Carka.png" },
    { name: "Anila Maloku", image: "/stafi_fillore/Anila_Maloku.png" },
    { name: "Arluen Bega", image: "/stafi_fillore/Arluen_Bega.png" },
    { name: "Brunilda Mata", image: "/stafi_fillore/Brunilda_Mata.png" },
    { name: "Eftimi Sylari", image: "/stafi_fillore/Eftimi_Sylari.png" },
    { name: "Elisabeta Xhanari", image: "/stafi_fillore/Elisabeta_Xhanari.png" },
    { name: "Elizabeta Methoxha", image: "/stafi_fillore/Elizabeta_Methoxha.png" },
    { name: "Flori Shtjefni", image: "/stafi_fillore/Flori_Shtjefni.png" },
    { name: "Florida Lleshaj", image: "/stafi_fillore/Florida_Lleshaj.png" },
    { name: "Gresa Pelinku", image: "/stafi_fillore/Gresa_Pelinku.png" },
    { name: "Joana Kici", image: "/stafi_fillore/Joana_Kici.png" },
    { name: "Klodiana Shehu", image: "/stafi_fillore/Klodiana_Shehu.png" },
    { name: "Lefterie Xhelollari", image: "/stafi_fillore/Lefterie_Xhelollari.png" },
    { name: "Lirika Toska", image: "/stafi_fillore/Lirika_Toska.png" },
    { name: "Liza Gegaj", image: "/stafi_fillore/Liza_Gegaj.png" },
    { name: "Margarita Preka", image: "/stafi_fillore/MArgarita_Preka.png" },
    { name: "Majlinda Tartari", image: "/stafi_fillore/Majlinda_Tartari.png" },
    { name: "Megi Sinani", image: "/stafi_fillore/Megi_Sinani.png" },
    { name: "Mimoza Molishti", image: "/stafi_fillore/Mimoza_Molishti.png" },
    { name: "Sixhej Cukaj", image: "/stafi_fillore/Sixhej_Cukaj.png" },
    { name: "Suada Heta", image: "/stafi_fillore/Suada_Heta.png" },
    { name: "Viola Mendoja", image: "/stafi_fillore/Viola_Mendoja.png" },
];

const v9vjecareStaff = [
    { name: "Msc. Maria Gjoni", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80", role: "Koordinatore" },
];

const gjimnazStaff = [
    { name: "Dr. Pashk Radoja", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80", role: "Koordinator Gjimnazi" },
    { name: "Ing. Arben Meta", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80", role: "Koordinator Profesional TIK" },
];

const departments = [
    { id: 'fillore', name: 'Fillore', staff: filloreStaff },
    { id: '9vjecare', name: '9-Vjeçare', staff: v9vjecareStaff },
    { id: 'gjimnaz', name: 'Gjimnaz', staff: gjimnazStaff },
];

const Staff: React.FC = () => {
    const [activeTab, setActiveTab] = useState('fillore');

    const activeDept = departments.find(d => d.id === activeTab) || departments[0];

    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta">
                        Stafi <span className="text-primary-red">Akademik</span>
                    </h1>
                    <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs">Mësuesit dhe Edukatorët tanë</p>
                </motion.div>

                {/* Tab Switcher */}
                <div className="flex flex-wrap justify-center gap-4 border-b border-slate-100 pb-8">
                    {departments.map((dept) => (
                        <button
                            key={dept.id}
                            onClick={() => setActiveTab(dept.id)}
                            className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeTab === dept.id
                                    ? 'bg-primary-red text-white shadow-lg shadow-primary-red/20'
                                    : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                                }`}
                        >
                            {dept.name}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 pt-8"
                    >
                        {activeDept.staff.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500"
                            >
                                {/* Circular Image with Red Border */}
                                <div className="relative mb-8">
                                    <div className="w-40 h-40 rounded-full border-[3px] border-primary-red p-1 relative">
                                        <div className="w-full h-full rounded-full overflow-hidden shadow-inner bg-slate-50">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        {/* Small Red Dot */}
                                        <div className="absolute bottom-2 right-2 w-3 h-3 bg-primary-red rounded-full border-2 border-white shadow-sm" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-[10px] font-black text-primary-red uppercase tracking-[0.2em]">
                                        Shkolla {activeDept.name}
                                    </p>

                                    <h3 className="text-2xl font-black text-[#1A233A] tracking-tight leading-tight">
                                        {member.name}
                                    </h3>

                                    <p className="text-slate-500 font-serif italic text-sm">
                                        {(member as any).role || "Mësimdhënës"}
                                    </p>

                                    <p className="text-slate-400 text-xs leading-relaxed italic border-t border-slate-50 pt-4">
                                        "Pjesë e stafit pedagogjik të shkollës sonë."
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </section>
        </div>
    );
};

export default Staff;
