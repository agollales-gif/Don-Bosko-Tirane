import React from 'react';
import { motion } from 'framer-motion';

const ZeriShenjterores: React.FC = () => {
    const publications = [
        { title: 'Mesazhi i Shpresës', month: 'Maj 2026', image: 'https://images.unsplash.com/photo-1518101648461-71ff03704285?auto=format&fit=crop&q=80' },
        { title: 'Bashkësia në Lutje', month: 'Prill 2026', image: 'https://images.unsplash.com/photo-1548625361-195fd01a2663?auto=format&fit=crop&q=80' },
        { title: 'Maria Ndihmëtare', month: 'Mars 2026', image: 'https://images.unsplash.com/photo-1518101648461-71ff03704285?auto=format&fit=crop&q=80' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta">
                        Zëri i <span className="text-primary-red">Famullisë</span>
                    </h1>
                    <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs">Buletini ynë periodik</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {publications.map((pub, idx) => (
                        <motion.div
                            key={pub.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group cursor-pointer space-y-6"
                        >
                            <div className="aspect-[3/4] rounded-[48px] overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 relative">
                                <img src={pub.image} alt={pub.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                                    <p className="text-white font-black uppercase tracking-widest text-[10px]">{pub.month}</p>
                                </div>
                            </div>
                            <h3 className="text-xl font-black uppercase text-gray-900 group-hover:text-primary-red transition-colors text-center">{pub.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ZeriShenjterores;
