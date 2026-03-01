import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Aktiviteti: React.FC = () => {
    const [hoveredActivity, setHoveredActivity] = useState<number | null>(null);
    
    const activities = [
        {
            title: "Grupet e Formimit",
            image: "/aktivitetet_oratorit/grupet_formimit.jpg",
            description: "Këtu të rinjtë mblidhen sipas grupmoshave për të diskutuar mbi tema jetësore, vlerat njerëzore dhe rritjen shpirtërore. Është vendi ku krijohet karakteri dhe ndahen eksperiencat nën udhëheqjen e salezianëve ose animatorëve më të rritur.",
            color: "bg-primary-red",
            delay: 0
        },
        {
            title: "Lojërat Verore (Vera Bashkë)",
            image: "/aktivitetet_oratorit/lojerat_verore.jpeg",
            description: "Ky është kulmi i gjallërisë! Gjatë qershorit dhe korrikut, oratori kthehet në një festë gjigante me turne sportive, gara me skuadra (shpesh të ndara me ngjyra), këngë (bans), punë dore dhe ekskursione.",
            color: "bg-deep-forest-green",
            delay: 0.1
        },
        {
            title: "Oratori i Lirë",
            image: "/aktivitetet_oratorit/oratori_lire.jpg",
            description: "Kjo është hapësira e përditshme ku dyert janë të hapura për këdo. Të rinjtë vijnë thjesht për të luajtur një ndeshje futbolli, për të luajtur ping-pong, ose për të qëndruar me miqtë në një ambient të sigurt dhe edukativ, pa pasur nevojë për një axhendë strikte.",
            color: "bg-primary-red",
            delay: 0.2
        },
        {
            title: "Animacioni Kulturor dhe Sportiv",
            image: "/kisha/kisha1 (1).JPG",
            description: "Ky është elementi që i jep \"shpirt\" çdo feste. Përfshin: Grupet e Muzikës dhe Korin: Mësimi i instrumenteve si kitara apo pianoja. Teatrin: Përgatitja e skeçeve dhe shfaqjeve që prezantohen gjatë festave të Don Boskos. Kërcimin dhe Koreografitë: Që janë pjesë e pandarë e çdo aktiviteti të madh në orator. Sportet: Turne futbolli, basketboll, volejboll dhe ping-pong që organizohen rregullisht. Kurse të ndryshme.",
            color: "bg-deep-forest-green",
            delay: 0.3
        }
    ];

    return (
        <div className="min-h-screen bg-[#fafaf5] py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto space-y-20">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-6"
                >
                    <h1 className="text-5xl md:text-7xl font-black text-[#0f172a] uppercase tracking-tighter">
                        AKTIVITETET <br /> <span className="text-primary-red">ORATORIT</span>
                    </h1>
                    <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
                        Zbulo gamën e pasur aktivitetesh që ofron oratori ynë, nga formimi personal deri te festat dhe kreativiteti.
                    </p>
                </motion.div>

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center"
                >
                    <Link
                        to="/oratori/historia"
                        className="btn-outline !rounded-2xl"
                    >
                        ← Ktheu Mbrapa
                    </Link>
                </motion.div>

                {/* Activities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: activity.delay }}
                            className="group relative"
                            onMouseEnter={() => setHoveredActivity(index)}
                            onMouseLeave={() => setHoveredActivity(null)}
                        >
                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full cursor-pointer">
                                {/* Image Section */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={activity.image}
                                        alt={activity.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className={`absolute inset-0 ${activity.color} opacity-20`}></div>
                                    
                                    {/* Title Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                                            {activity.title}
                                        </h3>
                                    </div>
                                </div>
                                
                                {/* Hover Indicator */}
                                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ChevronDown className="w-5 h-5 text-gray-700" />
                                </div>
                            </div>
                            
                            {/* Dropdown Information */}
                            <AnimatePresence>
                                {hoveredActivity === index && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl p-6 z-10 border border-gray-100"
                                    >
                                        <div className="space-y-4">
                                            <div className="w-16 h-1 bg-slate-200"></div>
                                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                                {activity.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Aktiviteti;
