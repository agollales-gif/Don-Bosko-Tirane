import React from 'react';
import { motion } from 'framer-motion';
import StaffHero from '../../components/StaffHero';

// --- DATA SECTIONS ---
const perfaqesuesiLigjor = [
    { name: "Don Luigi Martucci", role: "Drejtori i Shkollës", image: "/stafi/Don_Luiggi_Martucci(Drejtori)-converted-from-jpeg.webp", level: 1 }
];

const koordinatorSalezian = [
    { name: "Dritan Bushi", role: "Koordinator Salezian", image: "/stafi/Dritan_Bushi(Nen-Drejtor)-converted-from-png.webp", level: 3, row: 1 },
    { name: "Joana Kici", role: "Koordinatore \nMësuese Kujdestare Fillore", image: "/stafi/Joana_Kici-fillore-converted-from-png.webp", level: 4, row: 2 },
    { name: "Aleksandra Çarka", role: "Koordinatore \nMësuese Kujdestare Fillore", image: "/stafi/Aleksandra_Carka-converted-from-png.webp", level: 4, row: 2 },
    { name: "Brunilda Halili", role: "Koordinatore \nMësuese Kujdestare 9-vjeçare", image: "/stafi/Brunilda_Halili9-vjecare-anglisht-converted-from-png.webp", level: 4, row: 2 },
    { name: "Valentina Zhivani", role: "Koordinatore \nMësuese Kujdestare 9-vjeçare", image: "/stafi/Valentina_Zhivani-9-vjecare-gjuhe-letersi-converted-from-png.webp", level: 4, row: 2 },
    { name: "Indrit Qehajaj", role: "Koordinator Shkollor \n Mësues Historie", image: "/stafi/Indrit_Qehajaj-gjimnaz-histori-converted-from-png.webp", level: 4, row: 2 },
    { name: "Diana Luli", role: "Koordinator Shkollor \n Mësuese Qytetarie", image: "/stafi/Diana_Luli-gjimnaz-qytetari-converted-from-png.webp", level: 5, row: 3 },
    { name: "Klevis Marku", role: "Koordinator Salezian", image: "/stafi/Klevis_Marku-converted-from-png.webp", level: 5, row: 3 }
];

const psikoSocial = [
    { name: "Deleda Gjonej", role: "Punonjëse Sociale", image: "/stafi/Deleda_Psikologe-converted-from-png.webp", level: 7 },
    { name: "Rosela Psikologe", role: "Psikologe", image: "/stafi/Rosela_psikologe-converted-from-png.webp", level: 7 },
    { name: "Kristian Psikolog", role: "Psikolog", image: "/stafi/Kristian-psikolog-converted-from-png.webp", level: 7 }
];

const personeliMesimdhenes = [
    { name: "Amarilda Cava", role: "Mësuese Kujdestare Fillore", image: "/stafi/Amarilda_Cava-converted-from-png.webp", level: 6 },
    { name: "Anila Maloku", role: "Mësuese Kujdestare Fillore", image: "/stafi/Anila_Maloku-converted-from-png.webp", level: 6 },
    { name: "Brunilda Mata", role: "Mësuese Kujdestare Fillore", image: "/stafi/Brunilda_Mata-fillore-converted-from-png.webp", level: 6 },
    { name: "Eftimi Sylari", role: "Mësuese Anglisht", image: "/stafi/Eftimi_Sylari-fillore-anglisht-converted-from-png.webp", level: 6 },
    { name: "Elisabeta Xhanari", role: "Mësuese Kujdestare Fillore", image: "/stafi/Elisabeta_Xhanari-converted-from-png.webp", level: 6 },
    { name: "Elizabeta Methoxha", role: "Mësuese Kujdestare Fillore", image: "/stafi/Elizabeta_Methoxha-Fillore-converted-from-png.webp", level: 6 },
    { name: "Florida Lleshaj", role: "Mësuese Kujdestare Fillore", image: "/stafi/Florida_Lleshaj-fillore-converted-from-png.webp", level: 6 },
    { name: "Gresa Pelinku", role: "Mësuese Kujdestare Fillore", image: "/stafi/Gresa_Pelinku-converted-from-png.webp", level: 6 },
    { name: "Laureta Nikolli", role: "Mësuese Kujdestare Fillore", image: "/stafi/Laureta_Nikolli-Fillore-converted-from-png.webp", level: 6 },
    { name: "Lirika Toska", role: "Mësuese Kujdestare Fillore", image: "/stafi/Lirika_Toska-converted-from-png.webp", level: 6 },
    { name: "Liza Gegaj", role: "Mësuese Kujdestare Fillore", image: "/stafi/Liza_Gegaj-converted-from-png.webp", level: 6 },
    { name: "Majlinda Tartari", role: "Mësuese Kujdestare Fillore", image: "/stafi/Majlinda_Tartari-converted-from-png.webp", level: 6 },
    { name: "Megi Sinani", role: "Mësuese Kujdestare Fillore", image: "/stafi/Megi_Sinani-fillore-converted-from-png.webp", level: 6 },
    { name: "Mimoza Molishti", role: "Mësuese Kujdestare Fillore", image: "/stafi/Mimoza_Molishti-fillore-converted-from-png.webp", level: 6 },
    { name: "Valbona Gjergjani", role: "Mësuese Kujdestare Fillore", image: "/stafi/Valbona Gjergjani-converted-from-png.webp", level: 6 },
    { name: "Adela Xhanari", role: "Mësuese Matematikë", image: "/stafi/Adela_Xhanari-gjimnaz-matematik-converted-from-webp.webp", level: 6 },
    { name: "Adi Shehu", role: "Mësues Arte", image: "/stafi/Adi_Shehu-9-vjecare-Arte-converted-from-png.webp", level: 6 },
    { name: "Aida Alimena", role: "Mësuese Kimi-Biologji", image: "/stafi/Aida_Alimena-gjimnaz-Kimi-Biologji-converted-from-png.webp", level: 6 },
    { name: "Alma Balashi", role: "Mësuese Anglisht", image: "/stafi/Alma_BALASHI-9-vjecare-anglisht-converted-from-png.webp", level: 6 },
    { name: "Anxhela Bollguri", role: "Mësuese Anglisht", image: "/stafi/Anxhela_Bollguri-fillore-anglisht-converted-from-jpeg.webp", level: 6 },
    { name: "Argent Karaj", role: "Mësues Edukim Fizik", image: "/stafi/Argent_Karaj-gjimnaz-Ed.Fizik-converted-from-jpg.webp", level: 6 },
    { name: "Arluen Bega", role: "Mësues Edukim Fizik", image: "/stafi/Arluen_Bega-9-vjecare-Ed.Fizik-converted-from-png.webp", level: 6 },
    { name: "Edison Macaj", role: "Mësues Gjuhë-Letërsi", image: "/stafi/Edison_Macaj-9-vjecare-gjuhe-letersi-converted-from-png.webp", level: 6 },
    { name: "Edlira Cobani", role: "Mësuese Matematikë", image: "/stafi/Edlira-Cobani-9-vjecare-gjimnaz-Matematik-converted-from-png.webp", level: 6 },
    { name: "Elona Kalesha", role: "Mësuese TIK", image: "/stafi/Elona_Kalesha-gjimnaz-tik-converted-from-png.webp", level: 6 },
    { name: "Enkelejda Lleshaj", role: "Mësuese Gjeografi-Qytetari", image: "/stafi/Enkelejda_LLeshaj-9-vjecare-Gjeografi-Qytetari-converted-from-png.webp", level: 6 },
    { name: "Eri Zagani", role: "Mësues Fizikë", image: "/stafi/Eri_Zagani-gjimnaz-fizik-converted-from-png.webp", level: 6 },
    { name: "Ermelinda Skenderaj", role: "Mësuese Matematikë", image: "/stafi/Ermelinda_Skenderaj-9-vjecare-gjimnaz-matematik-converted-from-png.webp", level: 6 },
    { name: "Eva Jaku", role: "Mësuese Fizikë", image: "/stafi/Eva_Jaku-9-vjecare-fizik-converted-from-png.webp", level: 6 },
    { name: "Evis Myftaraj", role: "Mësuese Italisht", image: "/stafi/Evis_Myftaraj-9-vjecare-gjimnaz-italisht-converted-from-webp.webp", level: 6 },
    { name: "Flori Shtjefni", role: "Mësues Muzik", image: "/stafi/Flori_Shtjefni-9vjecare-Muzik-converted-from-png.webp", level: 6 },
    { name: "Ini Hoxha", role: "Mësuese Edukim Fizik", image: "/stafi/Ini_Hoxha-gjimnaz-Ed.Fizik-converted-from-png.webp", level: 6 },
    { name: "Jesmina Meti", role: "Mësuese Kimi-Biologji", image: "/stafi/Jesmina_Meti-9-vjecare-gjimnaz-kimi-bilogji-converted-from-png.webp", level: 6 },
    { name: "Jorgjie Dodani", role: "Mësuese Kimi-Biologji", image: "/stafi/Jorgjie_Dodani-9-vjecare-gjimnaz-Kimi-Biologji-converted-from-png.webp", level: 6 },
    { name: "Juna Mema", role: "Mësuese Edukim Fizik", image: "/stafi/Juna_Mema-9-vjecare-Ed.Fizik-converted-from-png.webp", level: 6 },
    { name: "Klodiana Shehu", role: "Mësuese Italisht", image: "/stafi/Klodiana_Shehu-9-vjecare-italisht-converted-from-png.webp", level: 6 },
    { name: "Kristjana Hajdaraj", role: "Mësuese Gjuhë-Letërsi", image: "/stafi/Kristjana_Hajdaraj-gjimnaz-gjuhe-letersi-converted-from-png.webp", level: 6 },
    { name: "Lefterie Xhelollari", role: "Mësues Italisht", image: "/stafi/Lefterie_Xhelollari-9-vjecari-italisht-converted-from-png.webp", level: 6 },
    { name: "Neritana Kraja", role: "Mësuese Gjuhë-Letërsi", image: "/stafi/Neritana_Kraja-Gjimnaz-Gjuhe-Letersi-converted-from-jpeg.webp", level: 6 },
    { name: "Reonard Shimi", role: "Mësues Histori-Gjeografi", image: "/stafi/Reonard_Shimi-gjimnaz-histori-gjeografi-converted-from-png.webp", level: 6 },
    { name: "Rigels Cullhaj", role: "Mësues Edukim Fizik", image: "/stafi/Rigels_Cullhaj9-vjecare-gjimnaz-Ed.Fizik-converted-from-png.webp", level: 6 },
    { name: "Rregjina Paluca", role: "Mësuese Gjuhë-Letërsi", image: "/stafi/Rregjina_Paluca-9-vjecare-gjimnaz-gjuhe-letersi-converted-from-jpeg.webp", level: 6 },
    { name: "Rozeta Kallembi", role: "Mësuese Ekonomi", image: "/stafi/Rozeta_Kallembi-gjimnaz-ekonimi-converted-from-jpeg.webp", level: 6 },
    { name: "Sixhej Cukaj", role: "Mësues Edukim Fizik", image: "/stafi/Sixhej_Cukaj-9-vjecare-Ed.Fizik-converted-from-png.webp", level: 6 },
    { name: "Viola Mendoja", role: "Mësuese Anglisht", image: "/stafi/Viola_Mendoja-gjimnaz-anglisht-converted-from-png.webp", level: 6 },
    { name: "Zamir Vukzaj", role: "Mësues Muzik", image: "/stafi/Zamir_Vukzaj-9-vjecare-muzik-converted-from-png.webp", level: 6 },
    { name: "Zana Simoni", role: "Mësuese TIK", image: "/stafi/Zana_Simoni-9vjecare-tik-converted-from-png.webp", level: 6 },
    { name: "Daniela Bali", role: "Mësuese E Lëndëve Profesionale", image: "/stafi/Daniela_Bali-converted-from-png.webp", level: 6 },
    { name: "Fatos Gjoka", role: "Mësues I Lëndëve Profesionale", image: "/stafi/Fatos_Gjoka-converted-from-png.webp", level: 6 },
    { name: "Julian Priska", role: "Mësues I Lëndëve Profesionale", image: "/stafi/Julian_Priska-converted-from-jpg.webp", level: 6 },
    { name: "Kristi Lamaj", role: "Mësues I Lëndëve Profesionale", image: "/stafi/Kristi_Lamaj-converted-from-jpg.webp", level: 6 },
    { name: "Suada Heta", role: "Mësuese Kërcim", image: "/stafi/Suada_Heta-kercim-converted-from-png.webp", level: 6 }
];

const departments = [
    { id: 'leadership', name: 'Përfaqësuesi Ligjor', staff: perfaqesuesiLigjor },
    { id: 'koordinator', name: 'Koordinatorët Salezian', staff: koordinatorSalezian },
    { id: 'mesimdhenes', name: 'Personeli Mesimdhenës', staff: personeliMesimdhenes },
    { id: 'psiko-social', name: 'Stafi Psiko-Social', staff: psikoSocial }
];

type StaffMember = { name: string; role: string; image: string; level: number; row?: number };

const StaffCard: React.FC<{ member: StaffMember; index: number; getCardSize: (l:number)=>string; getImageSize: (l:number)=>string; getTextSize: (l:number)=>string }> = ({ member, index, getCardSize, getImageSize, getTextSize }) => (
    <motion.div
        key={member.name}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
        className={`bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300 ${getCardSize(member.level)}`}
    >
        <div className="relative flex-shrink-0 mb-6">
            <div className={`${getImageSize(member.level)} rounded-full border-4 border-dashed border-gray-300 group-hover:border-solid group-hover:border-[#9c252d] p-3 relative transition-all duration-300`}>
                <div className="w-full h-full rounded-full overflow-hidden shadow-inner bg-gray-100 flex items-center justify-center">
                    <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                        }}
                    />
                    <span
                        style={{ display: 'none' }}
                        className="w-full h-full items-center justify-center text-2xl font-black text-gray-400 uppercase"
                    >
                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                </div>
            </div>
        </div>
        <div className="flex-grow space-y-3 w-full px-4">
            <h3 className={`font-black text-gray-900 tracking-tight leading-tight ${getTextSize(member.level)}`}>
                {member.name}
            </h3>
            <div className="inline-flex items-center justify-center px-3 py-1 bg-gray-100 rounded-full">
                <p className="text-[#9c252d] font-semibold text-xs uppercase tracking-wider leading-tight whitespace-pre-line">
                    {member.role}
                </p>
            </div>
        </div>
    </motion.div>
);

const Staff: React.FC = () => {
    // --- HELPERS ---
    const getCardSize = (l: number) => {
        const sizes: Record<number, string> = { 1: 'p-20', 2: 'p-18', 3: 'p-16', 4: 'p-14', 5: 'p-12', 6: 'p-10' };
        return sizes[l] || 'p-12';
    };

    const getImageSize = (l: number) => {
        const sizes: Record<number, string> = { 1: 'w-56 h-56', 2: 'w-52 h-52', 3: 'w-48 h-48', 4: 'w-44 h-44', 5: 'w-40 h-40', 6: 'w-36 h-36' };
        return sizes[l] || 'w-40 h-40';
    };

    const getTextSize = (l: number) => {
        const sizes: Record<number, string> = { 1: 'text-4xl', 2: 'text-3xl', 3: 'text-2xl', 4: 'text-xl', 5: 'text-lg', 6: 'text-base' };
        return sizes[l] || 'text-xl';
    };

    return (
        <div className="bg-white min-h-screen font-plus-jakarta overflow-x-hidden">
            {/* HERO SECTION */}
            <div className="relative">
                <StaffHero />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white to-transparent z-10" />
            </div>

            <section className="px-6 md:px-12 max-w-7xl mx-auto py-20 relative z-20">
                <div className="space-y-20">
                    {departments.map((dept) => (
                        <div key={dept.id} className="space-y-12">
                            <motion.div 
                                initial={{ opacity: 0 }} 
                                whileInView={{ opacity: 1 }} 
                                viewport={{ once: true }}
                                className="text-center space-y-4"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wider">
                                    {dept.name}
                                </h2>
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                            </motion.div>

                            {dept.id === 'koordinator' ? (
                                // Row-based layout for Koordinatorët Salezian
                                <div className="flex flex-col items-center gap-8">
                                    {[1, 2, 3].map(rowNum => {
                                        const rowMembers = dept.staff.filter(m => (m as StaffMember).row === rowNum);
                                        if (!rowMembers.length) return null;
                                        return (
                                            <div key={rowNum} className="flex flex-wrap justify-center gap-8">
                                                {rowMembers.map((member, index) => (
                                                    <StaffCard
                                                        key={member.name}
                                                        member={member}
                                                        index={index}
                                                        getCardSize={getCardSize}
                                                        getImageSize={getImageSize}
                                                        getTextSize={getTextSize}
                                                    />
                                                ))}
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                // Flat layout for all other departments
                                <div className="flex flex-wrap justify-center gap-8">
                                    {dept.staff.map((member, index) => (
                                        <StaffCard
                                            key={member.name}
                                            member={member}
                                            index={index}
                                            getCardSize={getCardSize}
                                            getImageSize={getImageSize}
                                            getTextSize={getTextSize}
                                        />
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