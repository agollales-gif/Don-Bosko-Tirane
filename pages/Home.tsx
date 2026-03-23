import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import RegistrationPopup from '../components/RegistrationPopup';
import { useRegistrationPopup } from '../hooks/useRegistrationPopup';

const Home: React.FC = () => {
    const { showPopup, closePopup } = useRegistrationPopup();
    
    console.log('Home component: showPopup =', showPopup);
    
    return (
        <>
            <Hero />
            {/* Registration Popup */}
            {showPopup && <RegistrationPopup onClose={closePopup} />}
            {/* About Shortcut / CTA Section */}
            <section id="about" className="py-32 md:py-48 px-6 bg-white relative">
                {/* Subtle Decorative Gradient */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-red/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-[1500px] mx-auto relative z-10 px-4 md:px-12">
                    {/* Shortcut Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 -mt-32 lg:-mt-64 mb-40 relative z-20">
                        {[
                            { title: "Shkolla", image: "/shkolla_shortcut.jpg", link: "/shkolla" },
                            { title: "Oratori", image: "/oratori_shortcut.png", link: "/oratori" },
                            { title: "Famullia", image: "/kisha_shortcut.png", link: "/famullia" },
                            { title: "Qendra Ditore", image: "/qendra_ditore_shortcut.png", link: "/qendra-ditore" },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group cursor-pointer"
                            >
                                <Link to={item.link} className="relative block">
                                    <div className="absolute -inset-4 bg-primary-red/5 rounded-[56px] -rotate-1 group-hover:rotate-0 transition-transform duration-700"></div>
                                    <div className="relative overflow-hidden rounded-[48px] shadow-3xl aspect-[16/9] z-10">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            width={800}
                                            height={450}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        {/* Premium Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Card Content */}
                                        <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                                            <div className="space-y-2">
                                                <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tight font-plus-jakarta">
                                                    {item.title}
                                                </h2>
                                                <div className="w-12 h-1 bg-primary-red group-hover:w-24 transition-all duration-500 rounded-full"></div>
                                            </div>
                                            <span className="text-white/70 text-sm font-bold uppercase tracking-widest hidden sm:block group-hover:text-white transition-colors">
                                                Zbulo më shumë →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-gray-900 font-plus-jakarta italic">
                                Pse të zgjidhni <span className="text-primary-red">Don Boskon?</span>
                            </h2>
                            <div className="w-24 h-1.5 bg-primary-red mx-auto rounded-full"></div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 leading-[1.8] font-medium max-w-3xl mx-auto"
                        >
                            Ne ofrojmë një mjedis edukativ gjithëpërfshirës ku vlerat njerëzore dhe ekselenca akademike ecin krah për krah.
                            Për më shumë se dy dekada, Qendra Sociale Don Bosko ka qenë një pikë referimi për rininë e Tiranës.
                        </motion.p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.location.href = '/shkolla'}
                                className="px-8 py-4 bg-primary-red text-white font-bold uppercase text-sm tracking-widest rounded-full shadow-xl hover:shadow-2xl hover:bg-red-700 transition-all duration-300"
                            >
                                Shiko Programet
                            </motion.button>
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.location.href = '/contact'}
                                className="px-8 py-4 bg-transparent border-2 border-primary-red text-primary-red font-bold uppercase text-sm tracking-widest rounded-full hover:bg-primary-red hover:text-white transition-all duration-300"
                            >
                                KONTAKTI
                            </motion.button>
                        </div>

                        </div>

                </div>
            </section>

        </>
    );
};

export default Home;

