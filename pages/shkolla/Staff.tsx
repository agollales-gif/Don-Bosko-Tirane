import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Hierarchical staff structure - Family Tree Organization

// Top Leadership
const perfaqesuesiLigjor = [
    { 
        name: "Don Luigi Martucci", 
        role: "Drejtori i Shkollës", 
        image: "/stafi/Don_Luiggi_Martucci(Drejtori).jpeg",
        level: 1,
        description: "Perfaqëuesi Ligjor i institucionit"
    }
];


// Salesian Coordinators (All coordinators in one section)
const koordinatorSalezian = [
    { 
        name: "Dritan Bushi", 
        role: "Koordinator Salezian", 
        image: "/stafi/Dritan_Bushi(Nen-Drejtor).png",
        level: 3,
        description: "Koordinator Salezian i shkollave të mesme",
        manages: ["Joana Kici", "Aleksandra Çarka", "Brunilda Halili", "Valentina Zhivani", "Indrit Qehajaj"]
    },
    { 
        name: "Joana Kici", 
        role: "Koordinator Shkollor/Mësuese Kujdestare Fillore", 
        image: "/stafi/Joana_Kici-fillore.png",
        level: 4,
        description: "Koordinator Shkollor",
        reportsTo: "Dritan Bushi"
    },
    { 
        name: "Aleksandra Çarka", 
        role: "Koordinator Shkollor/Mësuese Kujdestare Fillore", 
        image: "/stafi/Aleksandra_Carka.png",
        level: 4,
        description: "Koordinator Shkollor",
        reportsTo: "Dritan Bushi"
    },
    { 
        name: "Brunilda Halili", 
        role: "Koordinator Shkollor", 
        image: "/stafi/Brunilda_Halili9-vjecare-anglisht.png",
        level: 4,
        description: "Koordinator Shkollor/Mësuese Kujdestare Fillore",
        reportsTo: "Dritan Bushi"
    },
    { 
        name: "Valentina Zhivani", 
        role: "Koordinator Shkollor", 
        image: "/stafi/Valentina_Zhivani-9-vjecare-gjuhe-letersi.png",
        level: 4,
        description: "Koordinator Shkollor",
        reportsTo: "Dritan Bushi"
    },
    { 
        name: "Indrit Qehajaj", 
        role: "Koordinator Shkollor", 
        image: "/stafi/Indrit_Qehajaj-gjimnaz-histori.png",
        level: 4,
        description: "Koordinator Shkollor",
        reportsTo: "Dritan Bushi"
    },
    { 
        name: "Klevis Marku", 
        role: "Koordinator Salezian", 
        image: "/stafi/Klevis_Marku.png",
        level: 5,
        description: "Koordinator Shkollore",
        reportsTo: "Joana Kici"
    },
    { 
        name: "Diana Luli", 
        role: "Koordinator Shkollor", 
        image: "/stafi/Diana_Luli-gjimnaz-qytetari.png",
        level: 5,
        description: "Koordinator Shkollor",
        reportsTo: "Dritan Bushi"
    }
];

// Support staff (shared)
const psikoSocial = [
    { 
        name: "Deleda", 
        role: "Punonjëse Sociale", 
        image: "/stafi/Deleda_Psikologe.png",
        level: 7,
        description: "Punonjëse Sociale e shkollës"
    },
    { 
        name: "Rosela Psikologe", 
        role: "Psikologe", 
        image: "/stafi/Rosela_psikologe.png",
        level: 7,
        description: "Psikologe e shkollës"
    },
    { 
        name: "Kristian Psikolog", 
        role: "Psikolog", 
        image: "/stafi/Kristian-psikolog.png",
        level: 7,
        description: "Psikolog i shkollës"
    }
];

// All teaching staff (Personeli Mesimdhenes) - Only staff with photos in /stafi/ folder
const personeliMesimdhenes = [
    // Shkolla Fillore teachers
    { name: "Amarilda Cava", role: "Mësuese Kujdestare Fillore", image: "/stafi/Amarilda_Cava.png", level: 6 },
    { name: "Anila Maloku", role: "Mësuese Kujdestare Fillore", image: "/stafi/Anila_Maloku.png", level: 6 },
    { name: "Brunilda Mata", role: "Mësuese Kujdestare Fillore", image: "/stafi/Brunilda_Mata-fillore.png", level: 6 },
    { name: "Eftimi Sylari", role: "Mësuese Anglisht", image: "/stafi/Eftimi_Sylari-fillore-anglisht.png", level: 6 },
    { name: "Elisabeta Xhanari", role: "Mësuese Kujdestare Fillore", image: "/stafi/Elisabeta_Xhanari.png", level: 6 },
    { name: "Elizabeta Methoxha", role: "Mësuese Kujdestare Fillore", image: "/stafi/Elizabeta_Methoxha-Fillore.png", level: 6 },
    { name: "Florida Lleshaj", role: "Mësuese Kujdestare Fillore", image: "/stafi/Florida_Lleshaj-fillore.png", level: 6 },
    { name: "Gresa Pelinku", role: "Mësuese Kujdestare Fillore", image: "/stafi/Gresa_Pelinku.png", level: 6 },
    { name: "Laureta Nikolli", role: "Mësuese Kujdestare Fillore", image: "/stafi/Laureta_Nikolli-Fillore.png", level: 6 },
    { name: "Lirika Toska", role: "Mësuese Kujdestare Fillore", image: "/stafi/Lirika_Toska.png", level: 6 },
    { name: "Liza Gegaj", role: "Mësuese Kujdestare Fillore", image: "/stafi/Liza_Gegaj.png", level: 6 },
    { name: "Margarita Preka", role: "Mësuese Kujdestare Fillore", image: "/stafi/MArgarita_Preka-Fillore.png", level: 6 },
    { name: "Majlinda Tartari", role: "Mësuese Kujdestare Fillore", image: "/stafi/Majlinda_Tartari.png", level: 6 },
    { name: "Megi Sinani", role: "Mësuese Kujdestare Fillore", image: "/stafi/Megi_Sinani-fillore.png", level: 6 },
    { name: "Mimoza Molishti", role: "Mësuese Kujdestare Fillore", image: "/stafi/Mimoza_Molishti-fillore.png", level: 6 },
    { name: "Valbona Gjergjani", role: "Mësuese Kujdestare Fillore", image: "/stafi/Valbona Gjergjani.png", level: 6 },
    
    // Shkolla e Mesme & 9-vjeçare teachers
    { name: "Adela Xhanari", role: "Mësuese Matematikë", image: "/stafi/Adela_Xhanari-gjimnaz-matematik.webp", level: 6 },
    { name: "Adi Shehu", role: "Mësues Arte", image: "/stafi/Adi_Shehu-9-vjecare-Arte.png", level: 6 },
    { name: "Aida Alimena", role: "Mësuese Kimi-Biologji", image: "/stafi/Aida_Alimena-gjimnaz-Kimi-Biologji.png", level: 6 },
    { name: "Alma Balashi", role: "Mësuese Anglisht", image: "/stafi/Alma_BALASHI-9-vjecare-anglisht.png", level: 6 },
    { name: "Anxhela Bollguri", role: "Mësuese Anglisht", image: "/stafi/Anxhela_Bollguri-fillore-anglisht.jpeg", level: 6 },
    { name: "Argent Karaj", role: "Mësues Edukim Fizik", image: "/stafi/Argent_Karaj-gjimnaz-Ed.Fizik.jpg", level: 6 },
    { name: "Arluen Bega", role: "Mësues Edukim Fizik", image: "/stafi/Arluen_Bega-9-vjecare-Ed.Fizik.png", level: 6 },
    { name: "Edison Macaj", role: "Mësues Gjuhë-Letërsi", image: "/stafi/Edison_Macaj-9-vjecare-gjuhe-letersi.png", level: 6 },
    { name: "Edlira Cobani", role: "Mësuese Matematikë", image: "/stafi/Edlira-Cobani-9-vjecare-gjimnaz-Matematik.png", level: 6 },
    { name: "Elona Kalesha", role: "Mësuese TIK", image: "/stafi/Elona_Kalesha-gjimnaz-tik.png", level: 6 },
    { name: "Enkelejda Lleshaj", role: "Mësuese Gjeografi-Qytetari", image: "/stafi/Enkelejda_LLeshaj-9-vjecare-Gjeografi-Qytetari.png", level: 6 },
    { name: "Eri Zagani", role: "Mësues Fizikë", image: "/stafi/Eri_Zagani-gjimnaz-fizik.png", level: 6 },
    { name: "Ermelinda Skenderaj", role: "Mësuese Matematikë", image: "/stafi/Ermelinda_Skenderaj-9-vjecare-gjimnaz-matematik.png", level: 6 },
    { name: "Eva Jaku", role: "Mësuese Fizikë", image: "/stafi/Eva_Jaku-9-vjecare-fizik.png", level: 6 },
    { name: "Evis Myftaraj", role: "Mësues Italisht", image: "/stafi/Evis_Myftaraj-9-vjecare-gjimnaz-italisht.webp", level: 6 },
    { name: "Flori Shtjefni", role: "Mësues Muzik", image: "/stafi/Flori_Shtjefni-9vjecare-Muzik.png", level: 6 },
    { name: "Ini Hoxha", role: "Mësues Edukim Fizik", image: "/stafi/Ini_Hoxha-gjimnaz-Ed.Fizik.png", level: 6 },
    { name: "Jesmina Meti", role: "Mësuese Kimi-Biologji", image: "/stafi/Jesmina_Meti-9-vjecare-gjimnaz-kimi-bilogji.png", level: 6 },
    { name: "Jorgjie Dodani", role: "Mësuese Kimi-Biologji", image: "/stafi/Jorgjie_Dodani-9-vjecare-gjimnaz-Kimi-Biologji.png", level: 6 },
    { name: "Juna Mema", role: "Mësuese Edukim Fizik", image: "/stafi/Juna_Mema-9-vjecare-Ed.Fizik.png", level: 6 },
    { name: "Klodiana Shehu", role: "Mësuese Italisht", image: "/stafi/Klodiana_Shehu-9-vjecare-italisht.png", level: 6 },
    { name: "Kristjana Hajdaraj", role: "Mësuese Gjuhë-Letërsi", image: "/stafi/Kristjana_Hajdaraj-gjimnaz-gjuhe-letersi.png", level: 6 },
    { name: "Lefterie Xhelollari", role: "Mësues Italisht", image: "/stafi/Lefterie_Xhelollari-9-vjecari-italisht.png", level: 6 },
    { name: "Neritana Kraja", role: "Mësuese Gjuhë-Letërsi", image: "/stafi/Neritana_Kraja-Gjimnaz-Gjuhe-Letersi.jpeg", level: 6 },
    { name: "Reonard Shimi", role: "Mësues Histori-Gjeografi", image: "/stafi/Reonard_Shimi-gjimnaz-histori-gjeografi.png", level: 6 },
    { name: "Rigels Cullhaj", role: "Mësues Edukim Fizik", image: "/stafi/Rigels_Cullhaj9-vjecare-gjimnaz-Ed.Fizik.png", level: 6 },
    { name: "Rregjina Paluca", role: "Mësuese Gjuhë-Letërsi", image: "/stafi/Rregjina_Paluca-9-vjecare-gjimnaz-gjuhe-letersi.jpeg", level: 6 },
    { name: "Rozeta Kallembi", role: "Mësuese Ekonomi", image: "/stafi/Rozeta_Kallembi-gjimnaz-ekonimi.jpeg", level: 6 },
    { name: "Sixhej Cukaj", role: "Mësues Edukim Fizik", image: "/stafi/Sixhej_Cukaj-9-vjecare-Ed.Fizik.png", level: 6 },
    { name: "Viola Mendoja", role: "Mësuese Anglisht", image: "/stafi/Viola_Mendoja-gjimnaz-anglisht.png", level: 6 },
    { name: "Zamir Vukzaj", role: "Mësues Muzik", image: "/stafi/Zamir_Vukzaj-9-vjecare-muzik.png", level: 6 },
    { name: "Zana Simoni", role: "Mësuese TIK", image: "/stafi/Zana_Simoni-9vjecare-tik.png", level: 6 },
    
    // Shkolla Profesionale teachers
    { name: "Daniela Bali", role: "Mësuese Profesionale", image: "/stafi/Daniela_Bali.png", level: 6 },
    { name: "Fatos Gjoka", role: "Mësues I Lëndëve Profesionale", image: "/stafi/Fatos_Gjoka.png", level: 6 },
    { name: "Julian Priska", role: "Mësues I Lëndëve Profesionale", image: "/stafi/Julian_Priska.jpg", level: 6 },
    { name: "Kristi Lamaj", role: "Mësues I Lëndëve Profesionale", image: "/stafi/Kristi_Lamaj.jpg", level: 6 },
    
    // Staff me role të përgjithshme
    { name: "Sofi", role: "Mësuese", image: "/stafi/Sofi.png", level: 6 },
    { name: "Suada Heta", role: "Mësuese Kërcim", image: "/stafi/Suada_Heta-kercim.png", level: 6 }
];

// Hierarchical departments for family tree structure
const departments = [
    { 
        id: 'leadership', 
        name: 'Leadership', 
        staff: perfaqesuesiLigjor,
        description: 'Kreu i institucionit'
    },
    { 
        id: 'koordinator', 
        name: 'Koordinatorët Salezian', 
        staff: koordinatorSalezian,
        description: 'Menaxhimi i shkollave'
    },
    { 
        id: 'mesimdhenes', 
        name: 'Personeli Mesimdhenës', 
        staff: personeliMesimdhenes,
        description: 'Të gjithë mësuesit dhe stafi akademik'
    },
    { 
        id: 'psiko-social', 
        name: 'Stafi Psiko-Social', 
        staff: psikoSocial,
        description: 'Psikologët dhe punonjës social'
    }
];

const Staff: React.FC = () => {
    // Group staff by level for family tree structure
    const staffByLevel = {
        1: perfaqesuesiLigjor,
        2: koordinatorSalezian,
        3: personeliMesimdhenes,
        4: psikoSocial
    };

    const getCardSize = (level: number) => {
        switch(level) {
            case 1: return 'p-20';
            case 2: return 'p-18';
            case 3: return 'p-16';
            case 4: return 'p-14';
            case 5: return 'p-12';
            case 6: return 'p-10';
            default: return 'p-12';
        }
    };

    const getImageSize = (level: number) => {
        switch(level) {
            case 1: return 'w-56 h-56';
            case 2: return 'w-52 h-52';
            case 3: return 'w-48 h-48';
            case 4: return 'w-44 h-44';
            case 5: return 'w-40 h-40';
            case 6: return 'w-36 h-36';
            default: return 'w-40 h-40';
        }
    };

    const getTextSize = (level: number) => {
        switch(level) {
            case 1: return 'text-4xl';
            case 2: return 'text-3xl';
            case 3: return 'text-2xl';
            case 4: return 'text-xl';
            case 5: return 'text-lg';
            case 6: return 'text-base';
            default: return 'text-xl';
        }
    };

    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-gray-900 font-plus-jakarta">
                        Struktura <span className="text-primary-red">Organizative</span>
                    </h1>
                    <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs">Hierarkia e stafit tonë</p>
                </motion.div>

                {/* Family Tree Structure */}
                <div className="space-y-16 pt-8">
                    {departments.map((dept) => (
                        <div key={dept.id} className="space-y-8">
                            {/* Category Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-primary-red uppercase tracking-wider">
                                    {dept.name}
                                </h2>
                                <div className="w-24 h-1 bg-primary-red mx-auto mt-2"></div>
                            </motion.div>

                            {/* Special handling for Koordinatorët Salezian - center Dritan Bushi */}
                            {dept.id === 'koordinator' ? (
                                <div className="space-y-12">
                                    {/* Dritan Bushi - Centered */}
                                    <div className="flex justify-center">
                                        {dept.staff.filter(member => member.name === "Dritan Bushi").map((member, index) => (
                                            <motion.div
                                                key={member.name}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className={`bg-white rounded-2xl shadow-lg border-2 border-primary-red/20 flex flex-col items-center text-center group hover:shadow-2xl hover:scale-105 transition-all duration-500 ${getCardSize(member.level)}`}
                                            >
                                                {/* Circular Image with Red Border */}
                                                <div className="relative flex-shrink-0 mb-4">
                                                    <div className={`${getImageSize(member.level)} rounded-full border-[4px] border-primary-red p-2 relative`}>
                                                        <div className="w-full h-full rounded-full overflow-hidden shadow-inner bg-slate-50">
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
                                                </div>

                                                <div className="flex-grow space-y-2 w-full">
                                                    <h3 className={`font-black text-[#1A233A] tracking-tight leading-tight ${getTextSize(member.level)}`}>
                                                        {member.name}
                                                    </h3>
                                                    <p className="text-primary-red font-bold text-xs uppercase tracking-wider">
                                                        {member.role}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Other Coordinators - Below */}
                                    <div className="space-y-8">
                                        {/* First row of coordinators */}
                                        <div className="flex flex-wrap justify-center gap-8">
                                            {dept.staff.filter(member => 
                                                member.name !== "Dritan Bushi" && 
                                                member.name !== "Klevis Marku" && 
                                                member.name !== "Diana Luli"
                                            ).map((member, index) => (
                                                <motion.div
                                                    key={member.name}
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className={`bg-white rounded-2xl shadow-lg border-2 border-primary-red/20 flex flex-col items-center text-center group hover:shadow-2xl hover:scale-105 transition-all duration-500 ${getCardSize(member.level)}`}
                                                >
                                                    {/* Circular Image with Red Border */}
                                                    <div className="relative flex-shrink-0 mb-4">
                                                        <div className={`${getImageSize(member.level)} rounded-full border-[4px] border-primary-red p-2 relative`}>
                                                            <div className="w-full h-full rounded-full overflow-hidden shadow-inner bg-slate-50">
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
                                                    </div>

                                                    <div className="flex-grow space-y-2 w-full">
                                                        <h3 className={`font-black text-[#1A233A] tracking-tight leading-tight ${getTextSize(member.level)}`}>
                                                            {member.name}
                                                        </h3>
                                                        <p className="text-primary-red font-bold text-xs uppercase tracking-wider">
                                                            {member.role}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Second row - Klevis Marku and Diana Luli */}
                                        <div className="flex flex-wrap justify-center gap-8">
                                            {dept.staff.filter(member => 
                                                member.name === "Klevis Marku" || 
                                                member.name === "Diana Luli"
                                            ).map((member, index) => (
                                                <motion.div
                                                    key={member.name}
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className={`bg-white rounded-2xl shadow-lg border-2 border-primary-red/20 flex flex-col items-center text-center group hover:shadow-2xl hover:scale-105 transition-all duration-500 ${getCardSize(member.level)}`}
                                                >
                                                    {/* Circular Image with Red Border */}
                                                    <div className="relative flex-shrink-0 mb-4">
                                                        <div className={`${getImageSize(member.level)} rounded-full border-[4px] border-primary-red p-2 relative`}>
                                                            <div className="w-full h-full rounded-full overflow-hidden shadow-inner bg-slate-50">
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
                                                    </div>

                                                    <div className="flex-grow space-y-2 w-full">
                                                        <h3 className={`font-black text-[#1A233A] tracking-tight leading-tight ${getTextSize(member.level)}`}>
                                                            {member.name}
                                                        </h3>
                                                        <p className="text-primary-red font-bold text-xs uppercase tracking-wider">
                                                            {member.role}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* Regular layout for other departments */
                                <div className="flex flex-wrap justify-center gap-8">
                                    {dept.staff.map((member, index) => (
                                        <motion.div
                                            key={member.name}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`bg-white rounded-2xl shadow-lg border-2 border-primary-red/20 flex flex-col items-center text-center group hover:shadow-2xl hover:scale-105 transition-all duration-500 ${getCardSize(member.level)}`}
                                        >
                                            {/* Circular Image with Red Border */}
                                            <div className="relative flex-shrink-0 mb-4">
                                                <div className={`${getImageSize(member.level)} rounded-full border-[4px] border-primary-red p-2 relative`}>
                                                    <div className="w-full h-full rounded-full overflow-hidden shadow-inner bg-slate-50">
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
                                            </div>

                                            <div className="flex-grow space-y-2 w-full">
                                                <h3 className={`font-black text-[#1A233A] tracking-tight leading-tight ${getTextSize(member.level)}`}>
                                                    {member.name}
                                                </h3>
                                                <p className="text-primary-red font-bold text-xs uppercase tracking-wider">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Staff;
