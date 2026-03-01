import React from 'react';
import { motion } from 'framer-motion';

const RektoretVite: React.FC = () => {
    const rectors = [
        { period: '2020 - Sot', name: 'Fr. Bashkim Dibra' },
        { period: '2014 - 2020', name: 'Fr. Matteo Colombo' },
        { period: '2008 - 2014', name: 'Fr. Mario Russo' },
        { period: '2002 - 2008', name: 'Fr. Giuseppe Gangi' },
    ];

    return (
        <div className="bg-slate-900 min-h-screen text-white">
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white font-plus-jakarta leading-none">
                        Rektorët <br /> <span className="text-primary-red">Ndër Vite</span>
                    </h1>
                    <div className="w-24 h-2 bg-primary-red rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {rectors.map((rec, idx) => (
                        <motion.div
                            key={rec.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 text-center space-y-4 group hover:bg-white/10 transition-all duration-500"
                        >
                            <span className="text-primary-red font-black uppercase tracking-widest text-[10px]">{rec.period}</span>
                            <h3 className="text-xl font-black uppercase leading-tight group-hover:scale-105 transition-transform">{rec.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default RektoretVite;
