import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StafiLendeveProfesionale: React.FC = () => {
    const staffMembers = 7;

    return (
        <div className="min-h-screen bg-[#fafaf5]">
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-purple-900 to-purple-700 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-8"
                    >
                        {/* Breadcrumb */}
                        <nav className="flex items-center justify-center gap-2 text-white/60 text-sm">
                            <Link to="/" className="hover:text-white transition-colors">Kryefaqja</Link>
                            <span>/</span>
                            <Link to="/shkolla" className="hover:text-white transition-colors">Shkolla</Link>
                            <span>/</span>
                            <Link to="/shkolla/stafi" className="hover:text-white transition-colors">Stafi</Link>
                            <span>/</span>
                            <span className="text-white">Lendeve Profesionale</span>
                        </nav>

                        {/* Title */}
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white font-plus-jakarta">
                                Stafi i <span className="text-yellow-300">Lendeve Profesionale</span>
                            </h1>
                            <div className="w-32 h-1 bg-yellow-300 mx-auto"></div>
                            <p className="text-xl md:text-2xl text-white/80 font-medium max-w-4xl mx-auto leading-relaxed">
                                Mësues dhe instruktorë me përvojë praktike në industrinë përkatëse
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 text-center"
                            >
                                <div className="text-4xl md:text-5xl font-black text-yellow-300 mb-2">
                                    {staffMembers}+
                                </div>
                                <p className="text-white font-semibold">Instruktorë Profesionalë</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 text-center"
                            >
                                <div className="text-4xl md:text-5xl font-black text-yellow-300 mb-2">
                                    85%
                                </div>
                                <p className="text-white font-semibold">Punësim Pas Diplomimit</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 text-center"
                            >
                                <div className="text-4xl md:text-5xl font-black text-yellow-300 mb-2">
                                    12+
                                </div>
                                <p className="text-white font-semibold">Fusha Profesionale</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            
            {/* Features Section */}
            <section className="py-20 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-6 mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] uppercase tracking-tighter">
                            Fushat <span className="text-purple-700">Profesionale</span>
                        </h2>
                        <div className="w-20 h-1 bg-purple-700 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Teknologji Informative",
                                description: "Programim, dizajn web, dhe zhvillim software",
                                icon: "💻"
                            },
                            {
                                title: "Elektronikë dhe Automatizim",
                                description: "Sisteme elektronike dhe kontrol automatik",
                                icon: "⚡"
                            },
                            {
                                title: "Mekanikë dhe Prodhim",
                                description: "Projektim dhe prodhim industrial",
                                icon: "🔧"
                            },
                            {
                                title: "Ekonomi dhe Biznes",
                                description: "Menaxhim dhe administrim biznesi",
                                icon: "📊"
                            },
                            {
                                title: "Turizë dhe Hoteleri",
                                description: "Menaxhim hotelerie dhe shërbime turistike",
                                icon: "🏨"
                            },
                            {
                                title: "Shëndetësi dhe Kujdes",
                                description: "Shërbime mjekësore dhe kujdes social",
                                icon: "🏥"
                            }
                        ].map((field, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {field.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-4">
                                    {field.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {field.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 md:px-12 bg-[#0f172a]">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-purple-700 rounded-[60px] p-12 md:p-20 relative overflow-hidden shadow-3xl text-center">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 translate-x-32"></div>

                        <div className="relative z-10 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                                Fillo Karrierën tënde Profesionale
                            </h2>
                            <p className="text-xl text-white/90 max-w-3xl mx-auto">
                                Fitoni aftësi praktike dhe përgatitje për tregun e punës
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                                <Link
                                    to="/admissions"
                                    className="px-10 py-4 bg-yellow-300 text-purple-900 font-black text-lg uppercase tracking-wider rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
                                >
                                    Apliko Tani
                                </Link>
                                <Link
                                    to="/contact"
                                    className="px-10 py-4 bg-transparent text-white border-2 border-white font-black text-lg uppercase tracking-wider rounded-full hover:bg-white hover:text-purple-900 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                >
                                    Më shumë Informacion
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StafiLendeveProfesionale;
