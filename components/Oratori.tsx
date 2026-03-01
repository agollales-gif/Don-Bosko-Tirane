import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

const Oratori: React.FC = () => {
    const language = 'AL';
    const t = TRANSLATIONS[language];

    // Shtojmë tipin 'Variants' që TypeScript ta kuptojë saktë
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            // Ndryshuam ease në "easeOut" për të shmangur gabimet e vargjeve në TS
            transition: { duration: 0.7, ease: "easeOut" } 
        }
    };

    return (
        <section id="oratori" className="relative bg-[#fafaf5] py-20 lg:py-32 px-4 sm:px-6 overflow-hidden">
            
            {/* Dekorime Premium ne Sfond (Drita te turbullta) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary-red/5 rounded-full blur-[80px] sm:blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-primary-red/5 rounded-full blur-[60px] sm:blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                {/* Kolona e Tekstit */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8 lg:space-y-10"
                >
                    <motion.div variants={itemVariants} className="space-y-4 lg:space-y-5">
                        {/* Badge Luksoz */}
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-primary-red animate-pulse"></span>
                            <h3 className="text-primary-red text-xs font-black uppercase tracking-[0.2em]">
                                Departamenti i Rinisë
                            </h3>
                        </div>
                        
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 font-plus-jakarta leading-[1.1]">
                            Oratori <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-red-500">
                                Don Bosko
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                            Një shtëpi që mirëpret, një famulli që ungjillëzon, një shkollë që përgatit për jetën dhe një kënd lojrash ku miqtë takohen dhe jetojnë me gëzim.
                        </p>
                    </motion.div>

                    {/* Karta e Linkut (Mini Card hover effect) */}
                    <motion.div variants={itemVariants} className="pt-2">
                        <Link 
                            to="/oratori/aktiviteti" 
                            className="group block bg-white border border-gray-100 p-4 sm:p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 max-w-full sm:max-w-sm"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col space-y-1">
                                    <span className="font-bold text-gray-900 uppercase text-sm tracking-widest group-hover:text-primary-red transition-colors">
                                        Aktiviteti
                                    </span>
                                    <span className="text-gray-500 text-sm font-medium">
                                        Sport dhe Formim
                                    </span>
                                </div>
                                {/* Shigjeta qe leviz */}
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary-red group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <Link 
                            to="/oratori/aktiviteti" 
                            className="btn-primary inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg shadow-primary-red/20 hover:shadow-primary-red/40 hover:-translate-y-0.5 transition-all duration-300 font-bold tracking-wide text-center"
                        >
                            Zbulo Aktivitetet
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Kolona e Imazhit */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative group perspective order-1 lg:order-2"
                >
                    {/* Sfondi abstrakt pas fotos */}
                    <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-primary-red/10 to-transparent rounded-[30px] sm:rounded-[40px] rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>
                    <div className="absolute -inset-4 sm:-inset-6 bg-white rounded-[30px] sm:rounded-[40px] -rotate-3 shadow-xl group-hover:-rotate-1 transition-transform duration-700"></div>
                    
                    {/* Maskimi i imazhit per zoom ne hover */}
                    <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden border-4 border-white shadow-2xl z-10 w-full aspect-[16/9] sm:aspect-[4/3]">
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <img
                            src="https://picsum.photos/seed/oratory/1000/800"
                            alt="Oratori Activities"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </div>

                    {/* Element dekorativ plus mbi foto */}
                    <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-left-8 bg-white p-3 sm:p-4 rounded-2xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                        <div className="bg-red-50 text-primary-red font-bold px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm">
                            ⭐ Don Bosko
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Oratori;