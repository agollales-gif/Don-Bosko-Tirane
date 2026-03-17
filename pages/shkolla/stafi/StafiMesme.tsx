import React from 'react';
import { motion } from 'framer-motion';

const StafiMesme: React.FC = () => {
    const drejtori = [
        {
            name: "Don Luigi Martucci",
            role: "Drejtori",
            image: "/stafi_mesem/Don_Luiggi_Martucci(Drejtori).jpeg",
            description: "Drejtori i shkollës"
        }
    ];

    const koordinatorSalezian = [
        {
            name: "Dritan Bushi",
            role: "Koordinator Salezian",
            image: "/stafi_mesem/Dritan_Bushi(Nen-Drejtor).png",
            description: "Koordinator Salezian i shkollës"
        }
    ];

    const koordinatorShkollor = [
        {
            name: "Indrit Qehajaj",
            role: "Koordinator Shkollor",
            image: "/stafi_mesem/Indrit_Qehajaj.png",
            description: "Koordinator Shkollor i shkollës"
        }
    ];

    const psikologet = [
        {
            name: "Deleda ",
            role: "Punonjese Sociale",
            image: "/stafi_9-vjecare/Deleda_Psikologe.png",
            description: "Punonjese Sociale e shkollës"
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
        }
    ];

    const mesueset = [

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
            image: "/stafi_mesem/Rregjina_Paluca.jpeg",
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

                <div className="space-y-20">
                    {/* Drejtori - Large Card */}
                    <div className="flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center space-y-8 max-w-md"
                        >
                            <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                                <div className="absolute inset-0 bg-primary-red/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                    <img
                                        src={drejtori[0].image}
                                        alt={drejtori[0].name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = `https://picsum.photos/seed/${drejtori[0].name}/200/200.jpg`;
                                        }}
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] uppercase tracking-tight">
                                    {drejtori[0].name}
                                </h3>
                                <p className="text-primary-red font-bold text-lg uppercase tracking-wider">
                                    {drejtori[0].role}
                                </p>
                                <p className="text-gray-600 text-base leading-relaxed max-w-sm mx-auto">
                                    {drejtori[0].description}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Koordinator Salezian */}
                    <div className="text-center space-y-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] uppercase tracking-tight">Koordinator Salezian</h3>
                        <div className="flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-center space-y-6 max-w-sm"
                            >
                                <div className="relative mx-auto w-40 h-40 sm:w-44 sm:h-44">
                                    <div className="absolute inset-0 bg-primary-red/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                        <img
                                            src={koordinatorSalezian[0].image}
                                            alt={koordinatorSalezian[0].name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = `https://picsum.photos/seed/${koordinatorSalezian[0].name}/200/200.jpg`;
                                            }}
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] uppercase tracking-tight">
                                        {koordinatorSalezian[0].name}
                                    </h3>
                                    <p className="text-primary-red font-bold text-sm uppercase tracking-wider">
                                        {koordinatorSalezian[0].role}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                                        {koordinatorSalezian[0].description}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Koordinator Shkollor */}
                    <div className="text-center space-y-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] uppercase tracking-tight">Koordinator Shkollor</h3>
                        <div className="flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-center space-y-6 max-w-sm"
                            >
                                <div className="relative mx-auto w-40 h-40 sm:w-44 sm:h-44">
                                    <div className="absolute inset-0 bg-primary-red/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                        <img
                                            src={koordinatorShkollor[0].image}
                                            alt={koordinatorShkollor[0].name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = `https://picsum.photos/seed/${koordinatorShkollor[0].name}/200/200.jpg`;
                                            }}
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] uppercase tracking-tight">
                                        {koordinatorShkollor[0].name}
                                    </h3>
                                    <p className="text-primary-red font-bold text-sm uppercase tracking-wider">
                                        {koordinatorShkollor[0].role}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                                        {koordinatorShkollor[0].description}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Psikologet */}
                    <div className="text-center space-y-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] uppercase tracking-tight">Psikologet</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                            {psikologet.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (index + 1) * 0.1 }}
                                    className="text-center space-y-6"
                                >
                                    <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36">
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
                                        <h3 className="text-lg sm:text-xl font-black text-[#0f172a] uppercase tracking-tight">
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

                    {/* Mësueset */}
                    <div className="text-center space-y-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] uppercase tracking-tight">Mësueset</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-12">
                            {mesueset.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (index + 4) * 0.05 }}
                                    className="text-center space-y-6"
                                >
                                    <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32">
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
                                        <h3 className="text-sm sm:text-base font-black text-[#0f172a] uppercase tracking-tight">
                                            {member.name}
                                        </h3>
                                        <p className="text-primary-red font-bold text-xs uppercase tracking-wider">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-600 text-xs leading-relaxed max-w-xs mx-auto">
                                            {member.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StafiMesme;
