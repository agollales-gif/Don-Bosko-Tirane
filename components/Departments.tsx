import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

const Departments: React.FC = () => {
    const language = 'AL';
    const t = TRANSLATIONS[language];

    const depts = [
        { name: 'Shkolla', slug: '/shkolla', icon: '🎓', desc: 'Arsim cilësor dhe formim njerëzor.' },
        { name: 'Oratori', slug: '/oratori', icon: '⚽', desc: 'Shtëpi dhe argëtim për rininë.' },
        { name: 'Famullia', slug: '/famullia', icon: '⛪', desc: 'Bashkësi shpirtërore dhe lutje.' },
        { name: 'Qendra Ditore', slug: '/qendra-ditore', icon: '❤️', desc: 'Mbështetje për ata në nevojë.' },
    ];

    return (
        <section className="py-14 md:py-24 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
                    {depts.map((dept, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                to={dept.slug}
                                className="group flex flex-col items-center text-center space-y-3 p-4 md:p-8 rounded-2xl md:rounded-[32px] hover:bg-slate-50 transition-all duration-500 block"
                            >
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-white shadow-lg shadow-slate-200/50 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6">
                                    {dept.icon}
                                </div>
                                <div className="space-y-1 md:space-y-2">
                                    <h4 className="font-black uppercase tracking-wider text-[10px] md:text-[11px] text-gray-900 group-hover:text-primary-red transition-colors">
                                        {dept.name}
                                    </h4>
                                    <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase leading-relaxed max-w-[120px] hidden sm:block">
                                        {dept.desc}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Departments;
