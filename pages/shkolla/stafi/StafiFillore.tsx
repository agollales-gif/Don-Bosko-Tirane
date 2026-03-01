import React from 'react';
import { motion } from 'framer-motion';

const StafiFillore: React.FC = () => {
    const staffMembers = [
        {
            name: "Margarita Hoxha",
            role: "Mësuese Klasa 1",
            image: "/stafi/fillore/margarita-hoxha.jpg",
            description: "Specialiste në pedagogji fillore me 15 vite eksperiencë"
        },
        {
            name: "Arben Krasniqi",
            role: "Mësues Matematikë",
            image: "/stafi/fillore/arben-krasniqi.jpg",
            description: "Ekspert në metodologji të matematikës për fëmijë"
        },
        {
            name: "Elena Marku",
            role: "Mësuese Shqip",
            image: "/stafi/fillore/elena-marku.jpg",
            description: "Pasionante për letërsinë dhe gjuhën shqipe"
        },
        {
            name: "Robert Gjoka",
            role: "Mësues Anglisht",
            image: "/stafi/fillore/robert-gjoka.jpg",
            description: "Certifikuar ndërkombëtarisht për mësimin e anglishtes"
        },
        {
            name: "Ana Leka",
            role: "Mësuese Edukim Artistik",
            image: "/stafi/fillore/ana-leka.jpg",
            description: "Artistike dhe kreative me fokus në zhvillimin e talentit"
        },
        {
            name: "Mark Nika",
            role: "Mësues Edukim Fizik",
            image: "/stafi/fillore/mark-nika.jpg",
            description: "Trajner i certifikuar me eksperiencë në sporte të ndryshme"
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-6 mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase text-[#0f172a]">
                        STAFI <span className="text-primary-red font-script italic lowercase">fillore</span>
                    </h2>
                    <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">Ekipi ynë i përkushtuar</p>
                    <div className="w-16 sm:w-20 h-1 bg-primary-red mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                    {staffMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group text-center space-y-6"
                        >
                            <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                                <div className="absolute inset-0 bg-primary-red/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = `https://picsum.photos/seed/${member.name}/200/200.jpg`;
                                        }}
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] uppercase tracking-tight">
                                    {member.name}
                                </h3>
                                <p className="text-primary-red font-bold text-sm uppercase tracking-wider">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                                    {member.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StafiFillore;
