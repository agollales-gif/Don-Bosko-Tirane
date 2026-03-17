import React from 'react';
import { motion } from 'framer-motion';

const Stafi9Vjecare: React.FC = () => {
    const drejtori = [
        {
            name: "Don Luiggi Martucci",
            role: "Drejtori",
            image: "/stafi_9-vjecare/Don_Luiggi_Martucci(Drejtori).jpeg",
            description: "Drejtori i shkollës"
        }
    ];

    const koordinatorSalezian = [
        {
            name: "Klevis Marku",
            role: "Koordinator Salezian",
            image: "/stafi_9-vjecare/Klevis_Marku.png",
            description: "Koordinator Salezian i shkollës"
        }
    ];
    const koordinatorShkollor = [
        {
            name: "Brunilda Halili",
            role: "Koordinator Shkollor",
            image: "/stafi_9-vjecare/Brunilda_Halili.png",
            description: "Koordinator Shkollor i shkollës"
        },
        {
            name: "Valentina Zhivani",
            role: "Koordinator Shkollor",
            image: "/stafi_9-vjecare/Valentina_Zhivani.png",
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
            name: "Adi Shehu",
            role: "Mësues",
            image: "/stafi_9-vjecare/Adi_Shehu.png",
            description: "Mësues i kualifikuar"
        },
        {
            name: "Anxhela Bollguri",
            role: "Mësuese",
            image: "/stafi_9-vjecare/Anxhela_Bollguri.jpeg",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Arluen Bega",
            role: "Mësues",
            image: "/stafi_9-vjecare/Arluen_Bega.png",
            description: "Mësues i kualifikuar"
        },
        {
            name: "Brunilda Halili",
            role: "Mësuese",
            image: "/stafi_9-vjecare/Brunilda_Halili.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Edison Macaj",
            role: "Mësues",
            image: "/stafi_9-vjecare/Edison_Macaj.png",
            description: "Mësues i kualifikuar"
        },
        {
            name: "Enkelejda LLeshaj",
            role: "Mësuese",
            image: "/stafi_9-vjecare/Enkelejda_LLeshaj.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Eva Jaku",
            role: "Mësuese",
            image: "/stafi_9-vjecare/Eva_Jaku.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Flori Shtjefni",
            role: "Mësues",
            image: "/stafi_9-vjecare/Flori_Shtjefni.png",
            description: "Mësues i kualifikuar"
        },
        {
            name: "Jesmina Meti",
            role: "Mësuese",
            image: "/stafi_9-vjecare/Jesmina_Meti.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Juna Mema",
            role: "Mësuese",
            image: "/stafi_9-vjecare/Juna_Mema.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Klodiana Shehu",
            role: "Mësuese",
            image: "/stafi_9-vjecare/Klodiana_Shehu.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Lefterie Xhelollari",
            role: "Mësuese",
            image: "/stafi_9-vjecare/Lefterie_Xhelollari.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Reonard Shimi",
            role: "Mësues",
            image: "/stafi_9-vjecare/Reonard_Shimi.png",
            description: "Mësues i kualifikuar"
        },
        {
            name: "Rigels Cullhaj",
            role: "Mësues",
            image: "/stafi_9-vjecare/Rigels_Cullhaj.png",
            description: "Mësues i kualifikuar"
        },
        {
            name: "Romina Caushaj",
            role: "Mësuese",
            image: "/stafi_9-vjecare/Romina_Caushaj.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Sixhej Cukaj",
            role: "Mësues",
            image: "/stafi_9-vjecare/Sixhej_Cukaj.png",
            description: "Mësues i kualifikuar"
        },
        {
            name: "Sofi",
            role: "Mësuese",
            image: "/stafi_9-vjecare/Sofi.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Suada Heta",
            role: "Mësuese",
            image: "/stafi_9-vjecare/Suada_Heta.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Valentina Zhivani",
            role: "Mësuese",
            image: "/stafi_9-vjecare/Valentina_Zhivani.png",
            description: "Mësuese e kualifikuar"
        },
        {
            name: "Zamir Vukzaj",
            role: "Mësues",
            image: "/stafi_9-vjecare/Zamir_Vukzaj.png",
            description: "Mësues i kualifikuar"
        },
        {
            name: "Zana Simoni",
            role: "Mësuese",
            image: "/stafi_9-vjecare/Zana_Simoni.png",
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
                        STAFI <span className="text-primary-red font-script italic lowercase">9-vjecare</span>
                    </h2>
                    <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">Ekipi ynë edukativ</p>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                            {koordinatorShkollor.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="text-center space-y-6"
                                >
                                    <div className="relative mx-auto w-40 h-40 sm:w-44 sm:h-44">
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

export default Stafi9Vjecare;
