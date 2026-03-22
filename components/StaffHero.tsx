import React from 'react';
import { motion } from 'framer-motion';

const StaffHero: React.FC = () => {
    // Varianti i librit tashmë përfshin repeat Infinity
    const bookVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => ({ 
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { 
                    duration: 2, 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop" as const,
                    repeatDelay: 1 // Pushon 1 sekondë para se të rinisë vizatimi
                },
                opacity: { duration: 0.5 },
                delay: i * 0.2 // Delay i personalizuar për çdo rresht/path
            }
        })
    };

    return (
        <div className="relative bg-[#9c252d] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9c252d] to-[#7a1f25]"></div>
            
            <div className="relative px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="space-y-2">
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white font-plus-jakarta leading-none"
                            >
                                STAFI YNË
                            </motion.h1>
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 0.8, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white/90 font-plus-jakarta leading-none"
                            >
                                AKADEMIK
                            </motion.h1>
                        </div>
                    </div>
                    
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 0.4, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-md h-64 md:h-80"
                        >
                            <svg 
                                viewBox="0 0 200 160" 
                                className="w-full h-full"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Kontura e librit */}
                                <motion.path
                                    d="M20 30 L100 20 L180 30 L180 140 L100 150 L20 140 Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    fill="rgba(255,255,255,0.1)"
                                    variants={bookVariants}
                                    custom={0}
                                    initial="hidden"
                                    animate="visible"
                                />
                                {/* Vija e mesit */}
                                <motion.path
                                    d="M100 20 L100 150"
                                    stroke="white"
                                    strokeWidth="2"
                                    variants={bookVariants}
                                    custom={1}
                                    initial="hidden"
                                    animate="visible"
                                />
                                {/* Rreshtat e majtë */}
                                <motion.path
                                    d="M40 50 L90 45 M40 70 L90 65 M40 90 L90 85"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    variants={bookVariants}
                                    custom={2}
                                    initial="hidden"
                                    animate="visible"
                                />
                                {/* Rreshtat e djathtë */}
                                <motion.path
                                    d="M110 45 L160 50 M110 65 L160 70 M110 85 L160 90"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    variants={bookVariants}
                                    custom={3}
                                    initial="hidden"
                                    animate="visible"
                                />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffHero;