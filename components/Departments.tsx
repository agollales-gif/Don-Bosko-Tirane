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
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
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
                                className="group flex flex-col items-center text-center space-y-4 p-8 rounded-[32px] hover:bg-slate-50 transition-all duration-500 block"
                            >
                                <div className="w-16 h-16 bg-white shadow-xl shadow-slate-200/50 rounded-2xl flex items-center justify-center text-2xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6">
                                    {dept.icon}
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-black uppercase tracking-widest text-[11px] text-gray-900 group-hover:text-primary-red transition-colors">
                                        {dept.name}
                                    </h4>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase leading-relaxed max-w-[140px]">
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
