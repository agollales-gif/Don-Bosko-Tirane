import React from 'react';
import { motion } from 'framer-motion';

const StafiProfesionale: React.FC = () => {
    const staffMembers = [
        {
            name: "Ing. Arben Meta",
            role: "Koordinator TIK",
            image: "/stafi/profesionale/arben-meta.jpg",
            description: "Ekspert në rrjetat kompjuterike dhe sigurinë kibernetike"
        },
        {
            name: "Msc. Klajdi Prifti",
            role: "Mësues Cisco Networking",
            image: "/stafi/profesionale/klajdi-prifti.jpg",
            description: "Instruktor i certifikuar Cisco CCNA dhe CCNP"
        },
        {
            name: "Ing. Ermal Deda",
            role: "Mësues Cyber Security",
            image: "/stafi/profesionale/ermal-deda.jpg",
            description: "Specialist në sigurinë e rrjeteve dhe etikën haker"
        },
        {
            name: "Msc. Jonida Gjoni",
            role: "Mësuese Software Development",
            image: "/stafi/profesionale/jonida-gjoni.jpg",
            description: "Eksperte në zhvillimin web dhe mobile applications"
        },
        {
            name: "Ing. Denis Hoxha",
            role: "Mësues Hardware & IoT",
            image: "/stafi/profesionale/denis-hoxha.jpg",
            description: "Specialist në sisteme të ngulitura dhe Internet of Things"
        },
        {
            name: "Msc. Anila Kola",
            role: "Mësuese Database",
            image: "/stafi/profesionale/anila-kola.jpg",
            description: "Eksperte në menaxhimin e bazave të të dhënave dhe Big Data"
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
