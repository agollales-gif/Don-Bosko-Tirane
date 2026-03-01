import React from 'react';
import { motion } from 'framer-motion';

const StafiMesme: React.FC = () => {
    const staffMembers = [
        {
            name: "Don Luiggi Martucci",
            role: "Drejtori",
            image: "/stafi_mesem/Don_Luiggi_Martucci(Drejtori).jpeg",
            description: "Drejtori i shkollës"
        },
        {
            name: "Dritan Bushi",
            role: "Nën-Drejtor",
            image: "/stafi_mesem/Dritan_Bushi(Nen-Drejtor).png",
            description: "Nën-drejtor i shkollës"
        },
        {
            name: "Ing. Arben Meta",
            role: "Koordinator",
            image: "/stafi_mesem/Indrit_Qehajaj.png",
            description: "Koordinator i shkollës"
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
            name: "Adela Xhanari",
            role: "Mësuese",
            image: "/stafi_mesem/Adela_Xhanari.webp",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Aida Alimena",
            role: "Mësuese",
            image: "/stafi_mesem/Aida_Alimena.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Alma Balashi",
            role: "Mësuese",
            image: "/stafi_mesem/Alma_BALASHI.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Argent Karaj",
            role: "Mësues",
            image: "/stafi_mesem/Argent_Karaj.jpg",
            description: "Mësues i kualifikuar"
        },
        {
            name: "Diana Luli",
            role: "Mësuese",
            image: "/stafi_mesem/Diana_Luli.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Edison Macaj",
            role: "Mësues",
            image: "/stafi_mesem/Edison_Macaj.png",
            description: "Mësues i kualifikuar"
        },
        {
            name: "Edlira Cobani",
            role: "Mësuese",
            image: "/stafi_mesem/Edlira_Cobani.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Elona Kalesha",
            role: "Mësuese",
            image: "/stafi_mesem/Elona_Kalesha.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Eri Zagani",
            role: "Mësues",
            image: "/stafi_mesem/Eri_Zagani.png",
            description: "Mësues i kualifikuar"
        },
        {
            name: "Ermelinda Skenderaj",
            role: "Mësuese",
            image: "/stafi_mesem/Ermelinda_Skenderaj.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Evis Myftaraj",
            role: "Mësues",
            image: "/stafi_mesem/Evis_Myftaraj.webp",
            description: "Mësues i kualifikuar"
        },
        {
            name: "Ini Hoxha",
            role: "Mësuese",
            image: "/stafi_mesem/Ini_Hoxha.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Jesmina Meti",
            role: "Mësuese",
            image: "/stafi_mesem/Jesmina_Meti.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Jorgjie Dodani",
            role: "Mësuese",
            image: "/stafi_mesem/Jorgjie_Dodani.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Kristjana Hajdaraj",
            role: "Mësuese",
            image: "/stafi_mesem/Kristjana_Hajdaraj.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Neritana Kraja",
            role: "Mësuese",
            image: "/stafi_mesem/Neritana_Kraja.jpeg",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Reonard Shimi",
            role: "Mësues",
            image: "/stafi_mesem/Reonard_Shimi.png",
            description: "Mësues i kualifikuar"
        },
        {
            name: "Rigels Cullhaj",
            role: "Mësues",
            image: "/stafi_mesem/Rigels_Cullhaj.png",
            description: "Mësues i kualifikuar"
        },
        {
            name: "Rregjina Paluca",
            role: "Mësuese",
            image: "/stafi_mesem/Rregjina_Paluca.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Rozeta Kallembi",
            role: "Mësuese",
            image: "/stafi_mesem/Rozeta_Kallembi.jpeg",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Sixhej Cukaj",
            role: "Mësues",
            image: "/stafi_mesem/Sixhej_Cukaj.png",
            description: "Mësues i kualifikuar"
        },
        {
            name: "Viola Mendoja",
            role: "Mësuese",
            image: "/stafi_mesem/Viola_Mendoja.png",
            description: "Mësuese e kualifikuar"
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
                        STAFI <span className="text-primary-red font-script italic lowercase">mesme</span>
                    </h2>
                    <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">Ekipi ynë akademik</p>
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

export default StafiMesme;
