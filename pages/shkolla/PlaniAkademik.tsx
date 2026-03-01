import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { BookOpen, Users, Heart, Shield, Calendar, ArrowLeft, CheckCircle, Download, FileText, Award } from 'lucide-react';

const LEVEL_CONFIG: Record<string, { label: string; backHref: string }> = {
    fillore: { label: 'Shkolla Fillore Don Bosko', backHref: '/shkolla/fillore' },
    '9-vjecare': { label: 'Shkolla 9-vjeçare Don Bosko', backHref: '/shkolla/9-vjeqare' },
    gjimnaz: { label: 'Gjimnaz Don Bosko (i Përgjithshëm & Profesional)', backHref: '/shkolla/e-mesme' },
};

// --- KOMPONENTI HERO I PERSONALIZUAR PËR PLANIN AKADEMIK ---
const PlaniAkademikHero: React.FC<{ level: string; config: any }> = ({ level, config }) => {
    const drawVariants = (delay: number): Variants => ({
        hidden: { pathLength: 0, opacity: 0 },
        visible: { 
            pathLength: 1, 
            opacity: 1,
            transition: { delay, duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 0.8 }
        }
    });

    const getHeroContent = () => {
        switch(level) {
            case 'fillore':
                return {
                    badge: 'Cikli Fillor',
                    title: 'PLANI',
                    titleHighlight: 'AKADEMIK',
                    subtitle: 'Themelet e arsimit cilësor',
                    description: 'Struktura e plotë e mësimit dhe vlerësimit për një formim integral sipas pedagogjisë saleziane.'
                };
            case '9-vjecare':
                return {
                    badge: 'Cikli 9-vjeçar',
                    title: 'PLANI',
                    titleHighlight: 'AKADEMIK',
                    subtitle: 'Udhëzimi drejt suksesit',
                    description: 'Programi i plotë mësimor që përgatit nxënësit për sfidat e arsimit të mesëm.'
                };
            case 'gjimnaz':
                return {
                    badge: 'Arsimi i Mesëm',
                    title: 'PLANI',
                    titleHighlight: 'AKADEMIK',
                    subtitle: 'Ekselencë dhe formim profesional',
                    description: 'Programi akademik i avancuar për formimin e të rinjve të kualifikuar dhe të përgatitur për arsimin e lartë.'
                };
            default:
                return {
                    badge: 'Arsim',
                    title: 'PLANI',
                    titleHighlight: 'AKADEMIK',
                    subtitle: 'Edukim cilësor',
                    description: 'Programi mësimor i plotë për një arsimim integral.'
                };
        }
    };

    const heroContent = getHeroContent();

    return (
        <section className="relative w-full min-h-[100svh] lg:min-h-[85vh] bg-primary-red overflow-hidden flex flex-col lg:flex-row pt-28 lg:pt-0">
            
            {/* 1. TEKSTI */}
            <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 container mx-auto relative z-10 lg:w-1/2">
                <div className="max-w-2xl text-left">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                        
                        <span className="inline-block py-1.5 px-4 mb-4 lg:mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-semibold uppercase tracking-widest text-[10px] sm:text-xs">
                            {heroContent.badge}
                        </span>
                        
                        <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl font-extrabold text-white font-plus-jakarta tracking-tight mb-4 lg:mb-6">
                            {heroContent.title} <br /> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">{heroContent.titleHighlight}</span>
                        </h1>
                        
                        <p className="text-lg lg:text-2xl text-white/95 max-w-xl font-medium leading-snug lg:leading-relaxed mb-3 lg:mb-4">
                            {heroContent.subtitle}
                        </p>
                        
                        <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg font-normal leading-relaxed">
                            {heroContent.description}
                        </p>
                        
                    </motion.div>
                </div>
            </div>

            {/* 2. SILUETA E ANIMUAR */}
            <div className="relative w-full h-[38vh] min-h-[250px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-center p-6 lg:p-16 pointer-events-none z-0 mt-auto lg:mt-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full max-h-[260px] lg:max-h-[60vh] max-w-[85%] lg:max-w-full text-white opacity-[0.35] lg:opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
                    {/* Dokumenti/File */}
                    <motion.path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0)} initial="hidden" animate="visible" fill="white/5" />
                    <motion.path d="M14 2v6h6" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(0.3)} initial="hidden" animate="visible" />
                    
                    {/* Vija e tekstit në dokument */}
                    <motion.path d="M8 13h8" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" variants={drawVariants(0.6)} initial="hidden" animate="visible" />
                    <motion.path d="M8 16h6" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" variants={drawVariants(0.9)} initial="hidden" animate="visible" />
                    <motion.path d="M8 19h4" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" variants={drawVariants(1.2)} initial="hidden" animate="visible" />
                    
                    {/* Vija të shkurtra për detaje */}
                    <motion.path d="M8 10h3" stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" variants={drawVariants(1.5)} initial="hidden" animate="visible" />
                    
                    {/* Ikona e planit akademik */}
                    <motion.circle cx="16" cy="10" r="2" stroke="currentColor" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(1.8)} initial="hidden" animate="visible" />
                    <motion.path d="M15 10l0.5 0.5L17 9" stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round" variants={drawVariants(2.1)} initial="hidden" animate="visible" />
                    
                    {/* Yjet dekorative */}
                    <motion.path d="M3 3L3.3 4M4.3 4.5L3 4.5M1.7 4.5L3 4.5M3 6L3.3 4.5" stroke="currentColor" strokeWidth="0.15" strokeLinecap="round" variants={drawVariants(2.4)} initial="hidden" animate="visible" />
                    <motion.path d="M20 18L20.3 19M21.3 19.5L20 19.5M18.7 19.5L20 19.5M20 21L20.3 19.5" stroke="currentColor" strokeWidth="0.15" strokeLinecap="round" variants={drawVariants(2.7)} initial="hidden" animate="visible" />
                </svg>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32 z-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
            </div>
        </section>
    );
};

const PlaniAkademik: React.FC = () => {
    const { level } = useParams<{ level: string }>();
    const config = level ? LEVEL_CONFIG[level] : null;
    const isGjimnaz = level === 'gjimnaz';

    if (!level || !config) {
        return <Navigate to="/shkolla/plani-akademik/9-vjecare" replace />;
    }

    return (
        <div className="flex flex-col">
            <PlaniAkademikHero level={level} config={config} />

            {/* Main Content */}
            <section className="py-12 md:py-24 px-4 md:px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="space-y-12">
                    {/* Section 1: Prezantimi dhe Identiteti */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 md:p-8 lg:p-12 rounded-[30px] md:rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10 flex-wrap sm:flex-nowrap">
                            <div className="p-4 md:p-5 bg-gradient-to-br from-[#9c252d]/10 to-[#9c252d]/5 rounded-2xl md:rounded-3xl flex-shrink-0 border border-[#9c252d]/20">
                                <BookOpen size={28} className="md:w-10 md:h-10 text-[#9c252d]" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight font-plus-jakarta leading-tight">
                                    Prezantimi dhe <span className="text-[#9c252d]">Identiteti</span>
                                </h3>
                                <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-[#9c252d] to-[#9c252d]/50 rounded-full mt-2"></div>
                            </div>
                        </div>

                        <div className="grid gap-6 md:gap-8">
                            {isGjimnaz ? (
                                <>
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-[#9c252d]/20 transition-colors"
                                    >
                                        <h4 className="text-xl font-bold text-[#0f172a] mb-4 flex items-center gap-3">
                                            <div className="w-2 h-2 bg-[#9c252d] rounded-full"></div>
                                            Misioni dhe Identiteti
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                            Shkolla bazohet në pedagogjinë saleziane dhe Sistemin Parandalues të Shën Gjon Boskos,
                                            i cili mbështetet në arsye, fe dhe dashamirësi. Qëllimi është përgatitja e të rinjve
                                            si profesionistë të ndjeshëm ndaj vlerave njerëzore, duke ofruar jo vetëm arsim,
                                            por edukim dhe humanizëm integral.
                                        </p>
                                    </motion.div>
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-[#9c252d]/20 transition-colors"
                                    >
                                        <h4 className="text-xl font-bold text-[#0f172a] mb-4 flex items-center gap-3">
                                            <div className="w-2 h-2 bg-[#9c252d] rounded-full"></div>
                                            Mjedisi Shkollor
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                            Mjedisi shkollor është një bashkësi ku nxënësit dhe mësuesit punojnë në harmoni,
                                            me respekt të plotë për dinjitetin dhe lirinë e shprehjes, në frymën e komunitetit
                                            salezian.
                                        </p>
                                    </motion.div>
                                </>
                            ) : (
                                <>
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-[#9c252d]/20 transition-colors"
                                    >
                                        <h4 className="text-xl font-bold text-[#0f172a] mb-4 flex items-center gap-3">
                                            <div className="w-2 h-2 bg-[#9c252d] rounded-full"></div>
                                            Identiteti dhe Misioni
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                            Shkolla konsiderohet si një \"shtëpi që të mikpret\" dhe një mjedis që përgatit
                                            nxënësin për jetën në dimensionet njerëzore dhe shpirtërore.
                                        </p>
                                    </motion.div>
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-[#9c252d]/20 transition-colors"
                                    >
                                        <h4 className="text-xl font-bold text-[#0f172a] mb-4 flex items-center gap-3">
                                            <div className="w-2 h-2 bg-[#9c252d] rounded-full"></div>
                                            Pedagogjia Saleziane
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                            Edukimi bazohet në pedagogjinë saleziane të Don Boskos, ku të gjithë punojnë në harmoni,
                                            barazi dhe në respekt të plotë për dinjitetin njerëzor.
                                        </p>
                                    </motion.div>
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-[#9c252d]/20 transition-colors"
                                    >
                                        <h4 className="text-xl font-bold text-[#0f172a] mb-4 flex items-center gap-3">
                                            <div className="w-2 h-2 bg-[#9c252d] rounded-full"></div>
                                            Bashkëjetesa
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                            Jeta shkollore frymëzohet nga normat e bashkëjetesës demokratike dhe nga
                                            bashkëpërgjegjësia midis mësuesve, nxënësve dhe prindërve.
                                        </p>
                                    </motion.div>
                                </>
                            )}
                        </div>
                    </motion.div>

                    {/* Section 2: Informacion për Nxënësit dhe Prindërit */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 md:p-8 lg:p-12 rounded-[30px] md:rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10 flex-wrap sm:flex-nowrap">
                            <div className="p-4 md:p-5 bg-gradient-to-br from-[#9c252d]/10 to-[#9c252d]/5 rounded-2xl md:rounded-3xl flex-shrink-0 border border-[#9c252d]/20">
                                <Users size={28} className="md:w-10 md:h-10 text-[#9c252d]" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight font-plus-jakarta leading-tight">
                                    Informacion për <span className="text-[#9c252d]">Nxënësit</span>
                                </h3>
                                <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-[#9c252d] to-[#9c252d]/50 rounded-full mt-2"></div>
                            </div>
                        </div>

                        <div className="grid gap-6 md:gap-8">
                            {isGjimnaz ? (
                                <>
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl border border-blue-100 hover:border-[#9c252d]/30 transition-colors"
                                    >
                                        <h4 className="text-lg md:text-xl font-bold text-[#0f172a] mb-4 flex items-center gap-3">
                                            <div className="p-2 bg-blue-100 rounded-lg">
                                                <CheckCircle className="text-blue-600" size={18} />
                                            </div>
                                            Të Drejtat dhe Detyrat e Nxënësve
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                            Nxënësit kanë të drejtë të trajtohen me respekt, pa diskriminim apo dhunë,
                                            të njihen me rregullat dhe të marrin shërbim arsimor cilësor. Rezultatet e
                                            testeve duhet të komunikohen brenda 15 ditëve dhe nuk lejohen më shumë se
                                            dy teste me shkrim në të njëjtën ditë. Detyrat përfshijnë frekuentimin e
                                            rregullt, kryerjen e detyrave, respektimin e personelit dhe bashkëmoshatarëve,
                                            si dhe kujdesin për mjediset e shkollës.
                                        </p>
                                    </motion.div>

                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="bg-gradient-to-r from-green-50 to-white p-6 rounded-2xl border border-green-100 hover:border-[#9c252d]/30 transition-colors"
                                    >
                                        <h4 className="text-lg md:text-xl font-bold text-[#0f172a] mb-4 flex items-center gap-3">
                                            <div className="p-2 bg-green-100 rounded-lg">
                                                <CheckCircle className="text-green-600" size={18} />
                                            </div>
                                            Oraret, Vonesat dhe Mungesat
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                            Mësimi zakonisht fillon në orën 08:00 dhe përfundon në 13:10 (disa klasa
                                            deri në 13:55). Vonesat janë subjekt i kontrolleve të rregullta nga koordinatori
                                            salezian për të shmangur abuzimet. Mësuesi kujdestar njofton menjëherë prindërit
                                            kur mungesat janë të shumta ose i afrohen pragut maksimal të lejuar.
                                        </p>
                                    </motion.div>
                                </>
                            ) : (
                                <>
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl border border-blue-100 hover:border-[#9c252d]/30 transition-colors"
                                    >
                                        <h4 className="text-lg md:text-xl font-bold text-[#0f172a] mb-4 flex items-center gap-3">
                                            <div className="p-2 bg-blue-100 rounded-lg">
                                                <CheckCircle className="text-blue-600" size={18} />
                                            </div>
                                            Të Drejtat e Nxënësve
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                            Nxënësit kanë të drejtë për arsimim cilësor dhe informim të qartë mbi rregullat
                                            e shkollës, vlerësim objektiv dhe transparent, ku rezultatet e testeve komunikohen
                                            brenda 15 ditëve, si edhe mbrojtje të privatësisë dhe respektim të prejardhjes
                                            kulturore apo fetare.
                                        </p>
                                    </motion.div>

                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-2xl border border-purple-100 hover:border-[#9c252d]/30 transition-colors"
                                    >
                                        <h4 className="text-lg md:text-xl font-bold text-[#0f172a] mb-4 flex items-center gap-3">
                                            <div className="p-2 bg-purple-100 rounded-lg">
                                                <CheckCircle className="text-purple-600" size={18} />
                                            </div>
                                            Detyrat e Nxënësve
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                            Detyrat kryesore përfshijnë frekuentimin e rregullt të mësimit, kryerjen e
                                            detyrave të përditshme, respektimin e orareve të hyrjes dhe daljes, paraqitjen
                                            me uniformë të plotë dhe kujdesin për mjetet e tyre shkollore.
                                        </p>
                                    </motion.div>

                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-2xl border border-orange-100 hover:border-[#9c252d]/30 transition-colors"
                                    >
                                        <h4 className="text-lg md:text-xl font-bold text-[#0f172a] mb-4 flex items-center gap-3">
                                            <div className="p-2 bg-orange-100 rounded-lg">
                                                <CheckCircle className="text-orange-600" size={18} />
                                            </div>
                                            Vonesat dhe Mungesat
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                            Hyrja në shkollë është në 07:55 dhe mësimi fillon në 08:00. Nga 08:00 deri
                                            në 08:10 hyrja bëhet me fletë jeshile pas \"Mirëmëngjesit\"; pas 08:10 hyrja
                                            lejohet vetëm në orën e dytë me fletë portokalli dhe njoftim të familjes.
                                            Pas pushimit të orës 11:00, vonesat mbi 5 minuta kërkojnë fletë blu nga sekretaria.
                                            Gjashtë vonesa në orën e dytë llogariten si një ditë mungesë pa arsye dhe
                                            dalja e parakohshme lejohet vetëm në praninë e prindit me fletë të verdhë.
                                        </p>
                                    </motion.div>
                                </>
                            )}
                        </div>
                    </motion.div>

                    {/* Section 3: Shërbimet dhe Inovacioni */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 md:p-8 lg:p-12 rounded-[30px] md:rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100"
                    >
                        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 flex-wrap sm:flex-nowrap">
                            <div className="p-3 md:p-4 bg-[#9c252d]/5 rounded-xl md:rounded-2xl flex-shrink-0">
                                <Shield size={24} className="md:w-8 md:h-8 text-[#9c252d]" />
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight font-plus-jakarta leading-tight min-w-0 break-words">
                                Shërbimet dhe <span className="text-[#9c252d]">Inovacioni</span>
                            </h3>
                        </div>

                        <div className="space-y-8">
                            {isGjimnaz ? (
                                <>
                                    <div className="space-y-4">
                                        <h4 className="text-base md:text-xl font-bold text-[#0f172a] flex items-center gap-2">
                                            <CheckCircle className="text-[#9c252d]" size={20} />
                                            Mbështetja dhe Rikuperimi
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Shkolla ofron rikuperim përmes programeve si DBCOLLEGE, me kurse
                                            përmirësuese jashtë orarit të mësimit për nxënësit me mangësi. Frekuentimi
                                            është i detyrueshëm, përveç rasteve kur familja kërkon zyrtarisht lirim me
                                            shkrim. Psikologu i shkollës ndihmon në hartimin e planeve individuale (PEI)
                                            për nxënësit me vështirësi në të nxënë.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-base md:text-xl font-bold text-[#0f172a] flex items-center gap-2">
                                            <CheckCircle className="text-[#9c252d]" size={20} />
                                            Teknologjia dhe Inovacioni
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Përdoren tabela interaktive (LIM), laboratorë kompjuterikë dhe ofrohet
                                            drejtimi profesional \"Teknologji Informacioni dhe Komunikimi\" (Programim),
                                            duke i pajisur të rinjtë me aftësi bashkëkohore teknologjike.
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="space-y-4">
                                        <h4 className="text-base md:text-xl font-bold text-[#0f172a] flex items-center gap-2">
                                            <CheckCircle className="text-[#9c252d]" size={20} />
                                            Uniforma dhe Paraqitja
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Uniforma përbëhet nga bluza me mëngë të shkurtra ose të gjata, e cila duhet
                                            të vishet gjithmonë, dhe një hoodie (felpë) ose xhup i lehtë sipas stinës.
                                            Nuk lejohen xhinse të grisura, pantallona apo funde mbi gju, strece, minifunde,
                                            dekolte apo veshje me mesazhe çedukuese. Për Edukimin Fizik kërkohet veshje
                                            e veçantë sportive dhe nuk lejohet aktiviteti fizik me uniformën zyrtare.
                                            Është i ndaluar make-up-i, qerpikët fallso, thonjtë e gjatë me ngjyra të forta,
                                            tatuazhet e dukshme dhe flokët me ngjyra të spikatura.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-base md:text-xl font-bold text-[#0f172a] flex items-center gap-2">
                                            <CheckCircle className="text-[#9c252d]" size={20} />
                                            Inovacioni dhe Shërbimet
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Përdoren tabela Smart Board, klasa virtuale, regjistër elektronik dhe
                                            metodologjia \"Cooperative Learning\" (të mësuarit bashkëpunues). Shërbimi
                                            i psikologut, planet individuale (PEI) dhe programet e rikuperimit mbështesin
                                            çdo nxënës në rrugën e tij formuese.
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>

                    {/* Section 4: Jeta Jashtëshkollore */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 md:p-8 lg:p-12 rounded-[30px] md:rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100"
                    >
                        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 flex-wrap sm:flex-nowrap">
                            <div className="p-3 md:p-4 bg-[#9c252d]/5 rounded-xl md:rounded-2xl flex-shrink-0">
                                <Heart size={24} className="md:w-8 md:h-8 text-[#9c252d]" />
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight font-plus-jakarta leading-tight min-w-0 break-words">
                                Jeta <span className="text-[#9c252d]">Jashtëshkollore</span>
                            </h3>
                        </div>

                        <div className="space-y-8">
                            {isGjimnaz ? (
                                <>
                                    <div className="space-y-4">
                                        <h4 className="text-base md:text-xl font-bold text-[#0f172a] flex items-center gap-2">
                                            <CheckCircle className="text-[#9c252d]" size={20} />
                                            Disiplina dhe Masat
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Masat disiplinore kanë karakter edukativ dhe përgjegjësia është personale.
                                            Ndalohet përdorimi i telefonave celularë dhe pajisjeve të ngjashme në mjediset
                                            e shkollës. Shkelje të rënda si dhuna, vjedhja, droga, armët apo refuzimi i
                                            qartë i Planit Formativ mund të çojnë në përjashtim të menjëhershëm dhe në
                                            raportim në organet përkatëse.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-base md:text-xl font-bold text-[#0f172a] flex items-center gap-2">
                                            <CheckCircle className="text-[#9c252d]" size={20} />
                                            Aktivitetet dhe Udhëtimet
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Organizohen kampionate sportive, olimpiada dhe aktivitete trajnuese. Ekskursionet
                                            shumëditore nuk janë një e drejtë automatike, por një shpërblim për nxënësit më
                                            të angazhuar dhe shembullor në sjellje dhe rezultate.
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="space-y-4">
                                        <h4 className="text-base md:text-xl font-bold text-[#0f172a] flex items-center gap-2">
                                            <CheckCircle className="text-[#9c252d]" size={20} />
                                            Disiplina dhe Pajisjet Elektronike
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Celularët, tabletat dhe smart‑watch-et dorëzohen në fillim të mësimit. Nëse
                                            përdoren pa leje, sekuestrohen dhe i dorëzohen vetëm prindit, me kohëmbajtje
                                            që rritet nga një ditë, një javë deri në një muaj në rast përsëritjeje. Ndalohet
                                            çamçakëzi dhe konsumimi i ushqimit apo pijeve (përveç ujit) në klasë. Masat
                                            disiplinore variojnë nga shënimi në regjistër dhe këshillimi, deri te vërejtja
                                            me shkrim, thyerja e notës në sjellje dhe ndërprerja e kontratës në rastet e
                                            rënda.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-base md:text-xl font-bold text-[#0f172a] flex items-center gap-2">
                                            <CheckCircle className="text-[#9c252d]" size={20} />
                                            Aktivitetet, Klubet dhe Olimpiadat
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Shkolla ofron klube të ndryshme (art, kulturë, sport), pjesëmarrje në olimpiada
                                            dhe konkurse kombëtare, si edhe aktivitete jashtëshkollore që forcojnë karakterin
                                            dhe bashkëpunimin mes nxënësve.
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>

                    {/* Section 5: Dokumentacioni */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0f172a] p-6 md:p-8 lg:p-12 rounded-[30px] md:rounded-[40px] text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 -mr-24 -mt-24 rounded-full blur-[80px]"></div>
                        
                        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 relative z-10">
                            <div className="p-3 md:p-4 bg-white/10 rounded-xl md:rounded-2xl flex-shrink-0">
                                <Calendar size={24} className="md:w-8 md:h-8 text-white" />
                            </div>
                            <h3 className="text-xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight font-plus-jakarta leading-tight">
                                Dokumentacioni dhe <span className="text-[#9c252d]">Transparenca</span>
                            </h3>
                        </div>

                        <div className="space-y-4 md:space-y-6 relative z-10">
                            {!isGjimnaz && (
                                <a
                                    href="/docs/PF Shkolla 9-vjecare Don Bosko 2025-2026 Shtator 2025.pdf"
                                    download
                                    className="flex items-start gap-3 p-3 md:p-0 rounded-lg md:rounded-none bg-white/5 md:bg-transparent hover:bg-white/10 md:hover:bg-transparent transition-colors touch-manipulation"
                                >
                                    <span className="inline-flex h-10 w-10 md:h-8 md:w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                                        <Download size={18} className="md:w-4 md:h-4" />
                                    </span>
                                    <span className="text-white/90 hover:text-white text-sm md:text-base break-words leading-relaxed">
                                        PF Shkolla 9-vjecare Don Bosko 2025-2026 Shtator 2025.pdf
                                    </span>
                                </a>
                            )}
                            {isGjimnaz && (
                                <a
                                    href="/docs/PF Shkolla e Mesme Don Bosko 2025-2026 Shtator 2025.pdf"
                                    download
                                    className="flex items-start gap-3 p-3 md:p-0 rounded-lg md:rounded-none bg-white/5 md:bg-transparent hover:bg-white/10 md:hover:bg-transparent transition-colors touch-manipulation"
                                >
                                    <span className="inline-flex h-10 w-10 md:h-8 md:w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                                        <Download size={18} className="md:w-4 md:h-4" />
                                    </span>
                                    <span className="text-white/90 hover:text-white text-sm md:text-base break-words leading-relaxed">
                                        PF Shkolla e Mesme Don Bosko 2025-2026 Shtator 2025.pdf
                                    </span>
                                </a>
                            )}
                            <p className="text-white/90 text-sm md:text-base leading-relaxed">Plani Formativ i plotë (i depozituar në sekretari)</p>
                            <p className="text-white/90 text-sm md:text-base leading-relaxed">Rregullorja e Brendshme</p>
                            <p className="text-white/90 text-sm md:text-base leading-relaxed">Formularë autorizimi për udhëtime mësimore</p>
                        </div>
                    </motion.div>

                    {/* Back Button */}
                    <div className="flex justify-start pt-8">
                        <Link 
                            to={config.backHref} 
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#0f172a] transition-colors uppercase text-[10px] font-black tracking-widest"
                        >
                            <ArrowLeft size={14} />
                            <span>MBRAPA</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PlaniAkademik;
