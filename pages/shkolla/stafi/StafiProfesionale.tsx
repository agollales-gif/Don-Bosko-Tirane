import React from 'react';
import { motion } from 'framer-motion';

const StafiProfesionale: React.FC = () => {
    const staffMembers = [
        {
            name: "Don Luiggi Martucci",
            role: "Drejtori",
            image: "/stafi_profesionale/Don_Luiggi_Martucci(Drejtori).jpeg",
            description: "Drejtori i shkollës"
        },
        {
            name: "Dritan Bushi",
            role: "Nën-Drejtor",
            image: "/stafi_profesionale/Dritan_Bushi(Nen-Drejtor).png",
            description: "Nën-drejtor i shkollës"
        },
        {
            name: "Deleda Psikologe",
            role: "Psikologe",
            image: "/stafi_9-vjecare/Deleda_Psikologe.png",
            description: "Psikologe e shkollës"
        },
        {
            name: "Rosela Psikologe",
            role: "Psikologe",
            image: "/stafi_9-vjecare/Rosela_psikologe.png",
            description: "Psikologe e shkollës"
        },
        {
            name: "Kristian Psikolog",
            role: "Psikolog",
            image: "/stafi_9-vjecare/Kristian-psikolog.png",
            description: "Psikolog i shkollës"
        },
        {
            name: "Daniela Bali",
            role: "Mësuese Profesionale",
            image: "/stafi_profesionale/Daniela_Bali.png",
            description: "Eksperte në fushën e saj profesionale"
        },
        {
            name: "Fatos Gjoka",
            role: "Mësues Profesional",
            image: "/stafi_profesionale/Fatos_Gjoka.png",
            description: "Specialist në lëndën e tij"
        },
        {
            name: "Julian Priska",
            role: "Mësues Profesional",
            image: "/stafi_profesionale/Julian_Priska.jpg",
            description: "Specialist në fushën e tij"
        },
        {
            name: "Kristi Lamaj",
            role: "Mësues Profesional",
            image: "/stafi_profesionale/Kristi_Lamaj.jpg",
            description: "Ekspert në specializimin e tij"
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
                        STAFI <span className="text-primary-red font-script italic lowercase">profesional</span>
                    </h2>
                    <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">Ekipi ynë teknologjik</p>
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

export default StafiProfesionale;
